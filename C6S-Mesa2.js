/**
 * Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.
 */

const totalAPagar = (vehiculo, litrosConsumidos) => {
    let total = 0

    switch(vehiculo){
        case "coche":
            total = 86 * litrosConsumidos
            break;
        case "moto":
            total = 70 * litrosConsumidos
            break;
        case "autobús":
            total = 86 * litrosConsumidos
            break;
        default:
            total = 0
    }
    if (litrosConsumidos >= 0 && litrosConsumidos <= 25){
        total += 50
    } else if (litrosConsumidos > 25){
        total += 25
    }
    return total
}

let totalPago = totalAPagar("coche", 26);
console.log(`El total a pagar es: ${totalPago}`)

/**
 * Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
diferente por cada selección:
● Pollo = $150 (“pollo”)
● Carne = $200 (“carne”)
● Vegetariano (verduras asadas) = $100 (“veggie”)
Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
deseado:
● Blanco c/orégano y parmesano = $50 (“blanco”)
● Negro c/avena = $60 (“negro”)
● Sin gluten = $75 (“s/gluten”)
Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
adicionales:
● Queso = $20
● Tomate = $15
● Lechuga = $10
● Cebolla = $15
● Mayonesa = $5
● Mostaza = $5
 */

const totalSandwich = (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {
    let costoSandwich = 0
    switch(base){
        case "pollo":
            costoSandwich = 150
            switch(pan){
                case "blanco":
                    costoSandwich += 50
                    break;
                case "negro":
                    costoSandwich += 60
                    break;
                case "s/gluten":    
                    costoSandwich += 75
                    break;
            }
            break;
        case "carne":
            costoSandwich = 200
            break;
        case "veggie":
            costoSandwich = 100
            break;
        default:
            costoSandwich = 0
    }
}