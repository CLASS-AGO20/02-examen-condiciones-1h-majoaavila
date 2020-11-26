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
}

let app = new App();

console.log("Probando convertir()");
console.log(app.convertir(1000));
console.log(app.convertir(2000));
console.log(app.convertir(3000));

