// Responsive Menu
const navLinks = document.querySelector('.nav-links');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
	navLinks.classList.toggle('active');
});

// Sticky Navbar
const nav = document.querySelector('nav');
const darkLogo = document.querySelector('.logo img');

window.addEventListener('scroll', ()=> {
	if(window.pageYOffset > 150) {
		nav.classList.add('sticky');
		darkLogo.setAttribute('src', 'https://kurla.netlify.app/img/logo-dark.svg')
	} else {
		nav.classList.remove('sticky');
		darkLogo.setAttribute('src', 'https://kurla.netlify.app/img/logo-light.svg')
	}
})



