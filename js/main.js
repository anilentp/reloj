$(document).ready(function(){
	var meses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]; 
	var dias= ["Lunes","Martes","Miercoles","Jueves","Viernes","Sábado", "Domingo"]
	var paises = ["Chicago", "Sao Paulo", "Santiago", "Mexico D.F", "Caracas", "Brasilia", "Quito", "Guayaquil", "Santa Marta", "Bogota"];	
	var fechaActual = new Date();
	
	fechaActual.setDate(fechaActual.getDate());
	// Output the day, date, month and year   
	$('#fecha').html(dias[fechaActual.getDay()] + " " + fechaActual.getDate() + ' ' + meses[fechaActual.getMonth()] + ' ' + fechaActual.getFullYear());

	setInterval( function() {
		// Create a newDate() object and extract the seconds of the current time on the visitor's
		var segundos = new Date().getSeconds();
		// Add a leading zero to seconds value
		$("#segundos").html(( segundos < 10 ? "0" : "" ) + segundos);
		},1000);
		
	setInterval( function() {
		// Create a newDate() object and extract the minutes of the current time on the visitor's
		var minutos = new Date().getMinutes();
		// Add a leading zero to the minutes value
		$("#minutos").html(( minutos < 10 ? "0" : "" ) + minutos);
	    },1000);
		
	setInterval( function() {
		// Create a newDate() object and extract the hours of the current time on the visitor's
		var hora = new Date().getHours();
		// Add a leading zero to the hours value
		$("#hora").html(( hora < 10 ? "0" : "" ) + hora);
	    }, 1000);	
	/*
	function chicago () {
		$("#chicago").click(function() {
			$(this)."#hora"-5;
		});
	};
	*/
	
		$("#paises").click(function(){
        $("ul").hide();
	    });
	    $("#paises").click(function(){
	        $("li").show();
	    });
	

});


