function preuTrucada() {
    let hores = parseInt(prompt("Hores de la trucada:"));
    let minuts = parseInt(prompt("Minuts de la trucada:"));
    let segons = parseInt(prompt("Segons de la trucada:"));

    let tempsTotal = segons + (minuts*60) + (hores*60*60);
    let preu = tempsTotal%60;
    let resta = 0;
    if (preu != 0) {
        resta = 5;
    }
    preuTotal = ((resta + (Math.floor(tempsTotal/60)*5) + 10)/100).toFixed(2);
    console.log("El cost total és: " + preuTotal + " euros");
}

function changeToHexadecimal() {
    let numR = parseInt(prompt("Entra el valor de 'r':"));
    let numG = parseInt(prompt("Entra el valor de 'g':"));
    let numB = parseInt(prompt("Entra el valor de 'b':"));
    let hexadecimalR = toHexadecimal(numR);
    let hexadecimalG = toHexadecimal(numG);
    let hexadecimalB = toHexadecimal(numB);
    console.log("(" + numR + ", " + numG + ", " + numB +") = #" + hexadecimalR + hexadecimalG + hexadecimalB);
}

function toHexadecimal(num) {
    if (num.toString(16).length == 1) {
        return "0" + (num.toString(16).toUpperCase());
    } else {
        return (num.toString(16)).toUpperCase();
    }
}

function caixaSuper(){
    let precio_art = parseInt(prompt("Entra el preu de l'article:"));
    let dinero = parseInt(prompt("Quants diners dones per pagar:"));
    let cambio = dinero - precio_art;
    if (cambio > 0) {
        let arrayDinero = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
        let arrayCantidades = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (let i=0; i<arrayDinero.length; i++){
            while (cambio >= arrayDinero[i]) {
                cambio = cambio - arrayDinero[i];
                arrayCantidades[i]+=1;
            }
        }
        console.log(`El preu del article és: ${precio_art} i la quantitat lliurada és: ${dinero}. El canvi és: ${dinero-precio_art}. El canvi retornat en billets i monedes és aquest:`);
        for (let i=0; i<arrayDinero.length; i++) {
            console.log(arrayCantidades[i] + " de " + arrayDinero[i]);
        }
        
    } else if (cambio == 0) {
        console.log("Total canvi: 0");
    } else {
        console.log("La quantitat de diners lliurats és insuficent")
    }
    
}