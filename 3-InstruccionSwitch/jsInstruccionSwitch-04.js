/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
 */
function mostrar()
{
	var mes;
	var mensaje;
	mes = document.getElementById("txtIdMes");

	switch (key) {
		case "Febrero":
			mensaje = "Tiene 28 dias";
			break;
	case "Enero":
	case "Marzo":
	case "Agosto":
	case "Octubre":
	case "Julio":
	case "Diciembre":
		mensaje= "Tiene 31 dias";
		break;
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		 mensaje = "Tiene 30 dias";
	}
		alert(mensaje);

}//FIN DE LA FUNCIÓN