$(document).on('ready', function() {

	}

function esconder_footer(element){
	document.getElementsByClassName("contenedor__footer")['data'].visibility = hidden;
}

function cambiarImagen(element) {

    var puntos = document.getElementsByClassName('dots');
    for (var i = 0; i < puntos.length; ++i) {
	    var item = puntos[i];
	    item.src = 'images/empty_dot.png';
		}

    document.getElementsByClassName('dots')[parseInt(element.getAttribute('data'))-1].src= "images/Gray_dot.png";


	if(element.getAttribute('data') == "adelante") {
		if(index <= 10) {
			if(index == 10) index=0;
			document.getElementsByClassName('portada')[0].firstChild.url = "images/"+(index+1)+".jpg";
		}
		index+=1;
	} else if(element.getAttribute('data') == "atras") {
		if(index >= 1) {
			if(index==1) index=11;
			document.getElementsByClassName('portada')[0].firstChild.url = "images/"+(index-1)+".jpg";
		}
		index-=1;
	} else {
		document.getElementsByClassName('portada')[0].firstChild.url = "images/"+element.getAttribute('data')+".jpg";
		index = parseInt(element.getAttribute('data'));
	}
	//Cambio de titulos y descripciones
	objTitulo.innerHTML = textos.titulos[index-1];
	objDescripcion.innerHTML = textos.descripciones[index-1];
}
