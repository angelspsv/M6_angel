function compara(){
    let frase1 = prompt("escriu un text aquí:");
    let frase2 = prompt("escriu un altre text aquí:");
    let quants1 = frase1.length;
    let quants2 = frase2.length;
    if (quants1>quants2) {
        console.log("El text1 és més llarg");
    } else if (quants1<quants2) {
        console.log("El text2 és més llarg");
    } else {
        console.log("Ambdós textos tenen la mateixa longitud.");
    }

}

function buscaLetra(){
    let text = prompt("Escriu aquí un text:");
    let lletra = prompt("Quina lletra vols cercar al text:");
    let cont = 0;
    for (let i=0; i<text.length; i++){
        if (text.charAt(i) == lletra){
            cont++;
        }
    }
    if (cont<=4 && cont>=2){
        console.log(`La lletra introduida surt ${cont} cops al text introduit.`);
    } else {
        console.log("La lletra surt menys o més de 2-4 cops");
    }
}


//funció que elimina el caràcter de la posició indicada per l'usuari
function eliminaLletra(){
    let mot = prompt("Escriu aquí un text:");
    let num = prompt("Escriu un nombre:");

    let myArr = mot.split("");
    let newText = "";
    for(let i=0; i<myArr.length; i++){
        if(i == num){}
        else {
            newText = newText + myArr[i];
        }
    }
    return newText;
}

var resultado = eliminaLletra();

document.write(resultado);

//retorna el nombre de mots dins d'un text o frase
function cuentaPalabras(frase){
    let palabras = frase.split(' ');
    let filtraPalabras = palabras.filter(palabra => palabra.trim() !== '');
    return filtraPalabras.length;
}

//retorna la lletra trobada a dins d'un text
function vocalEnTexto(frase, letra){
    let vocal_encontrada = "";
    for (let i=0; i<frase.length; i++){
        if(letra == frase.charAt(i)){
            vocal_encontrada = vocal_encontrada + frase.charAt(i);
        }
    }
    return vocal_encontrada;
}

//retorna només les vocals dins d'un text
function encuentraVocales(frase){
    let vocales_en_texto = "";
    let vocals = "aàáeèéiíïoòóuúüAÀÁEÈÉIÍÏOÒÓUÚÜ";
    for(let j=0; j<vocals.length; j++){
        let vocal = "" + vocals.charAt(j);
        vocales_en_texto += vocalEnTexto(frase, vocal);    
    }
    return vocales_en_texto;
}

//cuenta el número de apariciones de una letra en un texto
function letraEnTexto(frase, letra){
    let count = 0;
    for(let i=0; i<frase.length; i++){
        if (frase.charAt(i) == letra){
            count++;
        }
    }
    return count;
}

//cuenta el número de vocales en un texto
function cuentaVocales(frase){
    let quants = 0;
    let vocals = "aàáeèéiíïoòóuúüAÀÁEÈÉIÍÏOÒÓUÚÜ";
    for (let j=0; j<vocals.length; j++){
        let vocal = "" + vocals.charAt(j);
        quants += letraEnTexto(frase, vocal); 
    }
    return quants;
}

//fa un triangle d'un text
function mostraTextReduintse(frase){
    let triangle = "";
    for (let i=0; i<frase.length; i++){
        for(let j=i; j<frase.length; j++){
            triangle += frase.charAt(j);
        }
        triangle += "<br>";
    }
    return triangle;
}

//funció o programa que rep un text i fa diversos processos
//retorna la resposta al navegador de l'usuari
//fa servir nombroses funcions
function text_analisi(){
    let text = prompt("Escriu un text:");

    let majuscules = `<br>1) Majúscules: ${text.toUpperCase()} <br>`;
    let minuscules = `2) Minúscules: ${text.toLowerCase()} <br>`;
    let longitud = `3) Longitud del text: ${text.length}<br>`;
    let num_palabras = `4) Nombre de paraules: ${cuentaPalabras(text)}<br>`;
    let vocals_en_frase = `5) Les vocals son: ${encuentraVocales(text)}<br>`;
    let num_vocals = `6) El nombre de vocals és: ${cuentaVocales(text)}<br>`;
    let text_decreixent = `7) El text reduint-se:<br> ${mostraTextReduintse(text)}<br>`;
    
    return majuscules + minuscules + longitud + num_palabras + vocals_en_frase + num_vocals + text_decreixent;
}

var result = text_analisi();

document.write(result);

//quant queda fins Cap d'Any
function timeTo24h() {
    let ara = prompt("Entra hora en format hh:mm");
    myArr = ara.split(":");
    let hores = parseInt(myArr[0]);
    let minuts = parseInt(myArr[1]);
    if ((hores == 0) && (minuts == 0)){
        return "Ja és Cap d'Any!";
    } else {
        let tmp_hores = 23 - hores;
        let tmp_minuts = 60 - minuts;
        let tempsRestant = (tmp_hores * 60) + tmp_minuts;
        return (tempsRestant > 1 ? "Falten " : "Falta ") + tempsRestant + (tempsRestant > 1 ? " minuts " : " minut ") + "fins Cap d'Any!"; 
    }
}

document.write(timeTo24h());