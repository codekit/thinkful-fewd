$(document).ready(function (){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	}).mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	}).mousedown(function() {
		playHadouken();
		// play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
		{'left' : '700px'}, 500, function (){
		$(this).hide();
		$(this).css('left', '490px');
		});
	// animate jQuery object so its left value is 300px for 500 milliseconds
	// finish() completes all currently running animations on element
	}).mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});

$(document).keydown(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-cool').show();
    }
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });

function playHadouken() {
$('#hadouken-sound')[0].volume = 0.5;
$('#hadouken-sound')[0].load();
$('#hadouken-sound')[0].play();
}