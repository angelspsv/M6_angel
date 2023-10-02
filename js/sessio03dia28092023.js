function demana2numeros(){
    let num1 = prompt("Entra número:")
    let num2 = prompt("Entra número de potencia:")
    console.log("El temps inicial amb el mètode Math és:")
    console.time("Temps")
    let resultat = Math.pow(num1, num2)
    console.log("El temps final amb el mètode Math és:")
    console.timeEnd("Temps")
    console.log(resultat)
    console.log("Ara el temps a l'inici del càlcul amb el loop:")
    console.time("Temps")
    let resultatLoop = 1
    for (i=0; i<num2; i++){
        resultatLoop *= num1
    }
    console.log("El temps final amb el loop és:")
    console.timeEnd("Temps")
    console.log(resultatLoop)
}


function estadistiques() {
    let num1 = parseInt(prompt("Entra el primer nombre:"))
    let num2 = parseInt(prompt("Entra el segon nombre:"))
    let num3 = parseInt(prompt("Entra el tercer nombre:"))
    let suma=num1+num2+num3
    let mitjana = suma/3
    console.log("La mitjana és: " + mitjana)
    let myArr = [num1, num2, num3]
    myArr.sort()
    console.log("El segon nombre és: " + myArr[1])
    console.log("El nombre més gran és: " + myArr[2])
    console.log("El nombre més petit és: " + myArr[0])
}