export default class App {

    convertir(pesos) {
        let dolar;
        dolar = 20.5 * pesos;

        let euro;
        euro = 22.7 * pesos;

        if(pesos < 2000) {
            return dolar;

        } else if(pesos >= 2000) {
            return euro;
        }
    }

    costoRenta(kilometros) {
        if (kilometros < 50) {
            return kilometros * 3;

        } else if(kilometros >= 50 && kilometros < 100) {
            return kilometros * 5;

        } else if(kilometros >= 100 && kilometros < 200) {
            return kilometros * 6;

        } else if(kilometros >= 200) {
            return kilometros * 6.5;
        }
    }

    
    puedeCircular(dia, terminacion) {
        if(dia === 1 && terminacion === 0) {
            return true;

        } else if(dia === 2 && terminacion === 1) {
            return true;

        } else if(dia === 3 && terminacion === 2) {
            return true;

        } else if(dia === 4 && terminacion ===2) {
            return true;

        } else if( dia >= 1 && dia <= 7 && terminacion >= 3 && terminacion <= 9) {
            return true;

            
        } else {
            return false;
        }
    }
}

let app = new App();

console.log("Probando convertir()");
console.log(app.convertir(1000));
console.log(app.convertir(2000));
console.log(app.convertir(3000));

console.log("Probando costoRenta()");
console.log(app.convertir(30));
console.log(app.convertir(50));
console.log(app.convertir(60));
console.log(app.convertir(99));
console.log(app.convertir(100));
console.log(app.convertir(150));
console.log(app.convertir(199));
console.log(app.convertir(200));
console.log(app.convertir(300));

console.log("Probando puedeCircular()");
console.log(app.puedeCircular(1, 0));
console.log(app.puedeCircular(1, 1));
console.log(app.puedeCircular(2, 1));
console.log(app.puedeCircular(2, 2));
console.log(app.puedeCircular(3, 2));
console.log(app.puedeCircular(4, 2));
console.log(app.puedeCircular(3, 1));
console.log(app.puedeCircular(6, 5));








