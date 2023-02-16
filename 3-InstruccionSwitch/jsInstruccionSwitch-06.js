/*
 Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
 */
function mostrar()
{
	// tomo la hora
	var horaDelDia;
	var mensaje;
	horaDelDia = txtIdHora.value;
	horaDelDia = parseInt(horaDelDia);

	switch (horaDelDia) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje = "Es de muy tarde";
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:	
		case 5:
		case 6:
			mensaje = "Es de noche";
		break;
		default:
			mensaje  = "La hora no existe";
	}
	alert(mensaje);


}//FIN DE LA FUNCIÓN