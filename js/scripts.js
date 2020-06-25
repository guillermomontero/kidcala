
/*-------------------------------------------- MOSTRAR / OCULTAR MENÚ*/
	
$(document).ready(function(){

let flag = false;
let scroll;

	$(window).scroll(function(){

		scroll = $(window).scrollTop();
		if(scroll > 300){
			
			if(!flag){
				
				$(".header-menu").css({"background-color": "#FFFFFF"});
					flag = true;
			}
			
		} else {
			
			if(flag){
				
				$(".header-menu").css({"background-color": "transparent"});
					flag = false;
			}
		}
	});

	$(window).on("scroll", parallaxMenu);

		let ultimoScroll = 5;
		function parallaxMenu() {

			let scrollActual = $(window).scrollTop();
			if (scrollActual > ultimoScroll) {

				$(".header-menu").addClass("oculto");

			} else {

				$(".header-menu").removeClass("oculto");

			}

		ultimoScroll = scrollActual;
	}
});

/*-------------------------------------------- PARALLAX HEADER*/

	$(window).on('scroll', parallax);

	function parallax() {
		scrollPos = $(this).scrollTop();

		$('.cabecera').css({
			'background-position' : '50% ' + (-scrollPos/2)+"px"
		});
	}
    
/*-------------------------------------------- ABRIR Y CERRAR MENÚ*/

$(document).ready(function(){

	$(".icono-hamburguesa").click(function(e){

		e.preventDefault();
		$(".menu-offcanvas").css("transform","translateX(0%)");

	});

	$(".cierre-menu-offcanvas, #item-menu-01, #item-menu-02, #item-menu-03, #item-menu-04").click(function(e){

		e.preventDefault();
		$(".menu-offcanvas").css("transform","translateX(100%)");

	});

	$("#aceptar").click(function(e){

		e.preventDefault();
		$("#politica-cookies").css("display","none");

	});

	$("#proximamente").click(function(e){

		e.preventDefault();
		$(".proximamente").css("display","none");

	});

/*-------------------------------------------- GRID CSS*/

    $(".boton-trabajos").click(function(e){

		e.preventDefault();

        $('.grid-trabajos').css('grid-template-areas', '"medium1   medium1   small1   small2" "medium2   medium2   small1   small3" "small4   small5   medium3   medium3" "small4   small5   small6   small7" "medium4   medium4   small8   small9" "medium5   medium5   small8   small10" "medium6   medium6   medium7   medium7" "small11   small12   medium8   medium8"');
		$(".item-11, .item-12, .item-13, .item-14, .item-15, .item-16, .item-17, .item-18, .item-19, .item-20").removeClass('none');
		$(this).addClass('none');
		$('#mostrar-mas-cierre').removeClass('none');
		$('html').animate({
			scrollTop: $('#item-11').offset().top
		}, 1000);

	});
    
	$(".boton-trabajos-cierre").click(function(e){

		e.preventDefault();

		$('.grid-trabajos').css('grid-template-areas', '"medium1   medium1   small1   small2" "medium2   medium2   small1   small3" "small4   small5   medium3   medium3" "small4   small5   small6   small7"');
		$(".item-11, .item-12, .item-13, .item-14, .item-15, .item-16, .item-17, .item-18, .item-19, .item-20").addClass('none');
		$(this).addClass('none');
		$('#mostrar-mas').removeClass('none');
		$('html').animate({
			scrollTop: $('#trabajos').offset().top
		}, 500);

	});

/*-------------------------------------------- SLICK SLIDER*/

    $('.autoplay').slick({
	  	slidesToShow: 5,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	autoplay: true,
	  	autoplaySpeed: 2000,
	  	responsive: [
	  		{
	      		breakpoint: 1024,
	      		settings: {
	        		arrows: false,
	        		slidesToShow: 4
      			}
	    	},
	    	{
	      		breakpoint: 768,
	      		settings: {
	        		arrows: false,
	        		slidesToShow: 3
	      		}
	    	},
	    	{
	      		breakpoint: 575,
	      		settings: {
	        		arrows: false,
	        		slidesToShow: 2
	      		}
	    	},
	    	{
	      		breakpoint: 414,
	      		settings: {
	        		arrows: false,
	        		slidesToShow: 1
	      		}
	    	}
	  	]
	});

});


/*-------------------------------------------- ANCLAS ANIMADAS*/

$('nav a').click(function(e){	

e.preventDefault();
var strAncla=$(this).attr('href');

	$('body,html').stop(true,true).animate({
		scrollTop: $(strAncla).offset().top
	},1000);
	
})

$(function(){
   
	$('#item-01').click(function(e){
 		$('#oculto-01').addClass('active');
   	});

});


/*-------------------------------------------- TRABAJOS*/

