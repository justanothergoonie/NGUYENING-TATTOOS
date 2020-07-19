console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

$(window).load(function () {
	$('.loader').fadeOut('slow');
});

//Are you 18? if not why are you here

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

// birthday dropdown
