


//Propiedades por defecto
// http://demos.jquerymobile.com/1.2.0/docs/pages/page-transitions.html
//$(document).bind("mobileinit", function(){
//
//	$mobile.defaultPageTransition = "slidedown";
//
//
//});






//variables globales, por ejemplo la pagina actual de vertodas
///////////////////////////////////////////////////////////////////////////////////////////////////////////	

var PagActual=1;
var PagActualMejores=1;
var IdCardActual=1;
var ArrayHasVotado = new Array();
var AutocompleteRelleno = 0;

var Idiomadef="es";

// cuando solicitamos contenido de una pagina nueva, la sobreescribimos
///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	
	

	
	
	
	
	
	
	
	
	
//javascript para page_vertodas, funcion autoejecutable, se ejecuta al comenzar pero nunca mas... por eso su numero de pagina siempre será 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	$(function(){

	var urlphp ="http://msnzapps.com/coleccion/kamasutra/phpcalls/php_kamasutra_ver_todas.php?pag=1&idioma=" + Idiomadef;

	
	
		$.get( urlphp, function( data ) {
		
			var Img1=data.Imagen1;
			var Tit1=data.Titulo1;
			var Txt1=data.Texto1;
			var Idd1=data.Id1;
			var Porciento1=data.Porciento1;
			
			var Img2=data.Imagen2;
			var Tit2=data.Titulo2;
			var Txt2=data.Texto2;
			var Idd2=data.Id2;			
			var Porciento2=data.Porciento2;			

			var Img3=data.Imagen3;
			var Tit3=data.Titulo3;
			var Txt3=data.Texto3;
			var Idd3=data.Id3;			
			var Porciento3=data.Porciento3;			

			var Img4=data.Imagen4;
			var Tit4=data.Titulo4;
			var Txt4=data.Texto4;
			var Idd4=data.Id4;			
			var Porciento4=data.Porciento4;
			
			var Img5=data.Imagen5;
			var Tit5=data.Titulo5;
			var Txt5=data.Texto5;
			var Idd5=data.Id5;			
			var Porciento5=data.Porciento5;
			
			var Img6=data.Imagen6;
			var Tit6=data.Titulo6;
			var Txt6=data.Texto6;
			var Idd6=data.Id6;			
			var Porciento6=data.Porciento6;
			
			var Img7=data.Imagen7;
			var Tit7=data.Titulo7;
			var Txt7=data.Texto7;
			var Idd7=data.Id7;
			var Porciento7=data.Porciento7;
			
			var Img8=data.Imagen8;
			var Tit8=data.Titulo8;
			var Txt8=data.Texto8;
			var Idd8=data.Id8;			
			var Porciento8=data.Porciento8;
			
			var Img9=data.Imagen9;
			var Tit9=data.Titulo9;
			var Txt9=data.Texto9;
			var Idd9=data.Id9;
			var Porciento9=data.Porciento9;

			var Img10=data.Imagen10;
			var Tit10=data.Titulo10;
			var Txt10=data.Texto10;
			var Idd10=data.Id10;
			var Porciento10=data.Porciento10;
			
			var stringporciento1 =  Porciento1 + "%";
			var stringporciento2 =  Porciento2 + "%";			
			var stringporciento3 =  Porciento3 + "%";
			var stringporciento4 =  Porciento4 + "%";
			var stringporciento5 =  Porciento5 + "%";
			var stringporciento6 =  Porciento6 + "%";
			var stringporciento7 =  Porciento7 + "%";
			var stringporciento8 =  Porciento8 + "%";
			var stringporciento9 =  Porciento9 + "%";
			var stringporciento10 = Porciento10 + "%";			
			
		 document.getElementById("titulo1").innerHTML = Tit1;
		 document.getElementById("idimg1").src = Img1;		
		 document.getElementById("txtt1").innerHTML = Txt1;
		 document.getElementById("barra1").style.width = stringporciento1;		 
	 
		 

		 document.getElementById("titulo2").innerHTML = Tit2;
		 document.getElementById("idimg2").src = Img2;		
		 document.getElementById("txtt2").innerHTML = Txt2;		 
		 document.getElementById("barra2").style.width = stringporciento2;
		 
		 document.getElementById("titulo3").innerHTML = Tit3;
		 document.getElementById("idimg3").src = Img3;		
		 document.getElementById("txtt3").innerHTML = Txt3;
		 document.getElementById("barra3").style.width = stringporciento3;		 
		 
		 document.getElementById("titulo4").innerHTML = Tit4;
		 document.getElementById("idimg4").src = Img4;		
		 document.getElementById("txtt4").innerHTML = Txt4;	
		 document.getElementById("barra4").style.width = stringporciento4;	 
		 
		 document.getElementById("titulo5").innerHTML = Tit5;
		 document.getElementById("idimg5").src = Img5;		
		 document.getElementById("txtt5").innerHTML = Txt5;	
		 document.getElementById("barra5").style.width = stringporciento5;	 

		 document.getElementById("titulo6").innerHTML = Tit6;
		 document.getElementById("idimg6").src = Img6;		
		 document.getElementById("txtt6").innerHTML = Txt6;	
		 document.getElementById("barra6").style.width = stringporciento6;
		 
		 document.getElementById("titulo7").innerHTML = Tit7;
		 document.getElementById("idimg7").src = Img7;		
		 document.getElementById("txtt7").innerHTML = Txt7;	
		 document.getElementById("barra7").style.width = stringporciento7;		 

		 document.getElementById("titulo8").innerHTML = Tit8;
		 document.getElementById("idimg8").src = Img8;		
		 document.getElementById("txtt8").innerHTML = Txt8;	
		 document.getElementById("barra8").style.width = stringporciento8;		 

		 document.getElementById("titulo9").innerHTML = Tit9;
		 document.getElementById("idimg9").src = Img9;		
		 document.getElementById("txtt9").innerHTML = Txt9;	
		 document.getElementById("barra9").style.width = stringporciento9;		 

		 document.getElementById("titulo10").innerHTML = Tit10;
		 document.getElementById("idimg10").src = Img10;		
		 document.getElementById("txtt10").innerHTML = Txt10;	
		 document.getElementById("barra10").style.width = stringporciento10;		 		 
				 

				 
				 
				 
				 
	 
		 
				 
				 
		}, "json" );


	  });
