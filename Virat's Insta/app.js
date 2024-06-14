$('#follow').click(function() {
	$('.slide').slideToggle(500);
})
$('#cricketbtn').click(function() {
	$('#content1').fadeIn();
	$('#content3').hide();
	$('#content4').hide();
	$('#content2').hide();
})
$('#familybtn').click(function() {
	$('#content1').hide();
	$('#content3').hide();
	$('#content4').hide();
	$('#content2').fadeIn();
})
$('#teambtn').click(function() {
	$('#content1').hide();
	$('#content3').fadeIn();
	$('#content4').hide();
	$('#content2').hide();
})
$('#funnybtn').click(function() {
	$('#content1').hide();
	$('#content3').hide();
	$('#content4').fadeIn();
	$('#content2').hide();
})