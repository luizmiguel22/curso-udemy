/*function cria (nome , sobrenome , idade)
{
    return {
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    }
}
const pessoa1= cria('luiz', 'otaviano', 55)
const pessoa2= cria('maria', 'otio', 25)
const pessoa3= cria('lucas', 'miguel', 5)
const pessoa4= cria('julia', 'faquini', 45)
const pessoa5= cria('juliana', 'silva', 31)
const pessoa6= cria('luiza', 'alves', 34)

console.log(pessoa1.nome.
)*/
const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'alves',
    idade: 17,

    fala() {
        console.log(`meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`)
    },
    incremento(){
        this.idade++
    }
}
pessoa1.fala()
pessoa1.incremento()
pessoa1.fala()
