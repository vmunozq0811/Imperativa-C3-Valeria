//ANCHOR variables ---> let -const
let nombre = "Pepe";
const apellido = "Perez";

console.log("nombre: ", nombre);
console.log("apellido: ", apellido);

//let nombre_usuario = "dasdas"
//let nombreDelUsuario = "dasdas"

nombre = "Carmen";
console.log("nombre: ", nombre);

//ANCHOR ---> tipo de datos (primitivos)

//Strings

let frase = 'hola como estas?';

//Number

let edad = 12;

//Boolean o (true or false)

let esMayorDeEdad = true;
let isLogged = false;

//Undefined o null o NaN

let email = undefined

let stock = null

let y = 1
let z = "pepe"
let x = y * z

console.log("email: ", email)
console.log("x: ", x)

console.log("----------------------")

//ANCHOR ---> operadores

//LINK ---> matematicos

let n1 = 5;
let n2 = 2;

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);

//mod
console.log(n1 % n2);

//concatenar
console.log('Hola '+ nombre +' como esta?');

//TEMPLATE LITERALS --> backsticks ``
let fraseCompleta = `${nombre} y tu apellido ${apellido}`;
console.log(fraseCompleta);

//LINK ---> comparacion se comporta como booleano
let num1 = 6;
let num2 = 3;

console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 === num2);
console.log(num1 !== num2);


//LINK ---> logicos
console.log("----------------Logicos---------------")
//AND --> &&
let estaLogueado = true
let esAdmin = false

let tienePermiso = estaLogueado && esAdmin && 20 > 2 && 12 < 15

console.log(tienePermiso)

//OR ---> || 

let tienePermiso2 = estaLogueado || esAdmin || 20 > 2 || 12 < 15

console.log(tienePermiso2)

//NOT ----> !

