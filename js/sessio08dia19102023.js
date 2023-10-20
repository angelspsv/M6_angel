function askFile() {
    let file = prompt("Escriu el nom sencer del fitxer:");
    let parts = file.split(".");
    let extensio = parts[parts.length -1];
    console.log(extensio);
    //no va
}

function countAB(){
    let text = prompt("Entra una frase:").toLowerCase();
    let contA =0;
    let contB=0;
    for (let i=0; i<text.length; i++){
        if (text.charAt(i)=="a"){
            contA++;
        } else if (text.charAt(i)=="b") {
            contB++;
        }
    }
    console.log("En nombre de 'A' al text és: " + contA + ", i el nombre de 'B' és: " + contB);
}

function countABsplit(){
    let text = prompt("Entra un text:").toLowerCase();
    let lletrA = "a";
    let lletrB = "b";

    let quantsA = text.split(lletrA).length - 1;
    let quantsB = text.split(lletrB).length - 1;
    console.log(`Al text hi ha ${quantsA} lletres 'a'`);
    console.log(`Al text hi ha ${quantsB} lletres 'b'`);
}