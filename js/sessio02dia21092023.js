function demanaDades() {
    let num1 = prompt("Introdueix un número de 1 fins a 10:")
        if (num1 < 11 && num1 > 0) {
            console.log("Taula de multiplicació de " + num1)
            for (let i=0; i<=10; i++) {
                console.log(`${num1} x ${i} = ${num1*i}`)
            }
        } else {
            console.log("Número introduït erroni")
        }
}

function deFigonachi() {
    // let quants = prompt("Entra quants números de la sèrie de figonachi vols veure:")
    let quants = document.getElementById("figo").value;
    let a=1
    let b=1
    let suma=a+b
    console.log(`fibo[1]=${a}`)
    console.log(`fibo[2]=${b}`)
    console.log(`fibo[3]=${suma}`)
    for (let i=0; i<quants-3; i++){
        a=b
        b=suma
        suma=(a+b)
        console.log(`fibo[${i+4}]=${suma}`)
    }
}