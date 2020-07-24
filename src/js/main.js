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

//birthday dropdown

let dayDrop = document.querySelector('#day');

let d = 1;
while (d <= 31) {
	let days = document.createElement('option');
	days.setAttribute('value', d);
	days.setAttribute('placeholder', d);
	// days.setAttribute('required', '');
	// days.setAttribute('aria-required', 'true');
	days.setAttribute('aria-placeholder', d);
	dayDrop.appendChild(days);
	days.innerText = d;
	d++;
}

let yearDrop = document.querySelector('#year');

let y = 2002;
while (y >= 1920) {
	let years = document.createElement('option');
	years.setAttribute('value', y);
	years.setAttribute('placeholder', y);
	// years.setAttribute('required', '');
	// years.setAttribute('aria-required', 'true');
	years.setAttribute('aria-placeholder', y);
	yearDrop.appendChild(years);
	years.innerText = y;
	y--;
}

let months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

let monthDrop = document.querySelector('#month');

for (let m in months) {
	let month = document.createElement('option');
	month.setAttribute('value', months[m]);
	month.setAttribute('placeholder', months[m]);
	month.setAttribute('aria-placeholder', months[m]);
	// month.setAttribute('required', '');
	// month.setAttribute('aria-required', 'true');
	monthDrop.appendChild(month);
	month.innerText = months[m];
}
