import { Item } from "./Item.js";
import { Tabela } from "./tabela.js";
import { ListaDeCompras } from "./lista-de-compras.js";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let valorDaCompra = 0;
        let output = '';
        try{
            if(itens != ''){
                try{
                    if(metodoDePagamento != ''){
                        let valor = 0;
                        let tabela = new Tabela(); //instanciei o objeto tabela usando a classe Tabela
                        let lista = new ListaDeCompras();
                        let status;
                
                        for (let i = 0 ; i < itens.length; i++){
                
                            let pedido = itens[i].split(','); //dividindo a string na vírgula
                            let index;
                            try{
                                index = tabela.acharCorrespondente(pedido[0]); // procurando a posição do pedido
                                if(index == -1){
                                    throw new Error ("Item inválido!");
                                }
                            }
                            catch(e){
                                output = "Item inválido!"
                            }
                            
                            try{//try - tenta executa o código, se não conseguir joga o erro para o catch mais próximo
                                if(pedido[1] != 0){
                                    for (let j = 0 ; j < pedido[1]; j++){ //procurar a string pedido[0] na classe tabela
                                        let item = new Item(tabela.codigo[index], tabela.preco[index], tabela.descricao[index]); // criando o objeto
                                        lista.compras.push(item);
                                    }
                    
                                }
                                
                                else{
                                    throw new Error("Quantidade inválida!"); //throw new Error - lança o erro, procura o catch mais perto e capta a mensagem de erro  
                                }
                            }
                            catch(e){
                                output = "Quantidade inválida!"; //catch - encerra o programa
                            }
                
                        }
                        try{
                            status = lista.verificarLista();
                            if (status != 'Sucesso!'){
                                throw new Error (status);
                            }
                        }   
                        catch(e){
                            output = 'Item extra não pode ser pedido';
                        }

                        lista.compras.forEach(item => {
                            valor += item.preco;
                        });
                        
                        try{
                            if(metodoDePagamento == 'dinheiro'){
                                valorDaCompra = valor * 0.95;
                            }
                            else if(metodoDePagamento == 'credito'){
                                valorDaCompra = valor * 1.03;
                            }
                            else if(metodoDePagamento == 'debito'){
                                valorDaCompra = valor;
                            }                            
                            else{
                                 throw new Error ('Forma de pagamento inválida!');
                            }

                            if(valorDaCompra != 0){ 
                                valorDaCompra = valorDaCompra.toFixed(2);
                                output = 'R$ ' + valorDaCompra;
                                output = output.replace(".",",");    
                            }
 
                        }
                        catch(e){
                            output = 'Forma de pagamento inválida!';
                        }            
                    }
                    else{
                        throw new Error ('Forma de pagamento inválida!');
                    }
                }
                catch(e){
                    output = 'Forma de pagamento inválida!';
                }
            }  
            else{
                throw new Error ('Não há itens no carrinho de compra!');
            }
        }
        catch(e){
            output = 'Não há itens no carrinho de compra!';
        }
        
        
        return output;
    }

}
let caixa = new CaixaDaLanchonete()
console.log(caixa.calcularValorDaCompra('dinheiro', 'salgado,0'));
export { CaixaDaLanchonete };