function nombreProper(){
    let num1 = parseInt(prompt("Entra el primer nombre:"));
    let num2 = parseInt(prompt("Entra el segon nombre:"));
    //operacions amb el primer número
    let resultat1;
    if (num1>100) {
        resultat1 = num1 - 100;
    } else if (num1<100) {
        resultat1 = 100 - num1;
    } else {
        resultat1 = 0;
    }
    //operacions amb el segon nombre
    let resultat2;
    if (num2>100) {
        resultat2 = num2 - 100;
    } else if (num2<100) {
        resultat2 = 100 - num2;
    } else {
        resultat2 = 0;
    }
    if (resultat1<resultat2){
        console.log("El nombre " + num1 + " està més a prop del 100.");
    } else if (resultat1>resultat2) {
        console.log("El nombre " + num2 + " està més a prop del 100.");
    } else {
        console.log("Ambdós nombres són iguals");
    }
}

function nombreProper2() {
    //en aquest cas faré servir el mèthode Math.abs() per reduir el número de línies de codi
    let number1 = parseInt(prompt("Entra el primer nombre:"));
    let number2 = parseInt(prompt("Entra el segon número:"));

    let dif1 = Math.abs(100-number1);
    let dif2 = Math.abs(100-number2);

    if (dif1<dif2){
        console.log(`El nombre ${number1} és més proper a 100 que el ${number2}`);
    } else if (dif1>dif2) {
        console.log(`El nombre ${number2} és més proper a 100 que el ${number1}`);
    } else {
        console.log(`Ambdós nombres estàn a la mateixa distància del 100`);
    }
}

function mostraHora() {
    let hora = parseInt(prompt("Entra hora:"));
    let minuts = parseInt(prompt("Entra minuts:"));
    let segons = parseInt(prompt("Entra segons:"));
    console.log(`L'hora introduida és: ${hora}:${minuts}:${segons}`);
    
    const fecha = new Date();
    
    fecha.setHours(hora);
    fecha.setMinutes(minuts);
    fecha.setSeconds(segons+1);
    
    console.log(`Ara la nova hora és: ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

function mostraEnYYYYMMDD(){
    let dies = parseInt(prompt("Quants dies?"));
    let anys = Math.floor(dies/365);
    let mesos = Math.floor((dies%365)/30);
    let restaDies = dies%30;
    console.log(`Anys: ${anys} Mesos: ${mesos} Dies: ${restaDies}`);
}