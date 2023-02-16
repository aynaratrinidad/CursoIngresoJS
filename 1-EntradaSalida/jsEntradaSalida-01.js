/*
Aynara Trinidad
Division Z
Grupo 3 
Ejercicio Integrador 4

Tenemos que crear un programa que verifique si el usuario puede subirse a una montaña rusa
para esto el usuario deberá ingresar los siguientes datos por prompt: Altura y edad. 
Si el usuario mide menos de 120 cm debemos indicar que no puede subirse a la montaña rusa,
en cambio sí tiene la altura correspondiente debemos preguntar su edad y mostrarle al usuario por alert el monto a pagar.
El monto a pagar:
200$: para menores de edad y mayores de 80
400$: Mayores de edad menores a 80
A tener en cuenta: Si preguntamos la altura del usuario y no puede subir no deberíamos preguntarle la edad.
*/

/*function mostrar()
{
	var ingresarAltura;
	var ingresarEdad;

	ingresarAltura =prompt("Bienvenido ¿Cuanto medis?");
	ingresarAltura = parseInt(ingresarAltura);

	if(ingresarAltura <= 120 )
	{
			alert("No puede subirse a la montaña rusa");
	}
	else
	{
		ingresarEdad = prompt("¿Cuantos años tenes?");
	
	if(ingresarEdad <= 17 || ingresarEdad >= 80)
		{
			alert("El monto a pagar es de $200");
		}
		else
		{
			alert("El monto a pagar es de $400");
		}	
	}
}

*/

function mostrar ()
 {
   var precioCamisa;
   var cantidadCamisas;
   var descuento;
   var precioFinal;
   var precioBruto; // cantidad del producto y el precio

   precioCamisa = 5000;
   descuento = 100; // NO HAY DESC HASTA QUE SE DEMUESTRE LO CONTRARIO VALE HASTA QUE SE CUMPLA LA CONDICION 
   cantidadCamisas = promt("Ingrese cantidad de camisas");
   cantidadCamisas = parseInt(cantidadCamisas);
   precioBruto = cantidadCamisas * precioCamisa;
   marca = prompt("Ingrese la marca"); // Lacost


  /* if(cantidadCamisas > 9 && marca == "Lacoste") // >= 10 QUE ACA EL PROGRAMA VE SI APLICA EL DESCUENTO. CONDICION
{
		descuento = precioBruto * 0.15; // SE HACE PARA EVITAR EL ELSE-
}
else
{
	if(cantidadCamisas > 9 && marca != "Lacoste")
	{
		descuento = 0.05;
	}
} */
	if(cantidadCamisas > 9)
	{
		if(marca == "Lacoste")
		{
			descuento = 0.15;
		}
		else 
		{
			if(marca == "Zara")
			{
			descuento = 0.01;
			}
			else
			{
				descuento = 0.05;
			}
		}
	}

	precioFinal = precioBruto - (precioBruto * descuento); // ACA RESTA EL VALOR DEL DESCUENTO

	alert("Usted pagara: " + precioFinal);
 }

 /*Cada camisa cuesta $5000. Si el cliente compra 0 camisas o mas de la marca Lacoste, 
 se le ofrecera un descuento del 15%. pero si compra marca zara el descuento es del 10& 
para cualquier otra marca el descuento sera del 5%.

 */
 