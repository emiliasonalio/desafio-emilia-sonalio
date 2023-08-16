class ListaDeCompras {
    constructor(){
        this.compras = [];

    }

    verificarLista(){
   
        let status = '';
        let chantily = false;
        let queijo = false;

        for(let i = 0; i < this.compras.length; i++) {

            if(this.compras[i].codigo == 'chantily') {
                chantily = true;
                status = 'Item extra não pode ser pedido';
            }
        }

        for(let j = 0; j < this.compras.length; j++) {

            if(chantily && this.compras[j].codigo == 'cafe' || !chantily && this.compras[j].codigo == 'cafe') {
                status = 'Sucesso';
            }
        }

        for(let i = 0; i < this.compras.length; i++) {

            if(this.compras[i].codigo == 'queijo') {
                queijo = true;
                status = 'Item extra não pode ser pedido';
            }
        }

        for(let j = 0; j < this.compras.length; j++) {

            if(queijo && this.compras[j].codigo == 'sanduiche' || !queijo && this.compras[j].codigo == 'sanduiche') {
                status = 'Sucesso';
            }
        }

        return status; 
    }

}

export { ListaDeCompras };