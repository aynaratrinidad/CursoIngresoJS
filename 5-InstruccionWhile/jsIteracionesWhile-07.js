/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta; // variable de respuesta
	var promedio;
	var numeroIngresado;

	contador = 0;
	acumulador = 0;
	//respuesta='si';

	respuesta == true;
	do 
	 {

		// operaciones
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseFloat(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;

		//pregunto hasta que el usuario quiera
		respuesta = confirm("Desea seguir ingresando numeros?");

	} while (respuesta ==  true);
	
	  promedio = acumulador / contador;

	  document.getElementById("txtIdSuma").value = acumulador;
	  document.getElementById("txtIdPromedio").value = promedio;
	}

//FIN DE LA FUNCIÓN 	txtIdSuma.value=acumulador;
	// txtIdPromedio.value=acumulador/contador;