$(document).on('ready', function() {
	
});

	function cambiarImagen(element) {

		var puntos = document.getElementsByClassName('dots');
		for (var i = 0; i < puntos.length; ++i) {
			var item = puntos[i];
			item.src = 'images/empty_dot.png';
		}

		document.getElementsByClassName('dots')[parseInt(element.getAttribute('data'))-1].src= "images/Gray_dot.png";

		index = parseInt(element.getAttribute('data'));

		document.body.style.backgroundImage= "url('../images/"+element.getAttribute('data')+".jpg')";
}
