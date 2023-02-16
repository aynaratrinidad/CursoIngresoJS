/* 
una agencia de viajes debe sacar las tarifas de los viajes 
 se cobra $15.000 por cada estadia como base-
 se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas 
y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas
 y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10%
 cataratas tiene un aumento del 10% 
 Mar del plata tiene un aumento del 10% 
 y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	var estacion;
	var destino;
	var tarifa;
	var mensaje;

	tarifa = 15000;
	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					tarifa = tarifa * 1.2;
					break;
				case "Mar del plata":
					tarifa = tarifa * 0.9;
			}
		break;
		case "Verano":
			break;
	}

}//FIN DE LA FUNCIÓN