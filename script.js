class Atleta {

    constructor(peso){
        this.peso = peso;
    }

    definirCategoria(){
        if (this.peso <= 50) {
            this.categoria = 'infantil';
        }
        else if (this.peso <= 65) {
            this.categoria = 'juvenil';
        }
        else if (this.peso <= 85) {
            this.categoria = 'adulto';
        }
        else {
            this.categoria = 'indefinido';
        }
    }
}

class Lutador extends Atleta {
    constructor(peso){
        super(peso)
    }

    definirCategoria() {
        if (this.peso <= 54) {
            this.categoria = 'pluma';
        }
        else if (this.peso <= 60) {
            this.categoria = 'leve';
        }
        else if (this.peso <= 75) {
            this.categoria = 'meio-leve';
        }
        else {
            this.categoria = 'pesado';
        }
    }
}

const atleta1 = new Atleta(55);
const atleta2 = new Atleta(70);
const atleta3 = new Atleta(100);

atleta1.definirCategoria();
atleta2.definirCategoria();
atleta3.definirCategoria();

console.log(atleta1.categoria);
console.log(atleta2.categoria);
console.log(atleta3.categoria);

const atleta4 = new Lutador(55);
const atleta5 = new Lutador(70);
const atleta6 = new Lutador(100);

atleta4.definirCategoria();
atleta5.definirCategoria();
atleta6.definirCategoria();

console.log(atleta4.categoria);
console.log(atleta5.categoria);
console.log(atleta6.categoria);