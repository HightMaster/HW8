'use strict'
const fs = require('fs');
const util = require('./utility')
const process = require("process")
const {readFile, hash} = require("./utility");
const {createHash} = require('crypto')

function passwordjs() {
    if (process.argv.length != 5) return 'false';
    //console.log(process.argv)

    var filename = process.argv[2]
    var email = process.argv[3]
    var password = process.argv[4]

    let encryptedLogins = readFile("password.enc.txt")
    password = hash(password)
    // console.log("Plain CLI Pass: " + process.argv[4] + "\n" + "Hashed CLI Pass: " + password + "\n")
    // console.log("Hashed 123456: " + hash("123456"))
    for (let i=0; i < encryptedLogins.length; i++){
        //console.log("Password: " + password + "\nHashed Password File: " + encryptedLogins[i].split(":")[1])
        if(email == encryptedLogins[i].split(":")[0] && password == encryptedLogins[i].split(":")[1]){
            //console.log(encryptedLogins.filter(login => (email == login.split(":")[0] && password == login.split(":")[1])))
            //console.log(encryptedLogins[1].split(":")[1] == password)
            return true
        }
    }
    return false

    //
}

if (require.main === module) {
    console.log(passwordjs()) // print out true or false
}

module.exports = {passwordjs};