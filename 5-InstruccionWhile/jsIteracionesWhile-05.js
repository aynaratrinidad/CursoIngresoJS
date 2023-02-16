/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese sexo femenino ó masculino .");

	while (sexoIngresado != "f" && sexoIngresado != "m") {
		alert("Ingreso mal el sexo");
		sexoIngresado = prompt("Ingrese de nuevo");
	}
	// esta todo bien f o m
	document.getElementById("txtIdSexo").value = sexoIngresado;
	
}//FIN DE LA FUNCIÓN