//loading image

$(window).load(function () {
	$('.loader').fadeOut('slow');
});

//Are you 18? if not why are you here?

let birthday = document.querySelector('#birthday-please');
const radioBtns = document.querySelectorAll('input[type="radio"]');
for (const button of radioBtns) {
	button.addEventListener('click', function () {
		if (this.value === 'no') {
			birthday.style.display = 'none';
		} else {
			birthday.style.display = '';
		}
	});
}
