export class Negociacoes {
    constructor() {
        this.negociacoes = []; //Uso de Generics// Também serve como Negociacao[]=[];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // return [...this.negociacoes];//spread operator pega cada item do array negociacoes e coloca na lista , ou seja não altera a negociacao original que deve ser encapsulada e imutavel
        return this.negociacoes;
    }
}
