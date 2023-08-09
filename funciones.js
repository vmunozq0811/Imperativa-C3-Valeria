/**
 * Funciones declaradas ---> tienen nombre
 * Hoisting, si hay funciones declaradas el programa las lleva al inicio de la creacion del programa, por lo que si yo ejecuto la funcion antes de definirla,
 * no me va a saltar un error
 */
function f1 (){
    console.log("hola")
}

f1()

function saludar (){
    //bloque de codigo
    let nombre = "Pepe"
    let saludoFinal = `Hola ${nombre}, como estas?`
    return saludoFinal // corta la ejecucion y devuelve lo que tenga que devolver
}

let saludoListo = saludar()
console.log(saludoListo)

function sumar (){
    let n1 = 12
    let n2 = 15
    return n1 + n2
}

let suma = sumar()
console.log(`La suma es: ${suma}`)

function restar(num1, num2){
    return num1 - num2
}

let resta = restar(23,30)
console.log(`La resta es: ${resta}`)

//--------------------------------------------------------------

//FUNCIONES EXPRESADAS ---> ANONIMAS

//FUNCIONES EXPRESADAS TRADICIONAL
//por buena practica las variables se usan con const en cosas que no van a cambiar o no se van a renombrar

console.log(`---------------08/08------------------`)
const restar2 = function (n1,n2){
    return n1 - n2;
}

let resultadoResta2 = restar2(10,7);
console.log(`La resta es: ${resultadoResta2}`)

//FUNCIONES EXPRESADAS FLECHA ---> ARROW FUNCTION

const multiplicar = (n1,n2) =>{
    return n1 * n2;
} 

//Cuando tengo una sola linea de codigo puedo hacer lo siguiente

const multiplicar2 = (n1,n2) => n1 * n2 

//Si solo tengo un parametro puedo quitar los parentesis, en otro caso no

const saludar2 = nombre => `Hola ${nombre}, como estas?`

let resultadoMultiplicar = multiplicar(5,5);
let resultadoMultiplicar2 = multiplicar2(5,3);
let saludo = saludar2('Lio');
console.log(`La multiplicación es: ${resultadoMultiplicar}`);
console.log(`La multiplicación 2 es: ${resultadoMultiplicar2}`);
console.log(saludo);

//-----------------------------------------------------------------
//SCOPE ---> AMBIENTE O ALCANCE EN EL QUE VIVE LA VARIABLE -- Las variables let y const tienen un scope local, unicamente viven en el bloque de codigo en el que yo las haya creado

let palabra = "casa"
const pruebaScope = () =>{
    //Al ser este el scope mas cercano, me va a mostrar la palabra perro y no casa
    let palabra = "perro"
    return palabra
}
let resultadoPrueba = pruebaScope()
console.log(resultadoPrueba)

//EJEMPLO CONVERSION 1

const conversor = (cantidadPesos, valorDolar) => cantidadPesos / valorDolar

let resultadoConversion = conversor(5000, 200)
console.log(`Resultado de la conversión: ${resultadoConversion}`)

//EJEMPLO PROFESOR 2

const promedio = (nombre, nota1, nota2, nota3) => {
    let promediar = Math.round((nota1 + nota2 + nota3) / 3)
    return `El promedio de ${nombre} es ${promediar}`
}

let resultadoPromedio = promedio('Camila',5,7,7)
console.log(resultadoPromedio)
