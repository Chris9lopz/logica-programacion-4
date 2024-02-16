/* Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Prueba tu programa con las siguientes combinaciones para asegurarte que funcione correctamente:
Entrada: 
3
Salida: 
0, 1, 1.
Entrada: 
10
Salida: 
0, 1, 1, 2, 3, 5, 8, 13, 21, 34.*/ 

function serieFibonacci(numero) {
    let array = [0 , 1]

    for (let i = 2; array.length < numero; i++){
        array[i] = array[i-1] + array[i-2]; 
    }

    return array.join(', ');
}

document.getElementById("btn-enviar").addEventListener("click", function(e){
    e.preventDefault();
    let numero = parseInt(document.getElementById("numero").value, 10);
    let resultado = serieFibonacci(numero);
    console.log(resultado);
    let texto = document.createElement("h3");
    texto.textContent = "La serie Fibonacci del numero " + numero + " es " + resultado;
    document.getElementById("formulario").appendChild(texto);
});
