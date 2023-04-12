'use strict';

// Menu
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navBar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			navLinks.forEach((links) => {
				links.classList.remove('active');
				document
					.querySelector('header nav a[href*=' + id + ']')
					.classList.add('active');
			});
		}
	});

	// Sticky
	const header = document.querySelector('.header');

	header.classList.toggle('sticky', window.scrollY > 100);

	menuIcon.classList.remove('bx-x');
	navBar.classList.remove('active');
};

/// Dark Mode

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
	darkModeIcon.classList.toggle('bx-sun');
	document.body.classList.toggle('dark-mode');
};

ScrollReveal({
	reset: true,
	distance: '80px',
	duration: 2000,
	delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'left' });

// Swiper Navigation
var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	grabCursor: true,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// const btn = document.getElementById('btn');
// btn.addEventListener('click', function (e) {
// 	e.preventDefault();
// 	console.log('Hi');
// 	const name = document.getElementById('name').value;
// 	const email = document.getElementById('email').value;
// 	const phoneNum = document.getElementById('phone-number').value;
// 	const subject = document.getElementById('subject').value;
// 	const message = document.getElementById('message').value;
// 	const body = `Name: ${name}  <br/> Email: ${email} <br/> Phone Number: ${phoneNum} <br/> Subject: ${subject} <br/> Message: ${message}`;

// 	Email.send({
// 		SecureToken: '',
// 		To: 'testemail',
// 		From: 'testemail',
// 		Subject: 'Contact Message',
// 		Body: body,
// 	}).then((message) => alert(message));
// });
