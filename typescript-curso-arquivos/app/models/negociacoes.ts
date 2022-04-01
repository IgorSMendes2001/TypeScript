import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes:Array<Negociacao>=[];//Uso de Generics// Também serve como Negociacao[]=[];
    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao);
    }
    lista():ReadonlyArray<Negociacao>{//Readonly Array é aquela lista de somente leitura
        // return [...this.negociacoes];//spread operator pega cada item do array negociacoes e coloca na lista , ou seja não altera a negociacao original que deve ser encapsulada e imutavel
        return this.negociacoes;
    }
}
