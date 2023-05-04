/*1. Hacer un programa que muestre la siguiente 
sucesión: 1,4,7,10,13,16,19,22,25,28,31,34,37 y 40.
*/
function secesion1(){

    for (let i = 1; i <= 40; i += 3) {
        document.write(i + ", ");
    }

}

/*
2. Hacer un programa que muestre la siguiente 
sucesión :3,8,13,18,23,28,33,38,43, 48 y 53.
*/

function secesion2(){

    for (let i = 3; i <= 53; i += 5) {
        document.write(i + ", ");
      }
}

/*
3. Hacer un programa que muestre la siguiente sucesión 
geométrica: 3, 9, 27, 81, 243,729 y 2187.
*/

function secesionG(){

    let num = 3;
    
    for (let i = 1; i <= 7; i++) {
        document.write(num + ", ");
        num *= 3;
    }
}

/*
4. Hacer un programa que muestre la sumatoria o “serie ” de la sucesión 
1,2,3,4,5,6,7,8,9,10,11,12,13,14 y 15.
*/

function sucesionSum(){

    let sum = 0;
    
    for (let i = 1; i <= 15; i++) {
        document.write(i);

        sum += i;
}
    document.write("</br> La sumatoria de los numero es: ",sum);

}

/*
5. Hacer un programa que muestre la sumatoria o “serie ” de la sucesión 
3,8,13,18,23,28,33,38,43,48 y 53
*/

function sucesionSum2(){

    let sum = 0;
    
    for (let i = 3; i <= 53; i += 5) {
        document.write(i);

        sum += i;
}
    document.write("</br> La sumatoria de los numero es: ",sum);

}

/*
6. Hacer un programa que muestre la sumatoria o “serie” de la sucesión 3, 9, 27, 81, 243,729 y 
2187.
*/

function sucesionSum3(){

    let sum = 0;
    let num = 3;

    for (let i = 1; i <= 7; i++) {
        document.write(num+",");

        sum += num;
        num *= 3;
}
    document.write("</br> La sumatoria de los numero es: ",sum);
}
    
/*
7. Hacer un programa que me muestre las tablas de multiplicar del 1, 2 y 3.
*/

function tablaX(){

    for (let i = 1; i <= 3; i++) {
        document.write("Tabla del " + i + "<br>");
        
        for (let j = 1; j <= 10; j++) {
          document.write(i + " x " + j + " = " + (i * j) + "<br>");
        }
      }

}

