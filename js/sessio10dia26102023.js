function adivinaNombre() {
    let adivinable = Math.floor((Math.random() * 100) + 1);
    let usuari = 0;
    while (adivinable != usuari){
        let intents = 0;
        usuari = parseInt(prompt("Intenta adivinar el número de 1-100:"));
        intents++;
        if (usuari == 0) {
            console.log("Game Over!");
            break;
        } else if (usuari>100 || usuari<0){
            console.log("inàlid");
        } else {
            if(adivinable > usuari){
                console.log("L'adivinable és més gran!");
            } else if (adivinable > usuari) {
                console.log("L'adivinables és menor!");
            } else {
                console.log(`Ho has endevinat amb ${intents} intents!`);
                break;
            }
        }
    }
}



function UnoEneroMiercoles(){
    let any1 = parseInt(prompt("Entra el 1r any:"));
    let any2 = parseInt(prompt("Entra el 2n any:"));
    
    for (let i=any1; i<any2; i++){
        let date = new Date(i, 0, 1);
        let dayOfWeek = date.getDay();
        if (dayOfWeek === 3){
            console.log(`El 1 de enero del año ${i} fue un miércoles.`);
            return;
        }
    }
    console.log("Período de años introducido sin miércoles 1 de enero.");
}   


function buscaLetra(palabra, letra){
    let cont = 0;
    for(let i=0; i<palabra.length; i++){
        if (palabra.charAt(i)== letra){
            cont++;
        }
    }
    return cont;
}



//función que averigua si una palabra contiene o no 5 vocales
function cuentaLetras(){
    let palabra = prompt("Entra una palabra:");
    let vocales = "aàáeèéiíïoóòuúüÀAÁEÈÉUÚÜIÍÏOÓÒ";
    let quants=0;
    for (let j=0; j<vocales.length; j++){
        let lletra = vocales.charAt(j);
        quants += buscaLetra(palabra, lletra);
    }
    if (quants >= 5){
        console.log("La teva paraula conté 5 o més vocals!");
    } else {
        console.log("Conté menys de 5 vocals!");
    }

}


//funció que analitza un mot i et diu si és pentavocal (conté a,e,i,o,u)
function esPentaVocal(){
    let mot = prompt("Entra un mot:").toLowerCase();

    let grupVocals = { a: /[aàá]/g, e: /[eèé]/g, i: /[iíï]/g, o: /[oòó]/g, u: /[uúü]/g };
    
    let coincidencies = { a: [], e: [], i: [], o: [], u: [] };
    
    for (let grup in grupVocals) {
        while ((match = grupVocals[grup].exec(mot)) !== null) {
            coincidencies[grup].push(match[0]);
        }
    }

    if (((coincidencies.a).length == 0) || ((coincidencies.e).length == 0) || ((coincidencies.i).length == 0) || ((coincidencies.o).length == 0) || ((coincidencies.u).length == 0)) {
        console.log(`El mot ${mot} no és pentavocal.`);
    } else {
        console.log(`El mot ${mot} és pentavocal!`);
    }
/* per fer proves
    console.log('Vocals aàá:', coincidencies.a);
    console.log('Vocals eèé:', coincidencies.e);
    console.log('Vocals iíï:', coincidencies.i);
    console.log('Vocals oòó:', coincidencies.o);
    console.log('Vocals uúü:', coincidencies.u);
*/
}