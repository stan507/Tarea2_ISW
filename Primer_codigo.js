/*
Variables y tipos de datos
*/ 

const nombre = "Juan";
const edad = 21;
const puedoConducir = true;

console.log(nombre);
console.log(typeof nombre);
console.log(edad);
console.log(typeof edad);
console.log(puedoConducir);
console.log(typeof puedoConducir);

/*
Operadores aritméticos
*/

const numero1 = 20;
const numero2 = 40;
let numero3 = null;

/*Suma*/ 
numero3 = numero1 + numero2;
console.log(numero3);
/*Resta*/
numero3 = numero1 - numero2;
console.log(numero3);
/*Multiplicación*/
numero3 = numero1 * numero2;
console.log(numero3);
/*División*/
numero3 = numero1 / numero2;
console.log(numero3);
/*Módulo*/
numero3 = numero1 % numero2;
console.log(numero3);

/*
Operadores de asignacion y comparacion
*/ 

const numero4 = 15;
const numero5 = 20;
const numero6 = '25';

/*Muestre por consola si el numero4 es mayor o igual que numero5.*/
numero3 = (numero4 >= numero5);
console.log(numero3);
/*Muestre por consola si el numero4 es menor o igual que numero5.*/
numero3 = (numero4 <= numero5);
console.log(numero3);
/*Muestre por consola si el numero4 es menor que numero6.*/
numero3 = (numero4 < numero6);
console.log(numero3);
/*Muestre por consola si el numero6 es menor que numero5.*/
numero3 = (numero6 < numero5);
console.log(numero3);
/*Muestre por consola si el numero6 es estrictamente diferente que numero4.*/
numero3 = (numero6 !== numero4);
console.log(numero3);
/*Muestre por consola si el numero4 es estrictamente igual al numero5.*/
numero3 = (numero4 === numero5);
console.log(numero3);

/*
Condicionales 
*/ 

const numero7 = 10;
const numero8 = 20;
const numero9 = 30;
/*Imprimir en consola el número mayor de los tres.*/
if(numero9 > numero8 && numero9 > numero7){
    console.log('numero9 es el mayor');
}else if (numero8 > numero9 && numero8 > numero7){
    console.log('numero8 es el mayor');
}else{
    console.log('numero7 es el mayor');
}
/*Imprimir en consola el número menor de los tres.*/
if(numero9 < numero8 && numero9 < numero7){
    console.log('numero9 es el menor');
}else if (numero8 < numero9 && numero8 < numero7){
    console.log('numero8 es el menor');
}else{
    console.log('numero7 es el menor');
}
/*Imprimir en consola si el numero7 es par o impar.*/
if(numero7 % 2 == 0){
    console.log('numero7 es par')
}else{
    console.log('numero7 es impar')
}
/*Imprimir en consola si el numero8 es par o impar.*/
if(numero8 % 2 == 0){
    console.log('numero7 es par')
}else{
    console.log('numero7 es impar')
}
/*Imprimir en consola si el numero9 es par o impar.*/
if(numero9 % 2 == 0){
    console.log('numero7 es par')
}else{
    console.log('numero7 es impar')
}
/*Imprimir en consola si el numero7 es múltiplo de 5.*/
if(numero7 % 5 == 0){
    console.log('numero7 es multiplo de 5')
}
/*Imprimir en consola si el numero8 es múltiplo de 5.*/
if(numero8 % 5 == 0){
    console.log('numero7 es multiplo de 5')
}
/*Imprimir en consola si el numero9 es múltiplo de 5.*/
if(numero9 % 5 == 0){
    console.log('numero7 es multiplo de 5')
}


/*
Ciclos
*/ 
/*Imprimir en consola los números del 1 al 10.*/
for(let i = 0; i <= 10; i++){
    console.log(i);
}
/*Imprimir en consola los números del 10 al 1.*/
for(let i = 10; i >= 0; i--){
    console.log(i);
}
/*Imprimir en consola los números del 1 al 10 pero solo los pares.*/
for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
/*Imprimir en consola los números del 1 al 10 pero solo los impares.*/
for(let i = 0; i <= 10; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}
/*Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.*/
for(let i = 0; i <= 10; i++){
    if(i % 3 == 0){
        console.log(i);
    }
}
/*Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.*/
for(let i = 0; i <= 10; i++){
    if(i % 5 == 0){
        console.log(i);
    }
}
/*Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.*/
for(let i = 0; i <= 10; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i);
    }
}
/*Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.*/
for(let i = 0; i <= 10; i++){
    if(i % 3 == 0 || i % 5 == 0){
        console.log(i);
    }
}
/*
Funciones
*/ 

/*Crea una función que reciba un string y retorne el string en mayúsculas.*/
function mayusculas(palabra){
    return palabra.toUpperCase();
}
console.log(mayusculas('hola'));
/*Crea una función que reciba un string y retorne el string en minúsculas.*/
function minusculas(palabra){
    return palabra.toLowerCase();
}
console.log(minusculas('HOlA'));
/*Crear una función que reciba como parámetro 2 números y los reste.*/
function resta(numero1, numero2){
    return numero1 - numero2;
}
console.log(resta(5, 5));
/*Crear una función que reciba como parámetro 2 números y los divida.*/
function division(numero1, numero2){
    return numero1 / numero2;
}
console.log(division(15, 2));
/*Crear una función que reciba como parámetro 2 números y los multiplique.*/
function multiplicacion(numero1, numero2){
    return numero1 * numero2;
}
console.log(multiplicacion(10, 3));
/*Crear una función que reciba un string y devuelva la longitud del string.*/
function longitud(palabra){
    return palabra.length;
}
console.log(longitud('Bienvenidos'));

/*
Arrays
*/ 
/*Crea una función que reciba como parámetro un array de 
números y retorne la suma de todos los números del array.*/
function sumaArray(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}
const arraysuma = [1, 6, 2, 4, 5]
console.log(sumaArray(arraysuma));
/*Crea una función ( o varias) que reciba como 
parámetro un array de números y retorne el promedio 
de todos los números del array.*/
function promedioArray(array){
    let suma = 0
    for(let i = 0;i < array.length;i++){
        suma += array[i];
    }
    return suma/array.length
}
const arraypromedio = [1,5,3]
console.log(promedioArray(arraypromedio))
/*Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo 
arreglo que contenga los mismos strings pero con todas las 
letras en mayúsculas.*/
function ArrayMayus(array){
    const array_nuevo = []
    for(let i=0;i < array.length;i++){
        array_nuevo[i]= array[i].toUpperCase()
    }
    return array_nuevo
}
const Mayus = ["hola","pescado","the man who sold the world"]
console.log(ArrayMayus(Mayus))
/*Crea una función que tome un arreglo de números como parámetro 
y devuelva un nuevo arreglo que contenga solo los números pares.*/
function Arraypares(array){
    let array_nuevo = array.filter(function(element){
        return element % 2 === 0;
        });
    return array_nuevo
}
const arapares = [1,2,3,4]
console.log(Arraypares(arapares))

/**
Objetos 
*/

/*
Crear un objeto de persona: Define un objeto llamado 
"persona" que tenga propiedades como nombre, edad y género. 
Luego, muestra la información de esa persona por la consola.
*/ 

const Persona = {
    Nombre: "Juan",
    Genero: "Masculino",
    Edad:21
}
console.log(Persona.Nombre);
console.log(Persona.Genero);
console.log(Persona.Edad);

/*Crear un objeto llamado caja: La caja se compone de cuadernos, 
lápices, papel, fotografías y indica el estado si esta en buen 
estado o no. Imprimir el objeto entero por consola, imprimir 
cada propiedad del objeto y el tipo de dato que es.*/

const caja = {
    Cuadernos:6,
    Lapices:30,
    Papel:100,
    Fotografias:25,
    Estado_caja:"Mal estado"
}
console.log(caja);
console.log(caja.Cuadernos);
console.log(caja.Lapices);
console.log(caja.Papel);
console.log(caja.Fotografias);
console.log(caja.Estado_caja);
console.log(typeof caja);
console.log(typeof caja.Cuadernos);
console.log(typeof caja.Lapices);
console.log(typeof caja.Papel);
console.log(typeof caja.Fotografias);
console.log(typeof caja.Estado_caja);