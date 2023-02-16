
function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace frio";
			break;
		default:
			mensaje = "Hace calor";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN