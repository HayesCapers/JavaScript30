
$(document).ready(()=>{
	const panels = $('.panel');

	$('.panel').click(function(){
		console.log($(this))
		$(this).toggleClass('open');
	});

	// panels.forEach(panel => panel.addEventListener('click', toggleOpen));

	function toggleOpen(){
		console.log('open')
		this.toggleClass('open');
	}
});