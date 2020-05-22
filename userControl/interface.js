// JavaScript Document
$(document).ready(function () {

	var myFontSize;

	$("#plustext").click(function () {
		myFontSize = $('#container').css('font-size');
		myFontSize = parseFloat(myFontSize, 2);
		myFontSize = myFontSize * 1.05;
		$('#container').css('font-size', myFontSize);
	});

	$("#minustext").click(function () {
		myFontSize = $('#container').css('font-size');
		myFontSize = parseFloat(myFontSize, 2);
		myFontSize = myFontSize / 1.05;
		$('#container').css('font-size', myFontSize);
	});


	$("#dark").click(function () {
		$('body').css('background-color', '#4D4F59');
		$('#container').css('background-color', '#111');
		$('#container').css('box-shadow', '5px 5px 8px #C3C2F2');
		$('#container header').css('background-color', '#333');
		$('#container main').css('background-color', '#444');
		$('#container p').css('color', '#fff');
		$('#container h1').css('color', '#54BFAC');
		$('#container h2').css('color', '#C3C2F2');
	});


	$("#light").click(function () {
		$('body').css('background-color', '#CEDAF2');
		$('#container').css('background-color', '#FFF');
		$('#container header').css('background-color', '#9172A6');
		$('#container main').css('background-color', '#fff');
		$('#container p').css('color', '#000');
		$('#container h1').css('color', 'whitesmoke');
		$('#container h2').css('color', '#85C8F2');
	});

	$("#serif").click(function () {
		$("body").css("font-family", " 'Times new Roman', serif");
	});

	$("#sans_serif").click(function () {
		$("body").css("font-family", "Arial, serif");
	});

	$("#monospace").click(function () {
		$("body").css("font-family", "Courier, serif");
	});

}); //end document ready