// To unit-test the function that generates 'password.enc.txt', you should
//  make sure the unit test does the following check.
// 1. Make sure password.enc.txt does not exist before running the function.
// 2. Make sure password.enc.txt does exist after running the function.
// 3. Make sure the contents of password.enc.txt has correct contents.
// For unit tests, you don't have to have a large input in the beginning.
// Start with smallest input, and add more contents in the input

const p = require('../src/makepassword');
const {readFile, writeFile, hash} = require('../src/utility')
const fs = require('fs');
//const expect = require('expect')
const {readFileSync} = require("graceful-fs");
const {transformData} = require("../src/makepassword");

/*
// Let's say you have a toHash() function in this module

test('Check toHash(): if the email:password is converted into email:hashPassword', () => {
    const input = ???
    const output = ???
    expect(p.toHash(input)).toBe(output);
});
*/
function fileExists(filePath){
    try{
        fs.readFileSync(filePath)
        return "true";
    } catch (error){
        return "false"
    }
}
describe("makepassword should create file", () => {
    test('Testing makepassword',() => {

        const fileName = './tests/passwordtest.txt'
        const encFileName = './tests/passwordtest.enc.txt'
        if (fs.existsSync(encFileName)) fs.unlinkSync(encFileName);

        expect(fs.existsSync(encFileName)).toEqual(false)
        // // 1. Make sure password.enc.txt does not exist before running the function.
        // ???
        //
        p.makepassword(fileName, encFileName)
        //
        // // 2. Make sure password.enc.txt does exist after running the function.
        // ???
        expect(fs.existsSync(encFileName)).toEqual(true)
        //
        // // 3. Make sure the contents of password.enc.txt has correct contents.
        // ???
        expect(readFile(encFileName)).toEqual(readFile("./tests/passwordtest.enc.txt"))

        //Testing personal transformData() function
        expect(transformData("sm.cho@hello.com:123456")).toEqual("sm.cho@hello.com:8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92")
    })
})