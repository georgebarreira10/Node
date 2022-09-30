//commomJS responsavel por importar ou exportar modulos
//importando o modulo 'os' do node e colocando em uma variavel 

const os = require('os')
const { byteToGB } = require('../aula02/convertUnitStorage')
// const { byteToMB } = require('../aula02/convertUnitStorage')
const fs = require('fs')

//  o modulo 'os' está dentro da variavel 'os', desta forma conseguimos
// acessar as propriedades e metodos deste modulo/objeto.
setInterval(() => {

    const totalMem = parseInt(byteToGB(os.totalmem())).toFixed(2)
    const freeMem = parseInt(byteToGB(os.freemem())).toFixed(2)
    const percent = parseInt((freeMem / totalMem) * 100)

    const memoria = {
        total: `${totalMem} GB`,
        free: `${freeMem} GB`,
        percent: `${percent} %`
    }
    console.clear()
    console.table(memoria)
    fs.appendFile('../aula02/log.txt',
        'Inserindo log...',
        'utf-8',
        () => console.log('log inserido'))
}, 1000)

//console.log(`Memória Livre: ${ freeMem }`, `Total de memória: ${ totalMem } `)