$(document).on('keydown', comprobarTecla);
$(document).ready(function(){

	$('.abrirMusica').on('click', mostrarMusica);
	$('.cerrarMusica').on('click', ocultarMusica);


	//Acid Dembow .02

	$('#aciddembow02').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('PRÓXIMAMENTE');
		$('.modificar h4').html('Kid Cala, 2018');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','#');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/acid-dembow-2@0,5x.jpg 320w, ./imagenes/trabajos/acid-dembow-2@0,75x.jpg 480w, ./imagenes/trabajos/acid-dembow-2.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/acid-dembow-2.jpg');
		$('.modificar #imagen').attr('alt','Acid Dembow .02 - Kid Cala');

	});

	//Mueve

	$('#mueve').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Mueve');
		$('.modificar h4').html('Juanito La Para (Prod. Kid Cala), Ago. 2018');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://kidcala.bandcamp.com/track/mueve-juanito-la-para-prod-kid-cala');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/mueve@0,5x.jpg 320w, ./imagenes/trabajos/mueve@0,75x.jpg 480w, ./imagenes/trabajos/mueve.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/mueve.jpg');
		$('.modificar #imagen').attr('alt','Mueve - Kid Cala');

	});


	//Yo soy La Para

	$('#laPara').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Yo soy La Para');
		$('.modificar h4').html('Juanito La Para (Prod. Kid Cala), Jul. 2018');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://kidcala.bandcamp.com/track/yo-soy-la-para-juanito-la-para-prod-kid-cala');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/yo-soy-la-para@0,5x.jpg 320w, ./imagenes/trabajos/yo-soy-la-para@0,75x.jpg 480w, ./imagenes/trabajos/yo-soy-la-para.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/yo-soy-la-para.jpg');
		$('.modificar #imagen').attr('alt','Yo soy la Para - Juanito La Para - Kid Cala');

	});


	//Yo soy La Para

	$('#bitchMode').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Bitch Mode');
		$('.modificar h4').html('La Zowi (Kid Cala RMX), Jun. 2018');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://kidcala.bandcamp.com/track/la-zowi-bitch-mode-kid-cala-remix');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/bitch-mode@0,5x.jpg 320w, ./imagenes/trabajos/bitch-mode@0,75x.jpg 480w, ./imagenes/trabajos/bitch-mode.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/bitch-mode.jpg');
		$('.modificar #imagen').attr('alt','Bitch Mode - La Zowi - Kid Cala');

	});


	//PA´PONERTE

	$('#paPonerte').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('PA´PONERTE');
		$('.modificar h4').html('Kid Cala, May. 2018');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://kidcala.bandcamp.com/album/pa-ponerte-kid-cala');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/pa-ponerte@0,5x.jpg 320w, ./imagenes/trabajos/pa-ponerte@0,75x.jpg 480w, ./imagenes/trabajos/pa-ponerte.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/pa-ponerte.jpg');
		$('.modificar #imagen').attr('alt','PA´PONERTE - Kid Cala');

	});


	//Acid Dembow

	$('#acidDembow').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Acid Dembow');
		$('.modificar h4').html('Kid Cala, Mar. 2018');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://kidcala.bandcamp.com/album/acid-dembow');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/acid-dembow@0,5x.jpg 320w, ./imagenes/trabajos/acid-dembow@0,75x.jpg 480w, ./imagenes/trabajos/acid-dembow.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/acid-dembow.jpg');
		$('.modificar #imagen').attr('alt','Acid Dembow - Kid Cala');

	});


	//Colocado

	$('#colocado').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Colocado');
		$('.modificar h4').html('Kid Cala - Breaking Bass, Ene. 2018');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://breakingbassrecords.bandcamp.com/album/colocado-ep');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/colocado@0,5x.jpg 320w, ./imagenes/trabajos/colocado@0,75x.jpg 480w, ./imagenes/trabajos/colocado.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/colocado.jpg');
		$('.modificar #imagen').attr('alt','Colocado - Breaking Bass - Kid Cala');

	});


	//Tight Up

	$('#tightUp').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Tight Up');
		$('.modificar h4').html('Nadia Rose (Kid Cala RMX), Feb. 2018');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://kidcala.bandcamp.com/track/nadia-rose-tight-up-kid-cala-remix');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/tight-up@0,5x.jpg 320w, ./imagenes/trabajos/tight-up@0,75x.jpg 480w, ./imagenes/trabajos/tight-up.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/tight-up.jpg');
		$('.modificar #imagen').attr('alt','Tight Up - Nadia Rose - Kid Cala');

	});


	//Dark

	$('#dark').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Dark');
		$('.modificar h4').html('Kid Cala - LaSelva Radio, Feb. 2018');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://kidcala.bandcamp.com/track/dark-kid-cala');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/dark@0,5x.jpg 320w, ./imagenes/trabajos/dark@0,75x.jpg 480w, ./imagenes/trabajos/dark.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/dark.jpg');
		$('.modificar #imagen').attr('alt','Dark - LaSelva Radio - Kid Cala');

	});


	//Copa Cabana

	$('#copaCabana').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Copacabana');
		$('.modificar h4').html('Kid Cala - Caballito Netlabel, Jun. 2017');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://soundcloud.com/caballito-netlabel/kid-cala-copacabana');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/copacabana@0,5x.jpg 320w, ./imagenes/trabajos/copacabana@0,75x.jpg 480w, ./imagenes/trabajos/copacabana.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/copacabana.jpg');
		$('.modificar #imagen').attr('alt','Copacabana - Caballito Netlabel - Kid Cala');

	});


	//Techbow .02

	$('#techbow02').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Techbow .02');
		$('.modificar h4').html('Kid Cala, Sep. 2017');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://kidcala.bandcamp.com/album/techbow-2-2');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/techbow-02@0,5x.jpg 320w, ./imagenes/trabajos/techbow-02@0,75x.jpg 480w, ./imagenes/trabajos/techbow-02.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/techbow-02.jpg');
		$('.modificar #imagen').attr('alt','Techbow .02 - Kid Cala');

	});


	//Krippy Krush

	$('#krippyKrush').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Krippy Krush');
		$('.modificar h4').html('Bad Bunny & Farruko (Kid Cala RMX), Sep. 2017');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://kidcala.bandcamp.com/track/krippy-krush-bad-bunny-farruko-kid-cala-remix');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/krippy-krush@0,5x.jpg 320w, ./imagenes/trabajos/krippy-krush@0,75x.jpg 480w, ./imagenes/trabajos/krippy-krush.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/krippy-krush.jpg');
		$('.modificar #imagen').attr('alt','Krippy Krush - Bad Bunny & Farruko - Kid Cala');

	});


	//Blue Magic

	$('#blueMagic').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Blue Magic');
		$('.modificar h4').html('Kid Cala & Friends, May. 2017');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://kidcala.bandcamp.com/album/blue-magic-kid-cala-friends');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/blue-magic@0,5x.jpg 320w, ./imagenes/trabajos/blue-magic@0,75x.jpg 480w, ./imagenes/trabajos/blue-magic.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/blue-magic.jpg');
		$('.modificar #imagen').attr('alt','Blue Magic - Kid Cala & Friends');

	});


	//Black Beatles

	$('#blackBeatles').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Black Beatles');
		$('.modificar h4').html('Rae Sremmurd (Kid Cala RMX), Nov. 2016');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://kidcala.bandcamp.com/track/black-beatles-rae-sremmurd-kid-cala-remix');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/black-beatles@0,5x.jpg 320w, ./imagenes/trabajos/black-beatles@0,75x.jpg 480w, ./imagenes/trabajos/black-beatles.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/black-beatles.jpg');
		$('.modificar #imagen').attr('alt','Black Beatles - Rae Sremmurd - Kid Cala');

	});


	//Techbow .01

	$('#techbow01').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Techbow .01');
		$('.modificar h4').html('Kid Cala, Mar. 2016');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://kidcala.bandcamp.com/album/techbow');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/techbow-01@0,5x.jpg 320w, ./imagenes/trabajos/techbow-01@0,75x.jpg 480w, ./imagenes/trabajos/techbow-01.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/techbow-01.jpg');
		$('.modificar #imagen').attr('alt','Techbow .01 - Kid Cala');

	});


	//Damnbow

	$('#dambow').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Damnbow');
		$('.modificar h4').html('Kid cala, Mar. 2016');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://kidcala.bandcamp.com/album/damnbow-2');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/damnbow@0,5x.jpg 320w, ./imagenes/trabajos/damnbow@0,75x.jpg 480w, ./imagenes/trabajos/damnbow.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/damnbow.jpg');
		$('.modificar #imagen').attr('alt','Damnbow - Kid Cala');

	});


	//In & Out

	$('#inout').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('In & Out');
		$('.modificar h4').html('Kid cala, Mar. 2016');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://kidcala.bandcamp.com/album/in-out');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/in-out@0,5x.jpg 320w, ./imagenes/trabajos/in-out@0,75x.jpg 480w, ./imagenes/trabajos/in-out.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/in-out.jpg');
		$('.modificar #imagen').attr('alt','In & Out - Kid Cala');

	});


	//Rumbahton .02

	$('#rumbahton02').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Rumbahton .02');
		$('.modificar h4').html('Kid cala, Mar. 2016');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://kidcala.bandcamp.com/album/rumbahton-2');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/rumbahton-02@0,5x.jpg 320w, ./imagenes/trabajos/rumbahton-02@0,75x.jpg 480w, ./imagenes/trabajos/rumbahton-02.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/rumbahton-02.jpg');
		$('.modificar #imagen').attr('alt','Rumbahton .02 - Kid Cala');

	});


	//Rumbahton .01

	$('#rumbahton01').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Rumbahton .01');
		$('.modificar h4').html('Kid cala, Mar. 2016');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://soundcloud.com/kidcala/sets/rumbahton');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/rumbahton-01@0,5x.jpg 320w, ./imagenes/trabajos/rumbahton-01@0,75x.jpg 480w, ./imagenes/trabajos/rumbahton-01.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/rumbahton-01.jpg');
		$('.modificar #imagen').attr('alt','Rumbahton .01 - Kid Cala');

	});


	//Duro, suave y lento

	$('#duroSuaveLento').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Duro, suave y lento');
		$('.modificar h4').html('Kid Cala, Mar. 2014');
		$('.modificar #btnStreamin').html('Streaming');
		$('.modificar #btnStreamin').attr('href','https://soundcloud.com/kidcala/sets/duro-suave-lento-ep');
		$('.modificar #imagen').attr('srcset','./imagenes/trabajos/duro-suave-lento@0,5x.jpg 320w, ./imagenes/trabajos/duro-suave-lento@0,75x.jpg 480w, ./imagenes/trabajos/duro-suave-lento.jpg 800w');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/duro-suave-lento.jpg');
		$('.modificar #imagen').attr('alt','Duro, suave y lento - Kid Cala');

	});

	/*
	//Música Pa´Bellakial

	$('#musicaPaBellakial').click(function(e){

		e.preventDefault();

		$('.modificar').css('display','flex');
		$('.modificar h2').html('Musica Pa´ Bellakial');
		$('.modificar h4').html('Kid Cala - Caballito Netlabel, Nov. 2012');
		$('.modificar #btnStreamin').html('Descargar');
		$('.modificar #btnStreamin').attr('href','http://www.mediafire.com/file/b8ycs014axiab1h/CBLLT040+KID+CALA+-+Musica+pa%C2%B4+bellakial.zip');
		$('.modificar #imagen').attr('src','./imagenes/trabajos/musica-pa-bellakial.gif');
		$('.modificar #imagen').attr('alt','Música Pa´ Bellakial - Caballito Netlabel - Kid Cala');

	});
	*/    
	

});

