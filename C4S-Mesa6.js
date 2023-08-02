/**la situación escogida es el prestamo de libros en la biblioteca de la universidad
 * como bien sabemos, los estudiantes pueden pedir un prestamo en la biblioteca por uno o varios libros 
 * (primera variable: Cantidad de libros 'numero'), sin embargo hay que tener en cuenta si el libro se encuentra
 * (segunda variable: ¿el libro está disponible? 'booleano') y si el estudiante no tiene una deuda pendiente
 * por un préstamo anterior (tercer y cuarta variable: ¿tiene deuda? 'booleano' y nombre del estudiante 'string'). Antes de todo lo anterior, el estudiante
 * debe asegurarse de que la biblioteca se encuentra abierta (quinta, sexta y septima variable: Piso en el que se encuentra 'número',
 * Hora de apertura y de cierre 'numeros') y tener en cuenta la hora actual (octava variable: Hora actual 'numero')**/

//Nombre del estudiante que solicita el prestamo
let nombreEstudiante = "Camila Ramirez"

//Cantidad de libros que se van a prestar al estudiante.
let cantidadLibros = 5;

//¿Los libros se encuentran disponibles? ¿Tiene deudas pendientes?
let estaDisponible = true
let tieneDeuda = false

//Ubicacion e información de la biblioteca
let pisoBiblioteca = 3;
const horaApertura = 7;
const horaCierre = 19;

//Hora actual para saber si puede o no ir a solicitar el prestamo
let horaActual = 14;


console.log("----------Información de la biblioteca y prestamo de libros por estudiante------------");
console.log("Nombre del estudiante: ", nombreEstudiante);
console.log("Cantidad de libros: ", cantidadLibros);
console.log("¿Los libros están disponibles? ", estaDisponible);
console.log("¿El estudiante tiene deudas pendientes? ", tieneDeuda);
console.log("Ubicación biblioteca: ", pisoBiblioteca, " Hora de apertura: ", horaApertura, " Hora de cierre: ", horaCierre);
if(estaDisponible &&!tieneDeuda && horaActual >= horaApertura && horaActual <= horaCierre){
    console.log(`¡${nombreEstudiante}!, su solicitud ha sido aprobada`); }
