import { Item } from "./item.js";
import { Tabela } from "./tabela.js";
import { CarrinhoDeCompras } from "./carrinho-de-compras.js";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let tabela = new Tabela();
        let carrinho = new CarrinhoDeCompras();

        let total = 0;
        let status = false;

        let valorDaCompra = 0;
        let output = '';

        try{

            // Tratamento de erro para parâmetros vazios
            try{
                if(itens == ''){
                    throw new Error ('Não há itens no carrinho de compra!');
                }
                if(metodoDePagamento == ''){
                    throw new Error ('Forma de pagamento inválida!');
                }
            }
            catch(error){
                throw error;
            }

            // Tratamento de dados & colocar itens no carrinho de compras
            try{
                for (let i = 0 ; i < itens.length; i++){
                    let itemInfo = itens[i].split(',');

                    if(itemInfo[0] == '') {
                        throw new Error('Item inválido!');
                    }
                    if(itemInfo[1] == 0 || itemInfo[1] == '') {
                        throw new Error('Quantidade inválida!');
                    }

                    let index = tabela.encontrarIndex(itemInfo[0]);

                    if(index == -1) {
                        throw new Error('Item inválido!');
                    }

                    if(itemInfo[1] != 0 || itemInfo != ''){
                        for (let j = 0 ; j < itemInfo[1]; j++){
                            let item = new Item(tabela.codigo[index], tabela.preco[index], tabela.descricao[index]);
                            carrinho.compras.push(item);
                        }
                    }
                }
            }
            catch(error) {
                throw error;
            }


            // Verificação de itens extra no carrinho
            try{
                status = carrinho.verificarStatus();
                if (status == false){
                    throw new Error ('Item extra não pode ser pedido sem o principal');
                }
            }
            catch(error) {
                throw error;
            }


            // Calculando total da compra & realizando pagamento
            try {
                carrinho.compras.forEach(item => {
                    total += item.preco;
                });
        
                if(metodoDePagamento == 'dinheiro'){
                    valorDaCompra = total * 0.95;
                }
                else if(metodoDePagamento == 'credito'){
                    valorDaCompra = total * 1.03;
                }
                else if(metodoDePagamento == 'debito'){
                    valorDaCompra = total;
                }                            
                else{
                    throw new Error ('Forma de pagamento inválida!');
                }
            }
            catch(error) {
                throw error;
            }
            

            // Tratamento de dados - formatando output
            try {
                if(valorDaCompra != 0){ 
                    valorDaCompra = valorDaCompra.toFixed(2);
                    output = 'R$ ' + valorDaCompra;
                    output = output.replace(".",",");    
                }
            }
            catch(error) {
                throw error;
            }
        }
        catch(error) {
            output = error.message;
        }


        return output;
    }

}


//let caixa = new CaixaDaLanchonete()
//console.log(caixa.calcularValorDaCompra('dinheiro', 'salgado,0'));
export { CaixaDaLanchonete };