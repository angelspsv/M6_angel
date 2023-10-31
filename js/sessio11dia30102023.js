function funcionDia() {
    let fecha_actual = new Date();
    let date = fecha_actual.getDate();
    let month = fecha_actual.getMonth();
    let year = fecha_actual.getFullYear();

    console.log(`1) Avui és ${date} del mes ${month+1} de l'any ${year}.`);

    let unoEnero = new Date(year, 0, 1);
    let dias = (fecha_actual - unoEnero)/((1000*60*60*24));
    let semana = Math.floor(dias / 7) + 1;
    console.log(`2) El nombre de setmana actual de l'any és: ${semana}.`);

    console.log(`3) El % de dies transcorreguts de l'any és: ${((dias/365)*100).toFixed(2)}.`);

    console.log(`4) El % de dies que queden en l'any és: ${(((365-dias)/365)*100).toFixed(2)}.`);

    let hores = fecha_actual.getHours();
    let minuts = fecha_actual.getMinutes();
    let seconds = fecha_actual.getSeconds();

    console.log(`5) Ara són les ${hores}:${minuts}:${seconds}.`); 

    let minuts_dia_sencer = 24*60;
    let minuts_dia_fins_ara = (hores * 60) + minuts;
    let quantHaPassatDelDia = ((minuts_dia_fins_ara / minuts_dia_sencer)*100).toFixed(2);
    
    console.log(`6) El % dia transcorregut és: ${quantHaPassatDelDia}.`);

    let dia_que_queda = (((minuts_dia_sencer - minuts_dia_fins_ara)/minuts_dia_sencer)*100).toFixed(2);

    console.log(`7) El % de dia que queda és: ${dia_que_queda}.`);

}

function codiBarres(){
    let codi = prompt("Entra un codi de barres:");
    
    if (codi.length <= 8){
        if (codi.length < 8){
            let codi8_ceros = codi.padStart(8, '0');
            let arrayNumerosStr = [];
            for (let i=0; i<codi8_ceros.length; i++){
                arrayNumerosStr[i] = codi8_ceros.charAt(i);
            }
            let arrayNumeros = arrayNumerosStr.map(caracter => Number(caracter));
            let suma = (arrayNumeros[0]*3)+(arrayNumeros[1]*1)+(arrayNumeros[2]*3)+(arrayNumeros[3]*1)+(arrayNumeros[4]*3)+(arrayNumeros[5]*1)+(arrayNumeros[6]*3);
            let multiple = (Math.floor(suma/10)+1);
            let digit_control = (multiple*10)-suma;
            if (digit_control == arrayNumeros[7]) {
                console.log(`El codi de 8 dígits ${codi} és vàlid.`);
            } else {
                console.log(`El codi de 8 dígits ${codi} no és vàlid.`);
            }
        } else if (codi.length == 8) {
            let arrayNumerosStr = [];
            for (let i=0; i<codi.length; i++){
                arrayNumerosStr[i] = codi.charAt(i);
            }
            let arrayNumeros = arrayNumerosStr.map(caracter => Number(caracter));
            let suma = (arrayNumeros[0]*3)+(arrayNumeros[1]*1)+(arrayNumeros[2]*3)+(arrayNumeros[3]*1)+(arrayNumeros[4]*3)+(arrayNumeros[5]*1)+(arrayNumeros[6]*3);
            let multiple = (Math.floor(suma/10)+1);
            let digit_control = (multiple*10)-suma;
            if (digit_control == arrayNumeros[7]) {
                console.log(`El codi de 8 dígits ${codi} és vàlid.`);
            } else {
                console.log(`El codi de 8 dígits ${codi} no és vàlid.`);
            }

        }
        
    } else if (codi.length > 8 && codi.length <= 13){
        if (codi.length < 13) {
            let codi13_ceros = codi.padStart(13, '0');
            let arrayNumerosStr = [];
            for (let i=0; i<codi13_ceros.length; i++){
                arrayNumerosStr[i] = codi13_ceros.charAt(i);
            }
            let arrayNumeros = arrayNumerosStr.map(caracter => Number(caracter));
            let suma = (arrayNumeros[0]*1)+(arrayNumeros[1]*3)+(arrayNumeros[2]*1)+(arrayNumeros[3]*3)+(arrayNumeros[4]*1)+(arrayNumeros[5]*3)+(arrayNumeros[6]*1)+(arrayNumeros[7]*3)+(arrayNumeros[8]*1)+(arrayNumeros[9]*3)+(arrayNumeros[10]*1)+(arrayNumeros[11]*3);
            let multiple = (Math.floor(suma/10) + 1);
            let digit_control = (multiple*10)-suma;
            if(digit_control == arrayNumeros[12]) {
                console.log(`El codi de 13 dígits ${codi} és vàlid.`);
            } else {
                console.log(`El codi de 13 dígits ${codi} no és vàlid.`);
            }

        } else if (codi.length == 13) {
            let arrayNumerosStr = [];
            for (let i=0; i<codi.length; i++){
                arrayNumerosStr[i] = codi.charAt(i);
            }
            let arrayNumeros = arrayNumerosStr.map(caracter => Number(caracter));
            let suma = (arrayNumeros[0]*1)+(arrayNumeros[1]*3)+(arrayNumeros[2]*1)+(arrayNumeros[3]*3)+(arrayNumeros[4]*1)+(arrayNumeros[5]*3)+(arrayNumeros[6]*1)+(arrayNumeros[7]*3)+(arrayNumeros[8]*1)+(arrayNumeros[9]*3)+(arrayNumeros[10]*1)+(arrayNumeros[11]*3);
            let multiple = (Math.floor(suma/10) + 1);
            let digit_control = (multiple*10)-suma;
            if(digit_control == arrayNumeros[12]) {
                console.log(`El codi de 13 dígits ${codi} és vàlid.`);
            } else {
                console.log(`El codi de 13 dígits ${codi} no és vàlid.`);
            }
        }
    
    } else {
        console.log(`El codi introduit ${codi} és incorrecte.`);
    }
}