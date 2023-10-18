function crea_taula(){
    let files = parseInt(prompt("Entra nombre de filas:"));
    let columnes = parseInt(prompt("Entra nombre de columnas:"));

    let taula = document.createElement("table");

    //crea files x columnes
    for (let i=0; i<files; i++) {
        let fila = document.createElement("tr");

        for (let j=0; j<columnes; j++){
            let columna = document.createElement("td");
            let txt = document.createTextNode(`${i+1}.${j+1}`);
            columna.appendChild(txt);
            fila.appendChild(columna);
        }

        taula.appendChild(fila);
    }
    document.body.appendChild(taula);
}

function crea_piramide_color(){
    let columnes = parseInt(prompt("Entra nombre de columnes:"));
    let filas = (columnes/2)+1;

    let taula = document.createElement("table");

    //crea files x columnes
    for (let i=0; i<filas-1; i++) {
        let fila = document.createElement("tr");

        if (i == 0) {
            let media = (columnes-1)/2;
            for (let col=0; col<media; col++){
                let columna = document.createElement("td");

                columna.style.width="20px";
                columna.style.height="20px";
                columna.style.backgroundColor = "white";
                fila.appendChild(columna);
            }
            for (let roig=1; roig <=1; roig++){
                let columna = document.createElement("td");

                columna.style.width="20px";
                columna.style.height="20px";
                columna.style.backgroundColor = "red";
                fila.appendChild(columna);
            }
            for (let blanc=media; blanc<columnes; blanc++){
                let columna = document.createElement("td");

                columna.style.width="20px";
                columna.style.height="20px";
                columna.style.backgroundColor = "white";
                fila.appendChild(columna);
            }
        } else {
            let media = (columnes-1)/2;
            for (let col=0; col<media-i; col++){
                let columna = document.createElement("td");

                columna.style.width="20px";
                columna.style.height="20px";
                columna.style.backgroundColor = "white";
                fila.appendChild(columna);
            }
            for (let roig=1; roig <=1+i+i; roig++){
                let columna = document.createElement("td");

                columna.style.width="20px";
                columna.style.height="20px";
                columna.style.backgroundColor = "red";
                fila.appendChild(columna);
            }
            for (let blanc=media+i; blanc<columnes; blanc++){
                let columna = document.createElement("td");

                columna.style.width="20px";
                columna.style.height="20px";
                columna.style.backgroundColor = "white";
                fila.appendChild(columna);
            }
        }
        taula.appendChild(fila);
    }
    document.body.appendChild(taula);
    
}