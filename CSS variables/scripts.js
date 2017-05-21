

$(document).ready(()=>{
	const inputs = $('.controls input');
	var barChange = false;

	function handleUpdate() {
		const suffix = this.dataset.sizing || '';
		$(document.documentElement).css(`--${this.name}`, this.value + suffix);
	}

	inputs.each(()=>{
		inputs.change(handleUpdate);
		barChange = true;
	});

	if (barChange){	
		inputs.each(()=>{
			inputs.mousemove(handleUpdate);
		});
	}
	
})