///////////////////////////////////////////////////////////////////////////////////////////////////////////		  
	  
	  
	  
	  
	  
	  
//javascript para page_vertodas, funcion que se ejecuta solo cuando la llamamos, utilizada para recargar los valores de page_vertodas, cuando pasemos a la pag 2...
///////////////////////////////////////////////////////////////////////////////////////////////////////////		
function Recargar_Ver_Todas(){

//usamos la variable global PagActual	
	var urlphp ="http://msnzapps.com/coleccion/kamasutra/phpcalls/php_kamasutra_ver_todas.php?pag=" + PagActual; 

	
	var urldef =  urlphp + "&idioma=" +  Idiomadef;


	
	
		$.get( urldef, function( data ) {
		
			var Img1=data.Imagen1;
			var Tit1=data.Titulo1;
			var Txt1=data.Texto1;
			var Idd1=data.Id1;
			var Porciento1=data.Porciento1;
			
			var Img2=data.Imagen2;
			var Tit2=data.Titulo2;
			var Txt2=data.Texto2;
			var Idd2=data.Id2;			
			var Porciento2=data.Porciento2;			

			var Img3=data.Imagen3;
			var Tit3=data.Titulo3;
			var Txt3=data.Texto3;
			var Idd3=data.Id3;			
			var Porciento3=data.Porciento3;			

			var Img4=data.Imagen4;
			var Tit4=data.Titulo4;
			var Txt4=data.Texto4;
			var Idd4=data.Id4;			
			var Porciento4=data.Porciento4;
			
			var Img5=data.Imagen5;
			var Tit5=data.Titulo5;
			var Txt5=data.Texto5;
			var Idd5=data.Id5;			
			var Porciento5=data.Porciento5;
			
			var Img6=data.Imagen6;
			var Tit6=data.Titulo6;
			var Txt6=data.Texto6;
			var Idd6=data.Id6;			
			var Porciento6=data.Porciento6;
			
			var Img7=data.Imagen7;
			var Tit7=data.Titulo7;
			var Txt7=data.Texto7;
			var Idd7=data.Id7;
			var Porciento7=data.Porciento7;
			
			var Img8=data.Imagen8;
			var Tit8=data.Titulo8;
			var Txt8=data.Texto8;
			var Idd8=data.Id8;			
			var Porciento8=data.Porciento8;
			
			var Img9=data.Imagen9;
			var Tit9=data.Titulo9;
			var Txt9=data.Texto9;
			var Idd9=data.Id9;
			var Porciento9=data.Porciento9;

			var Img10=data.Imagen10;
			var Tit10=data.Titulo10;
			var Txt10=data.Texto10;
			var Idd10=data.Id10;
			var Porciento10=data.Porciento10;
			
			
		//si no hay contenido hacemos algoo
if ((Tit1)==("")&&(Tit2)==("")&&(Tit3)==("")&&(Tit4)==("")&&(Tit5)==("")&&(Tit6)==("")&&(Tit7)==("")&&(Tit8)==("")&&(Tit9)==("")&&(Tit10)==("")) {
    	$.mobile.changePage( "#popupDialog3");	
}		
			
			
			
			
			var stringporciento1 =  Porciento1 + "%";
			var stringporciento2 =  Porciento2 + "%";			
			var stringporciento3 =  Porciento3 + "%";
			var stringporciento4 =  Porciento4 + "%";
			var stringporciento5 =  Porciento5 + "%";
			var stringporciento6 =  Porciento6 + "%";
			var stringporciento7 =  Porciento7 + "%";
			var stringporciento8 =  Porciento8 + "%";
			var stringporciento9 =  Porciento9 + "%";
			var stringporciento10 = Porciento10 + "%";			
			
		 document.getElementById("titulo1").innerHTML = Tit1;
		 document.getElementById("idimg1").src = Img1;		
		 document.getElementById("txtt1").innerHTML = Txt1;
		 document.getElementById("barra1").style.width = stringporciento1;		 
	 
		 

		 document.getElementById("titulo2").innerHTML = Tit2;
		 document.getElementById("idimg2").src = Img2;		
		 document.getElementById("txtt2").innerHTML = Txt2;		 
		 document.getElementById("barra2").style.width = stringporciento2;
		 
		 document.getElementById("titulo3").innerHTML = Tit3;
		 document.getElementById("idimg3").src = Img3;		
		 document.getElementById("txtt3").innerHTML = Txt3;
		 document.getElementById("barra3").style.width = stringporciento3;		 
		 
		 document.getElementById("titulo4").innerHTML = Tit4;
		 document.getElementById("idimg4").src = Img4;		
		 document.getElementById("txtt4").innerHTML = Txt4;	
		 document.getElementById("barra4").style.width = stringporciento4;	 
		 
		 document.getElementById("titulo5").innerHTML = Tit5;
		 document.getElementById("idimg5").src = Img5;		
		 document.getElementById("txtt5").innerHTML = Txt5;	
		 document.getElementById("barra5").style.width = stringporciento5;	 

		 document.getElementById("titulo6").innerHTML = Tit6;
		 document.getElementById("idimg6").src = Img6;		
		 document.getElementById("txtt6").innerHTML = Txt6;	
		 document.getElementById("barra6").style.width = stringporciento6;
		 
		 document.getElementById("titulo7").innerHTML = Tit7;
		 document.getElementById("idimg7").src = Img7;		
		 document.getElementById("txtt7").innerHTML = Txt7;	
		 document.getElementById("barra7").style.width = stringporciento7;		 

		 document.getElementById("titulo8").innerHTML = Tit8;
		 document.getElementById("idimg8").src = Img8;		
		 document.getElementById("txtt8").innerHTML = Txt8;	
		 document.getElementById("barra8").style.width = stringporciento8;		 

		 document.getElementById("titulo9").innerHTML = Tit9;
		 document.getElementById("idimg9").src = Img9;		
		 document.getElementById("txtt9").innerHTML = Txt9;	
		 document.getElementById("barra9").style.width = stringporciento9;		 

		 document.getElementById("titulo10").innerHTML = Tit10;
		 document.getElementById("idimg10").src = Img10;		
		 document.getElementById("txtt10").innerHTML = Txt10;	
		 document.getElementById("barra10").style.width = stringporciento10;		 		 
				 

				 
		
				 
				 
//para eliminar el div si no hay contenido ke mostrar y no quedan rastros de lineas ...
//(no lo pongo en el primer javascript porque presupongo que habrá mas de 10 imágenes)				 
if(Tit1.length>0){document.getElementById("li1").style.display = 'block';}else{document.getElementById("li1").style.display = 'none';}					 
if(Tit2.length>0){document.getElementById("li2").style.display = 'block';}else{document.getElementById("li2").style.display = 'none';}					 
if(Tit3.length>0){document.getElementById("li3").style.display = 'block';}else{document.getElementById("li3").style.display = 'none';}					 
if(Tit4.length>0){document.getElementById("li4").style.display = 'block';}else{document.getElementById("li4").style.display = 'none';}					 
if(Tit5.length>0){document.getElementById("li5").style.display = 'block';}else{document.getElementById("li5").style.display = 'none';}					 
if(Tit6.length>0){document.getElementById("li6").style.display = 'block';}else{document.getElementById("li6").style.display = 'none';}					 
if(Tit7.length>0){document.getElementById("li7").style.display = 'block';}else{document.getElementById("li7").style.display = 'none';}					 
if(Tit8.length>0){document.getElementById("li8").style.display = 'block';}else{document.getElementById("li8").style.display = 'none';}					 
if(Tit9.length>0){document.getElementById("li9").style.display = 'block';}else{document.getElementById("li9").style.display = 'none';}					 
if(Tit10.length>0){document.getElementById("li10").style.display = 'block';}else{document.getElementById("li10").style.display = 'none';}			 
				 
				 
				 
				 
				 
				 
				 
		}, "json" );


	  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////			  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
//javascript para page_vertodasMEJOR, funcion que se ejecuta solo cuando la llamamos, utilizada para recargar los valores de page_vertodas, cuando pasemos a la pag 2...
///////////////////////////////////////////////////////////////////////////////////////////////////////////		
function Recargar_Ver_Todas_Mejor(){


	var urlphp ="http://msnzapps.com/coleccion/kamasutra/phpcalls/php_kamasutra_ver_todas_mejor.php?pag=";
//usamos la variable global PagActual	

	var urlphp = urlphp + PagActual;
	
	var urldef =  urlphp + "&idioma=" +  Idiomadef;
	
	
		$.get( urldef, function( data ) {
		
			var Img1=data.Imagen1;
			var Tit1=data.Titulo1;
			var Txt1=data.Texto1;
			var Idd1=data.Id1;
			var Porciento1=data.Porciento1;
			
			var Img2=data.Imagen2;
			var Tit2=data.Titulo2;
			var Txt2=data.Texto2;
			var Idd2=data.Id2;			
			var Porciento2=data.Porciento2;			

			var Img3=data.Imagen3;
			var Tit3=data.Titulo3;
			var Txt3=data.Texto3;
			var Idd3=data.Id3;			
			var Porciento3=data.Porciento3;			

			var Img4=data.Imagen4;
			var Tit4=data.Titulo4;
			var Txt4=data.Texto4;
			var Idd4=data.Id4;			
			var Porciento4=data.Porciento4;
			
			var Img5=data.Imagen5;
			var Tit5=data.Titulo5;
			var Txt5=data.Texto5;
			var Idd5=data.Id5;			
			var Porciento5=data.Porciento5;
			
			var Img6=data.Imagen6;
			var Tit6=data.Titulo6;
			var Txt6=data.Texto6;
			var Idd6=data.Id6;			
			var Porciento6=data.Porciento6;
			
			var Img7=data.Imagen7;
			var Tit7=data.Titulo7;
			var Txt7=data.Texto7;
			var Idd7=data.Id7;
			var Porciento7=data.Porciento7;
			
			var Img8=data.Imagen8;
			var Tit8=data.Titulo8;
			var Txt8=data.Texto8;
			var Idd8=data.Id8;			
			var Porciento8=data.Porciento8;
			
			var Img9=data.Imagen9;
			var Tit9=data.Titulo9;
			var Txt9=data.Texto9;
			var Idd9=data.Id9;
			var Porciento9=data.Porciento9;

			var Img10=data.Imagen10;
			var Tit10=data.Titulo10;
			var Txt10=data.Texto10;
			var Idd10=data.Id10;
			var Porciento10=data.Porciento10;
			
			
		//si no hay contenido hacemos algoo
if ((Tit1)==("")&&(Tit2)==("")&&(Tit3)==("")&&(Tit4)==("")&&(Tit5)==("")&&(Tit6)==("")&&(Tit7)==("")&&(Tit8)==("")&&(Tit9)==("")&&(Tit10)==("")) {
    	$.mobile.changePage( "#popupDialog3");	
}		
			
			
			
			
			var stringporciento1 =  Porciento1 + "%";
			var stringporciento2 =  Porciento2 + "%";			
			var stringporciento3 =  Porciento3 + "%";
			var stringporciento4 =  Porciento4 + "%";
			var stringporciento5 =  Porciento5 + "%";
			var stringporciento6 =  Porciento6 + "%";
			var stringporciento7 =  Porciento7 + "%";
			var stringporciento8 =  Porciento8 + "%";
			var stringporciento9 =  Porciento9 + "%";
			var stringporciento10 = Porciento10 + "%";			
			
		 document.getElementById("m_titulo1").innerHTML = Tit1;
		 document.getElementById("m_idimg1").src = Img1;		
		 document.getElementById("m_txtt1").innerHTML = Txt1;
		 document.getElementById("m_barra1").style.width = stringporciento1;		 
	 
		 

		 document.getElementById("m_titulo2").innerHTML = Tit2;
		 document.getElementById("m_idimg2").src = Img2;		
		 document.getElementById("m_txtt2").innerHTML = Txt2;		 
		 document.getElementById("m_barra2").style.width = stringporciento2;
		 
		 document.getElementById("m_titulo3").innerHTML = Tit3;
		 document.getElementById("m_idimg3").src = Img3;		
		 document.getElementById("m_txtt3").innerHTML = Txt3;
		 document.getElementById("m_barra3").style.width = stringporciento3;		 
		 
		 document.getElementById("m_titulo4").innerHTML = Tit4;
		 document.getElementById("m_idimg4").src = Img4;		
		 document.getElementById("m_txtt4").innerHTML = Txt4;	
		 document.getElementById("m_barra4").style.width = stringporciento4;	 
		 
		 document.getElementById("m_titulo5").innerHTML = Tit5;
		 document.getElementById("m_idimg5").src = Img5;		
		 document.getElementById("m_txtt5").innerHTML = Txt5;	
		 document.getElementById("m_barra5").style.width = stringporciento5;	 

		 document.getElementById("m_titulo6").innerHTML = Tit6;
		 document.getElementById("m_idimg6").src = Img6;		
		 document.getElementById("m_txtt6").innerHTML = Txt6;	
		 document.getElementById("m_barra6").style.width = stringporciento6;
		 
		 document.getElementById("m_titulo7").innerHTML = Tit7;
		 document.getElementById("m_idimg7").src = Img7;		
		 document.getElementById("m_txtt7").innerHTML = Txt7;	
		 document.getElementById("m_barra7").style.width = stringporciento7;		 

		 document.getElementById("m_titulo8").innerHTML = Tit8;
		 document.getElementById("m_idimg8").src = Img8;		
		 document.getElementById("m_txtt8").innerHTML = Txt8;	
		 document.getElementById("m_barra8").style.width = stringporciento8;		 

		 document.getElementById("m_titulo9").innerHTML = Tit9;
		 document.getElementById("m_idimg9").src = Img9;		
		 document.getElementById("m_txtt9").innerHTML = Txt9;	
		 document.getElementById("m_barra9").style.width = stringporciento9;		 

		 document.getElementById("m_titulo10").innerHTML = Tit10;
		 document.getElementById("m_idimg10").src = Img10;		
		 document.getElementById("m_txtt10").innerHTML = Txt10;	
		 document.getElementById("m_barra10").style.width = stringporciento10;		 		 
				 

				 
		
				 
				 
//para eliminar el div si no hay contenido ke mostrar y no quedan rastros de lineas ...
//(no lo pongo en el primer javascript porque presupongo que habrá mas de 10 imágenes)				 
if(Tit1.length>0){document.getElementById("li1").style.display = 'block';}else{document.getElementById("li1").style.display = 'none';}					 
if(Tit2.length>0){document.getElementById("li2").style.display = 'block';}else{document.getElementById("li2").style.display = 'none';}					 
if(Tit3.length>0){document.getElementById("li3").style.display = 'block';}else{document.getElementById("li3").style.display = 'none';}					 
if(Tit4.length>0){document.getElementById("li4").style.display = 'block';}else{document.getElementById("li4").style.display = 'none';}					 
if(Tit5.length>0){document.getElementById("li5").style.display = 'block';}else{document.getElementById("li5").style.display = 'none';}					 
if(Tit6.length>0){document.getElementById("li6").style.display = 'block';}else{document.getElementById("li6").style.display = 'none';}					 
if(Tit7.length>0){document.getElementById("li7").style.display = 'block';}else{document.getElementById("li7").style.display = 'none';}					 
if(Tit8.length>0){document.getElementById("li8").style.display = 'block';}else{document.getElementById("li8").style.display = 'none';}					 
if(Tit9.length>0){document.getElementById("li9").style.display = 'block';}else{document.getElementById("li9").style.display = 'none';}					 
if(Tit10.length>0){document.getElementById("li10").style.display = 'block';}else{document.getElementById("li10").style.display = 'none';}			 
				 
				 
				 
				 
				 
				 
				 
		}, "json" );


	  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////		  
	  
	  
	  
	  

	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
//utilizado para refrescar una page cuando cambiamos los datos, tambien llamamos a esta funcion	  
function refreshPage()
{
    jQuery.mobile.changePage(window.location.href, {
        allowSamePageTransition: true,
        transition: 'none',
        reloadPage: true
    });
}	  
///////////////////////////////////////////////////////////////////////////////////////////////////////////		  
	  

	  
	  
//javascript para page_ver_una, en el link pasamos la id de la tarjeta ke keremos ver
///////////////////////////////////////////////////////////////////////////////////////////////////////////			  
function VerTarjeta1(IdTarjeta){


//Primero cargamos rapidamente la pantalla de loading
		 document.getElementById("1card_titulo1").innerHTML = "";
		 document.getElementById("1card_idimg1").src = "css/loader.gif";		
		 document.getElementById("1card_txtt1").innerHTML = "";


IdCardActual=IdTarjeta;
//alert("la1:"+IdCardActual); //para comprobar ke todo va bien
	var urlphp ="http://msnzapps.com/coleccion/kamasutra/phpcalls/php_kamasutra_ver.php?Idcard=";
	var urlphp = urlphp + IdTarjeta;
	var urldef = urlphp + "&idioma=" + Idiomadef;
	

		$.get( urldef, function( data ) {

			var Img1=data.Imagen1;
			var Tit1=data.Titulo1;
			var Txt1=data.Texto1;


			
		//si no hay contenido hacemos algoo
if ((Tit1)==("")) {
    	$.mobile.changePage( "#popupDialog4");	
}	

		 document.getElementById("1card_titulo1").innerHTML = Tit1;
		 document.getElementById("1card_idimg1").src = Img1;		
		 document.getElementById("1card_txtt1").innerHTML = Txt1;
		 document.getElementById("1like_boton1").onclick = function() { votarsi(IdTarjeta); };		 
		 document.getElementById("1like_boton2").onclick = function() { votarno(IdTarjeta); };		 

		
		//si no hay datos ke mostrar, no muestra nada... esta solución habría que retocarla, deshabilitando el botón y no dejar al user llegar aki... pero de momento lo dejo así
		if(Tit1.length>0){document.getElementById("licard").style.display = 'block';}else{document.getElementById("licard").style.display = 'none';}	
		
		}, "json" );
					  
				  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////









//javascript para page_ver_una, en el link pasamos la id de la tarjeta ke keremos ver
///////////////////////////////////////////////////////////////////////////////////////////////////////////			  
function VerTarjeta2(IdTarjeta){


//Primero cargamos rapidamente la pantalla de loading
		 document.getElementById("1card_titulo1").innerHTML = "";
		 document.getElementById("1card_idimg1").src = "css/loader.gif";		
		 document.getElementById("1card_txtt1").innerHTML = "";




//actualizamos el valor de IdCardActual (no interviene en esta función pero es importante para temas de navegacion, flechita siguiente y tal)
IdCardActual=IdTarjeta;
//alert("la2:"+IdCardActual);//para comprobar ke todo va bien
	var urlphp ="http://msnzapps.com/coleccion/kamasutra/phpcalls/php_kamasutra_ver.php?Idcard=";
	var urlphp = urlphp + IdTarjeta;
	var urldef = urlphp + "&idioma=" + Idiomadef;
	
	
	
		$.get( urldef, function( data ) {

			var Img1=data.Imagen1;
			var Tit1=data.Titulo1;
			var Txt1=data.Texto1;


			
		//si no hay contenido hacemos algoo
if ((Tit1)==("")) {
    	$.mobile.changePage( "#popupDialog4");	
}	

		 document.getElementById("2card_titulo1").innerHTML = Tit1;
		 document.getElementById("2card_idimg1").src = Img1;		
		 document.getElementById("2card_txtt1").innerHTML = Txt1;
		 document.getElementById("2like_boton1").onclick = function() { votarsi(IdTarjeta); };		 
		 document.getElementById("2like_boton2").onclick = function() { votarno(IdTarjeta); };		 

		
		//si no hay datos ke mostrar, no muestra nada... esta solución habría que retocarla, deshabilitando el botón y no dejar al user llegar aki... pero de momento lo dejo así
		if(Tit1.length>0){document.getElementById("licard").style.display = 'block';}else{document.getElementById("licard").style.display = 'none';}	
		
		}, "json" );
					  
				  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////






















//realmente la id que recibimos, no es la id real de la tarjeta, ya que mas bien es, la posición 
//por orden de mejor a peor
//javascript para page_ver_una, en el link pasamos la id de la tarjeta ke keremos ver
///////////////////////////////////////////////////////////////////////////////////////////////////////////			  
function VerTarjetaMejores(IdTarjeta){
//actualizamos el valor de IdCardActual (no interviene en esta función pero es importante para temas de navegacion, flechita siguiente y tal)
IdCardActual=IdTarjeta;

	var urlphp ="http://msnzapps.com/coleccion/kamasutra/phpcalls/php_kamasutra_ver_mejor.php?Idcard=";
	var urlphp = urlphp + IdTarjeta;	
	var urldef =  urlphp + "&idioma=" +  Idiomadef;
	
	
		$.get( urldef, function( data ) {

			var Img1=data.Imagen1;
			var Tit1=data.Titulo1;
			var Txt1=data.Texto1;


			
		//si no hay contenido hacemos algoo
if ((Tit1)==("")) {
    	$.mobile.changePage( "#popupDialog4");	
}	

		 document.getElementById("1card_titulo1").innerHTML = Tit1;
		 document.getElementById("1card_idimg1").src = Img1;		
		 document.getElementById("1card_txtt1").innerHTML = Txt1;
		 document.getElementById("1like_boton1").onclick = function() { votarsi(IdTarjeta); };		 
		 document.getElementById("1like_boton2").onclick = function() { votarno(IdTarjeta); };		 

		
		//si no hay datos ke mostrar, no muestra nada... esta solución habría que retocarla, deshabilitando el botón y no dejar al user llegar aki... pero de momento lo dejo así
		if(Tit1.length>0){document.getElementById("licard").style.display = 'block';}else{document.getElementById("licard").style.display = 'none';}	
		
		}, "json" );
					  
				  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
















/////////////para moverse entre tarjetas utilizando el slide del dedo  http://api.jquerymobile.com/swiperight/ 
//recuerda que hay dos pages para ver una tarjeta, para hacer el efectode cambiado de page, por eso son 4 acciones distintas

$(function(){
// Bind the swiperightHandler callback function to the swipe event on div.box
$( "#page_ver_una1" ).on( "swiperight", swiperightHandler );
// Callback function references the event target and adds the 'swiperight' class to it
function swiperightHandler( event ){

var veresta1 = parseInt(IdCardActual)-1;
VerTarjeta2(veresta1);
$.mobile.changePage("#page_ver_una2");
}
});


$(function(){
// Bind the swiperightHandler callback function to the swipe event on div.box
$( "#page_ver_una1" ).on( "swipeleft", swiperightHandler );
// Callback function references the event target and adds the 'swiperight' class to it
function swiperightHandler( event ){
var veresta2 = parseInt(IdCardActual)+1;
VerTarjeta2(veresta2);
$.mobile.changePage("#page_ver_una2");
}
});





$(function(){
// Bind the swiperightHandler callback function to the swipe event on div.box
$( "#page_ver_una2" ).on( "swiperight", swiperightHandler );
// Callback function references the event target and adds the 'swiperight' class to it
function swiperightHandler( event ){
var veresta3 = parseInt(IdCardActual)-1;
VerTarjeta1(veresta3);
$.mobile.changePage("#page_ver_una1");
}
});


$(function(){
// Bind the swiperightHandler callback function to the swipe event on div.box
$( "#page_ver_una2" ).on( "swipeleft", swiperightHandler );
// Callback function references the event target and adds the 'swiperight' class to it
function swiperightHandler( event ){
var veresta4 = parseInt(IdCardActual)+1;
VerTarjeta1(veresta4);
$.mobile.changePage("#page_ver_una1");
}
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////	





//esto es para cargar el menu principal como primera pagina, sin estar colocada la primera en codigo (si la ponemos la primera aparece un problema raro de parpadeo...esto es un feo apaño... pero parece ke funciona)
//otra parte del codigo en el index.html  en el head, entre la carga de jquery y jquery mobile
$(document).ready(function() {            
    window.location.hash = 'MenuPrincipal';
    $.mobile.initializePage();
});














//javascript para rellenar los datos del autocomplete, como puede tardar un poco según si es grande la 
//base de datos, vamos a crear una funcion que solo se ejecute cuando la llamemos, en los links metemos un evento onclick y listo
///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	function DatosAutocomplete(){
	
if(AutocompleteRelleno==0){	

	//primero llamamos al php
	var urlphp ="http://msnzapps.com/coleccion/kamasutra/phpcalls/php_kamasutra_lista_autocomplete.php" + "?idioma=" +  Idiomadef;

	
	
		$.get( urlphp, function( data ) {
		
//			var Img1=data.Imagen1;

var VarGatuna=0;

//esto puede parecer raruno, el json devuelve los datos sin identificar pero en orden, 1ºtit 2ºimg 3ºtxt 4ºid  por eso lo hago así
while(VarGatuna<data.length){

var Tit_autocomplete=data[VarGatuna];
VarGatuna = VarGatuna +1;

var Img_autocomplete=data[VarGatuna];
VarGatuna = VarGatuna +1;

var Txt_autocomplete=data[VarGatuna];
VarGatuna = VarGatuna +1;

var Id_autocomplete=data[VarGatuna];
VarGatuna = VarGatuna +1;

var Porcentaje_autocomplete=data[VarGatuna];
VarGatuna = VarGatuna +1;

var div = document.getElementById('lista_buscar');
div.innerHTML = div.innerHTML + '<li class="ui-li-has-thumb ui-screen-hidden"><a href="#page_ver_una1" onclick="VerTarjeta1(' + Id_autocomplete + ');" title="' + Tit_autocomplete + ' "><img src="'+ Img_autocomplete +'" width="150" height="150"><h2>'+ Tit_autocomplete +'</h2><p id="txtt10">'+ Txt_autocomplete +'</p>' + '<div class="progress ui-bar-c ui-btn-corner-all" ><div id="barra6" class="progress-filled ui-btn-up-b ui-btn-corner-left" style="width: ' + Porcentaje_autocomplete + '%;"></div></div></a></li>';

	}
							
	
	
		}, "json" );

}
AutocompleteRelleno=1;
	  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////		  
	  



function muestra_card_random(){




	//primero contamos el numero de registros de la db para dar un numero dentro de ese rango	
	//primero llamamos al php
	var urlphp ="http://msnzapps.com/coleccion/kamasutra/phpcalls/php_numrow.php";
		$.get( urlphp, function( data ) {
		
var numerodfilas=data[0];

  var today = new Date();
  var h = today.getDay();
  var m = today.getMonth();
  var c = today.getYear();
  var d = 12;
  
  h = h *40;
  m = m +12;
  c = c +34;

  d = h + m + c+ d;
  
 d=d%numerodfilas;
if(d==0){d=12;}
VerTarjeta1(d);
	
		}, "json" );
		

}






function votarsi(IdTarjeta){
var chivato=0;
//comprobamos si la id, está en la array ArrayHasVotado
    for (x=0;x<ArrayHasVotado.length;x++){
	if(ArrayHasVotado[x]==IdTarjeta){chivato=1;}
	}

	
	
	
//si no está, volcamos el voto a la base de datos:	
if(chivato==0){

	var urlphp ="http://msnzapps.com/coleccion/kamasutra/phpcalls/votar.php?positivo=1&id=";
	var urlphp =  urlphp + IdTarjeta;
	
		$.get( urlphp, function( data ) {
		}, "json" );
		
		
//y ahora introducimos la id, en la array para no poder votar dos veces
ArrayHasVotado.push(IdTarjeta);	


//y por ultimo sacamos un aviso de ke ha votado
	$.mobile.changePage( "#popupDialog2");	

}


//si está, sacamos un aviso de ke no se puede votar dos veces
if(chivato==1){	

	$.mobile.changePage( "#popupDialog");
	
}	
	
}








function votarno(IdTarjeta){
var chivato=0;
//comprobamos si la id, está en la array ArrayHasVotado
    for (x=0;x<ArrayHasVotado.length;x++){
	if(ArrayHasVotado[x]==IdTarjeta){chivato=1;}
	}

	
	
	
//si no está, volcamos el voto a la base de datos:	
if(chivato==0){

	var urlphp ="http://msnzapps.com/coleccion/kamasutra/phpcalls/votar.php?positivo=0&id=";
	var urlphp =  urlphp + IdTarjeta;
	
		$.get( urlphp, function( data ) {
		}, "json" );
		
		
//y ahora introducimos la id, en la array para no poder votar dos veces
ArrayHasVotado.push(IdTarjeta);	


//y por ultimo sacamos un aviso de ke ha votado
	$.mobile.changePage( "#popupDialog2");	

}


//si está, sacamos un aviso de ke no se puede votar dos veces
if(chivato==1){	

	$.mobile.changePage( "#popupDialog");
	
}	
	
}
















//para el selector
	function DatosSelector(dhombre,dmujer,dtotal){
	

	
	
		//primero llamamos al php
var urlphp ="http://msnzapps.com/coleccion/kamasutra/phpcalls/php_kamasutra_ver_seleccion.php";
urlphp = urlphp + "?dhombre=" + dhombre + "&dmujer=" + dmujer + "&dtotal=" + dtotal;



//ahora conla id llamamos a la funcion ke se encarga de ver la tarjeta
		$.get( urlphp, function( data ) {
			var IDseleccion=data[0];
			
			VerTarjeta1(IDseleccion);		
			$.mobile.changePage("#page_ver_una1");	
		}, "json" );
		
	



	
	}



	
	
	//animacion del titulo
	
//	function doStuff1() {
//$('#menu_boton_logo').addClass('animated pulse');

//$('#menu_boton_logo').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
//esto es cuando termina la animación, para quitar la clase para que se le pueda añadir mas veces :)
//		$('#menu_boton_logo').removeClass('animated pulse');
 // });

//}
//var myTimer1 = setInterval(doStuff1, 3000);







