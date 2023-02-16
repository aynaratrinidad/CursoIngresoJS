function mostrar()
{
	var contador;
	var numeroIngresado;
	var promedio;
	var suma;

	contador = 0;
	acumulador = 0;
	suma = 0;
	
	while (contador < 5) {
		numeroIngresado = prompt("Ingresar otro numero");
		numeroIngresado = parseInt(numeroIngresado);
		suma += numeroIngresado;
		contador += 1;
	}
		promedio = suma/contador;

	 document.getElementById("txtIdSuma").value = suma;
	 document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN