/**
 * If 
 * ANCHOR --> estructuras de control
 * 
 * Ejemplo: crear una funcion que me deveulva los permisos que tiene el usuario
 * user --> tiene permiso a muy poco
 * admin --> tiene permiso casi completo
 * superadmin --> tiene permiso con todo
 */

const determinarPermiso = (rolUsuario) => {
   
    if(rolUsuario === "superAdmin"){
        //bloque de codigo
        return "El usuario tiene permiso a todo"
   }
   else if (rolUsuario === "admin"){
        return "El usuario tiene permiso a casi todo"
   }
   else if (rolUsuario === "user"){
        return "El usuario tiene muy poco permiso"
   }
   else {
        return "El usuario no tiene acceso, el rol no existe"
   }

}

let permisos = determinarPermiso("user")
console.log(permisos)

/**
 * Ternario
 */

const llevoParaguas = (clima) => {

    //condicion ? verdadero : falso
    let x = clima === "lluvioso" ? "si, llevalo" : "no, no hace falta"
    return x
}

let resultadoClima = llevoParaguas("lluvioso")
console.log(resultadoClima)

/**
 * Switch
 * 
 * Ejemplo: Sistema que determine el total del impuesto a pagar dependiendo de la marca de auto, como vbase son 100 y despues hay que sumarle
 * dependiendo lo siguiente:
 * VW --> 10 
 * BMW --> 20
 * Audi --> 30 
 * Volvo --> 40
 * Renault --> 50
 * Citroen --> 60
 */

const determinarImpuesto = (marcaAuto) => {
    let impuesto = 100;

    switch(marcaAuto){
        case "audi":
            impuesto += 10
            break;
        case "citroen":
            impuesto += 20
            break;
        case "vw":
            impuesto += 30
            break;
        default:
            impuesto = 0
    }
    return impuesto > 0
    ? impuesto
    : "Su auto se encuentra exento del pago de impuesto"
}

let totalImpuesto = determinarImpuesto("vw");
console.log(`Total del impuesto a pagar es: ${totalImpuesto}`)