function mostrarMusica() {

	$('.modificar').fadeIn('100');

}

function ocultarMusica() {

	$('.modificar').fadeOut('100');
	$('.modificar #imagen').attr('srcset','./imagenes/trabajos/cover@0,5x.jpg 320w, ./imagenes/trabajos/cover@0,75x.jpg 480w, ./imagenes/trabajos/cover.jpg 800w');
	$('.modificar #imagen').attr('src','./imagenes/trabajos/cover.jpg');

}

function comprobarTecla(e) {

	if (e.keyCode == 27) {

		ocultarMusica();
	}

}

/*-------------------------------------------- FORMULARIO CONTACTO*/

$('#formulario').submit(function(event){

	event.preventDefault();
	enviar();

});

function enviar(){

	let nombre = document.getElementById ("nombre").value;
	let email = document.getElementById ("email").value;
	let asunto = document.getElementById ("asunto").value;
	let politicaDatos = document.getElementById("checkbox").checked;

	var datos = $('#formulario').serialize(); 


	if( nombre === null || email === null || asunto === null ) {

		phperror( "Todos los campos son obligatorios" );
		return false;

	}

	else if( /^\s+$/.test(nombre) ||  nombre.length < 2 || /[0-9]/.test(nombre) ){

		phperror("El nombre no es correcto, por favor, introdúcelo de nuevo.");
		return false;

	}

	else if( email.length === 0 || email.indexOf("@") < 1 || email.indexOf(".") < 1 ){

		phperror("El email no es correcto, por favor, introdúcelo de nuevo");
		return false;

	}

	else if ( !politicaDatos ) {

      	phperror("Debes aceptar la Política de Privacidad");
      	return false;

    } else {

		$.ajax({
	      	type: 'post',
	      	url: './php/formulario.php',
	      	data: datos,
	      	success: function(texto) {

	         	if (texto == 'exito'){

		            correcto();

	         	} else {

		            phperror(texto);

	         	}
	      	}
	   	})
	}

}

function correcto(){

	$('#mensajeExito').removeClass('none');
	$('#mensajeError').addClass('none');

	setTimeout( function(){
            $('#mensajeExito').addClass('none');
      },5000);
}

function phperror(texto){

	$('#mensajeError').removeClass('none');
	$('#mensajeError').html(texto);

	setTimeout( function(){
            $('#mensajeError').addClass('none');
      },5000);
}


	