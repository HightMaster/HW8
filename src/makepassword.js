'use strict'
const fs = require('fs');
const {readFile, writeFile, hash} = require('./utility')
const {createHash} = require('crypto')

//Transforms login line of data into email:hashedPassword format
function transformData(login){
    //Separates login data into two variables
    let password = login.split(":")[1]
    // console.log(hash(password))
    // console.log(hash("123456\r"))
    let user = login.split(":")[0]
    //Hashes the password
    password = hash(password)
    //Creates array with new login data and hashed password
    let newLogin = [user, password]
    //Joins elements of array together using ":" as a delimiter
    newLogin = newLogin.join(":")
    //Returns new hashed login data as a single string
    return newLogin;
}

function makepassword(passwordFileName, passwordEncFileName) {
    let logins = readFile(passwordFileName);
    logins = logins.map(transformData)
    console.log(logins)
    writeFile(logins, passwordEncFileName)
}

if (require.main === module) {
    makepassword('./password.txt', '../password.enc.txt')
}

module.exports = {makepassword};