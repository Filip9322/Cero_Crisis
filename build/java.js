$(document).on('ready', function() {

	var galeriaThumbs = document.getElementsByClassName('Galeria-thumbs')[0];
	var maxValue = galeriaThumbs.scrollWidth - galeriaThumbs.clientWidth;

	function mapRange(from, to, s) {
		return to[0] + (s - from[0]) * (to[1] - to[0]) / (from[1] - from[0]);
	}

	function moveSlider(e) {

		var pos = $(e.currentTarget).offset()
			posX = e.pageX - pos.left;

		$('.Galeria-thumbs').scrollLeft(Math.round(mapRange([0,700], [0,maxValue], posX))+2);

		if(posX >= 0 && posX <= $(e.currentTarget).outerWidth()) {
			$('.Thumbs-slider > .Slider-progreso').css('width', posX+'px');
			$('.Thumbs-slider > .Slider-indicador').css('left', posX+'px');
		}
	}

	$('.Thumbs-slider').on('mouseover', function(e) {

		moveSlider(e);

		$(this).on('mousemove', function(e) {
			moveSlider(e);
		});

	}).on('mouseup', function() {
		$(this).off('mousemove');
	});

});

var index = 1;
var textos = {
	titulos: [
		'Arthas Menethil',
		'Elite Tauren Chieftain',
		'Illidan Stormrage',
		'Jaina Proud Moore',
		'Murky',
		'Thrall',
		'November Annabella "Nova"',
		'Zeratul',
		'Nazeebo',
		'The Lost Vikings',
],
	descripciones: [
		'<a href="http://es.worldofwarcraft.wikia.com/wiki/Arthas_Menethil" target="_blank">Web page Arthas Menethil</a>',
		'<a href="http://wowwiki.wikia.com/wiki/Elite_Tauren_Chieftain" target="_blank">Web page ETC</a>',
		'<a href="http://wowwiki.wikia.com/wiki/Illidan_Stormrage" target="_blank">Web page Illidan</a>',
		'<a href="http://wowwiki.wikia.com/wiki/Jaina_Proudmoore" target="_blank">Web page Jaina</a>',
		'<a href="http://us.battle.net/heroes/en/heroes/murky" target="_blank">Web page Murky</a>',
		'<a href="http://wowwiki.wikia.com/wiki/Thrall" target="_blank">Web page Thrall</a>',
		'<a href="http://es.starcraft.wikia.com/wiki/Nova_Terra" target="_blank">Web page Nova</a>',
		'<a href="https://es.wikipedia.org/wiki/Zeratul" target="_blank">Web page Zeratul</a>',
		'<a href="http://us.battle.net/d3/en/class/witch-doctor" target="_blank">Web page Nazeebo</a>',
		'<a href="https://en.wikipedia.org/wiki/The_Lost_Vikings" target="_blank">Web page Lost The Lost Vikings</a>'
]
};

document.getElementsByClassName('Titulo-imagen')[0].innerHTML = textos.titulos[index-1];
document.getElementsByClassName('Descripcion-imagen')[0].innerHTML = textos.descripciones[index-1];


function cambiarImagen(element) {

	var objTitulo = document.getElementsByClassName('Titulo-imagen')[0];
	var objDescripcion = document.getElementsByClassName('Descripcion-imagen')[0];

    var puntos = document.getElementsByClassName('dots');
    for (var i = 0; i < puntos.length; ++i) {
    var item = puntos[i];
    item.src = 'img/empty_dot.png';
}

    document.getElementsByClassName('dots')[parseInt(element.getAttribute('data'))-1].src= "img/Gray_dot.png";


	if(element.getAttribute('data') == "adelante") {
		if(index <= 10) {
			if(index == 10) index=0;
			document.getElementsByClassName('Galeria-preview')[0].firstChild.src = "img/"+(index+1)+".jpg";
		}
		index+=1;
	} else if(element.getAttribute('data') == "atras") {
		if(index >= 1) {
			if(index==1) index=11;
			document.getElementsByClassName('Galeria-preview')[0].firstChild.src = "img/"+(index-1)+".jpg";
		}
		index-=1;
	} else {
		document.getElementsByClassName('Galeria-preview')[0].firstChild.src = "img/"+element.getAttribute('data')+".jpg";
		index = parseInt(element.getAttribute('data'));
	}
	//Cambio de titulos y descripciones
	objTitulo.innerHTML = textos.titulos[index-1];
	objDescripcion.innerHTML = textos.descripciones[index-1];
}
