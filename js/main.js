const burger = document.querySelector('.burger');
let menu = document.querySelector('.burger_menu');

burger.addEventListener('click', function() {
	menu.style.transition = 'opacity 0.5s';
	document.body.classList.toggle('overflowBody');
	menu.classList.toggle('burger_menu_open');
});
