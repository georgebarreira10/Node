//1- importar o modulo que neste é o 'os'
const os = require('os')
const fs = require('fs')
const path = require('path')

//2- guardar as informaçoes em uma variavel do usuario utilizando o modulo os.userInfo()

const userInfo = os.userInfo()
//console.log(`User Info: ${userInfo.username}`)

//console.log(`User Info: ${JSON.stringify(userInfo)}`)

//caminho do arquivo
const pathFile = path.join(__dirname, 'user.txt')

fs.appendFile(
    pathFile, //`./'user.txt`, 
    `${JSON.stringify(userInfo)}\n`,
    () => console.log('Info escrita no arquivo...'))

    //console.log(path.join(__dirname, 'user.txt'))
    //console.log(__dirname) *mostra o que o arquivo mostra p mim