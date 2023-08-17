class CarrinhoDeCompras {
    constructor(){
        this.compras = [];

    }

    verificarStatus(){
        let status = false;

        let chantily = false;
        let queijo = false;

        //verifica se há item extra
        for(let i = 0; i < this.compras.length; i++) {

            if(this.compras[i].codigo == 'chantily') {
                chantily = true;
            }
            if(this.compras[i].codigo == 'queijo') {
                queijo = true;
            }
        }

        //verifica status do carrinho
        for(let j = 0; j < this.compras.length; j++) {

            if(chantily && this.compras[j].codigo == 'cafe' || !chantily && this.compras[j].codigo == 'cafe' && !queijo) {
                status = true;
            }
            if(queijo && this.compras[j].codigo == 'sanduiche' || !queijo && this.compras[j].codigo == 'sanduiche' && !chantily) {
                status = true;
            }
        }

        return status; 
    }

}

export { CarrinhoDeCompras };