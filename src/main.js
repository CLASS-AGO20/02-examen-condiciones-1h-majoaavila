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



