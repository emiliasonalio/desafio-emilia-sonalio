import { Item } from "./Item.js";
import { Tabela } from "./tabela.js";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let valorTotal = 0;
        let tabela = new Tabela();
        
        let pedidoCompleto = ['cafe,2', 'sanduiche,1', 'queijo,1']

        

        for (let i = 0 ; i < pedidoCompleto.length; i++){
            let pedido = pedidoCompleto[i].split(',');
            for (let j = 0 ; j <  pedido[1]; j++){
                //procurar a string pedido[0] na classe tabela
                let index = tabela.acharCorrespondente(pedido[0]);
                let item = new Item(tabela.codigo[index], tabela.preco[index], tabela.descricao[index]);
            }    
        }

        let cafe = new Item(tabela.codigo[0], tabela.preco[0], tabela.descricao[0])

        let listaDeCompras = [];
        listaDeCompras.push(cafe)


        listaDeCompras.forEach(item => {
            valorTotal += item.preco;
        });
        return "";
    }

}

/* console.log(item1.codigo)
console.log(item1.descricao)
console.log(item1.preco)
imprimir */

export { CaixaDaLanchonete };