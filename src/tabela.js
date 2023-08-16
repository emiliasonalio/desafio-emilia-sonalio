class Tabela {
    constructor(){//define a sequencia que os atributos são guardados
        this.codigo = ['cafe', 'chantily', 'suco', 'sanduiche', 'queijo', 'salgado', 'combo1', 'combo2'];
        this.preco = [3.00, 1.50, 6.20, 6.50, 2.00, 7.25, 9.50, 7.50];
        this.descricao = ['Café', 'Chantily', 'Suco Natural', 'Sanduíche', 'Queijo (Extra do Sanduíche', 'Salgado', '1 Suco e 1 Sanduíche', '1 Café e 1 Sanduíche'];

    }

    acharCorrespondente(pedido){
        let posicao = -1;
        for(let i = 0; i < this.codigo.length; i++){
            if (pedido == this.codigo[i]){
                posicao = i;
            }
        }

        return posicao;
    }

}

export { Tabela };
