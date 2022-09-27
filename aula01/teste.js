//commomJS responsavel por importar ou exportar modulos
//importando o modulo 'os' do node e colocando em uma variavel 

const os = require('os')

//  o modulo 'os' está dentro da variavel 'os', desta forma conseguimos
// acessar as propriedades e metodos deste modulo/objeto.

const totalMem = parseInt(os.totalmem() / 1024 / 1024)
const freeMem = parseInt(os.freemem() / 1024 / 1024)
const memoria = {
    total: `${totalMem} MB`,
    free: `${freeMem} MB`,
}
console.clear()
console.table(memoria)

//console.log(`Memória Livre: ${ freeMem }`, `Total de memória: ${ totalMem } `)