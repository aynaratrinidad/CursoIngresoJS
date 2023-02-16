/* 
Al selecionar un destino
 indicar el punto cardinal de nuestro pais en donde se encuentra:
  Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var indicarDestino;
	var puntoCardinal;

	indicarDestino = document.getElementById("txtIdDestino").value;
	
	switch (indicarDestino) {
		case "Bariloche":
			puntoCardinal = "Oeste";
			break;
		case "Mar del Plata":
			puntoCardinal = "Este";
			break;
		case "Ushuaia":
			puntoCardinal = "Sur";
			break;
			case "Cataratas":
			puntoCardinal = "Norte";
			break;
	}
			alert(indicarDestino + " Se encuentra al " + puntoCardinal);

}//FIN DE LA FUNCIÓN barilo sur cata sur ushua su oeste mardel oeste