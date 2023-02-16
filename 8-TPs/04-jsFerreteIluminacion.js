/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 function CalcularPrecio () 
 {
     var cantidadDeLamparas;
     var precioPorUnidad;
     var descuento;
     var marca;
     var precioConDescuento;
     var precioFinal;
     var aumento;
     var precioConAumento;
     var precioBruto;
     var ingresosBrutos;
     
     cantidadDeLamparas= document.getElementById("txtIdCantidad").value;
     cantidadDeLamparas= parseInt(cantidadDeLamparas);
 
     precioPorUnidad= 35;
 
     precioBruto= precioPorUnidad * cantidadDeLamparas;
 
     marca= document.getElementById("Marca").value;
 
     if(cantidadDeLamparas > 5)
     {
         descuento= precioBruto * 0.5;
         precioConDescuento= precioBruto - descuento;
         precioFinal= precioConDescuento;
     }
     else
     {
         if(cantidadDeLamparas == 5 && marca == "ArgentinaLuz")
         {
             descuento= precioBruto * 0.4;
             precioConDescuento= precioBruto - descuento;
             precioFinal= precioConDescuento;
         }
         else
         {
             if (cantidadDeLamparas==5)
             {
                 descuento= precioBruto * 0.3;
                 precioConDescuento= precioBruto - descuento;
                 precioFinal= precioConDescuento;
             }  
              else
             {
                 if(cantidadDeLamparas== 4 && (marca== "ArgentinaLuz" || marca=="FelipeLamparas" ))
                 {  
                     descuento= precioBruto * 0.25;
                     precioConDescuento= precioBruto - descuento;
                     precioFinal= precioConDescuento;
                 }
                 else
                 {
                     if(cantidadDeLamparas == 4)
                     {
                         descuento= precioBruto * 0.2;
                         precioConDescuento= precioBruto - descuento;
                         precioFinal= precioConDescuento;
                     }  
                     else
                     {
                         if(cantidadDeLamparas == 3 && marca== "ArgentinaLuz")
                         {
                             descuento= precioBruto * 0.15;
                             precioConDescuento= precioBruto - descuento;
                             precioFinal= precioConDescuento;
                         }
                         else
                         {
                             if(cantidadDeLamparas == 3 && marca == "FelipeLamparas")
                             {
                                 descuento= precioBruto * 0.1;
                                 precioConDescuento= precioBruto - descuento;
                                 precioFinal= precioConDescuento;
                             }
                             else
                             {
                                 descuento= precioBruto * 0.05;
                                 precioConDescuento= precioBruto - descuento;
                                 precioFinal= precioConDescuento;
                             }                     
                         }
                     } 
                 }
             }
         }
     }
 
     if(precioFinal > 120)
     {
         ingresosBrutos= precioFinal * 0.1;
         alert("Usted pago " + ingresosBrutos + " % De IIBB");
     }
 
     document.getElementById("txtIdprecioDescuento").value = precioFinal;
 }
 
 /*

 function CalcularPrecio ()
 {
   var precioCamisa;
   var cantidadCamisas;
   var descuento;
   var precioFinal;

   precioCamisa = 5000;
   cantidadCamisas = promt("Ingrese cantidad de camisas");


 }
 Cada camisa cuesta $5000. Si el cliente compra 0 camisas o mas, se le ofrecera un descuento del 10%. */
 