//ANCHOR ---> Estructuras de repetición

/**
 * Para que sirven los ciclos? Para optimizar procesos que necesito que se repitan varias veces, es decir, que no se gasten muchas lineas
 * de código en un solo proceso.
 * Para los ciclos, ya que no me retornan solo una respuesta no es necesario meter la función en una variable, unicamente se ejecutan las funciones
 */

/**
 * FOR (inicialización; condicion ; modificador)
 * Ejemplo: mostrar por consola 10 veces la palabra casa
 */

const mostrarCasa = () => {
    for (let i = 1; i <= 10; ++i){
        console.log('casa');
    }
}

console.log("-------FOR------") 
mostrarCasa()
console.log("-------------") 

//Ejmeplo: numeros del 1 al 5 

const numeros = () => {
    for( let i = 1; i <= 5;++i ){
        console.log(i)       
    }
}

numeros()
console.log("-------------") 

//Ejemplos: mostrar numeros desde 1 hasta x incluyendolo

const numeros2 = (y, x) => {
    for( let i = y; i <= x ; ++i ){
        console.log(i)       
    }
}

numeros2(19,20)
console.log("-------------") 

/**
 * WHILE: me permite prescindir de la inicialización y el modificador y solo depender de la condicion para poderse ejecutar
 * Ejemplo: Contar hasta 20 con ciclos while
 */

const contarHastaVeinte = () => {
    let i = 1   //Inicialización 
    while(i <= 20 ){ //Condicion
        console.log(i)
        i++ //modificador
    }
    
}

console.log("------WHILE-------")
contarHastaVeinte();
console.log("-------------") 



/**
 * DO WHILE: es lo mismo que el while pero el codigo debe ejecutarse por lo menos una vez
 * Ejemplo: Saludar 10 veces
 */

const saludar = () =>{
    let i = 1 //inicialización
    do{
        console.log('hola') 
        i++ //modificador
    }
    while(i < 11); //condicion
}

console.log("------DO WHILE-------")
saludar();
console.log("-------------") 