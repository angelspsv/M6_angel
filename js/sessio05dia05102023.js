function Temperatura(){
    let tipo = prompt("C o F");
    let temp = parseInt(prompt("Entra temperatura:"));
    let conversio;
    if (tipo == "C" || tipo == "c") {
        conversio = (temp * 1.8)+32;
        console.log("La temperatura en F és: " + conversio);
    } else if (tipo == "F" || tipo == "f") {
        conversio = (temp-32)/1.8;
        console.log("La temperatura en C és: " + conversio);
    }
}

function convertirBase() {
    let num = parseInt(prompt("Entra un número:"));
    //converteix en binari
    convertBinariOctal(num, 2);
    //converteix en octal
    convertBinariOctal(num, 8);
}

function convertBinariOctal(num, divisible) {
    let resto;
    let numBinari ="";
    //let num = parseInt(prompt("Entra un número:"));
    if (num === 0) {
        console.log("0");
    }
    while (num>0) {
        resto = num % divisible;
        numBinari = resto + numBinari;
        num = Math.floor(num/divisible);
    }
    console.log(numBinari);
}


/*
Optimitzant codi, de dos funcions idéntiques a una amb paràmetres

function convertBinari() {
    let resto;
    let numBinari ="";
    let num = parseInt(prompt("Entra un número:"));
    if (num === 0) {
        console.log("0");
    }
    while (num>0) {
        resto = num % 2;
        numBinari = resto + numBinari;
        num = Math.floor(num/2);
    }
    console.log(numBinari);
}

function convertOctal(){
    let resto;
    let numOctal ="";
    let num = parseInt(prompt("Entra un número:"));
    if (num === 0) {
        console.log("0");
    }
    while (num>0) {
        resto = num % 8;
        numOctal = resto + numOctal;
        num = Math.floor(num/8);
    }
    console.log(numOctal);
}
*/