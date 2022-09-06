// function hideArrow() {
//     downArrow.style.display = 'none';
// }

// downArrow.addEventListener('click', hideArrow)

// document.onscroll = function () {
//     if (document.body.scrollTop == 5) {
//         downArrow.style.display = "block";
//     }

// }

let menuVisible = false;
const downArrow = document.querySelector('#downArrow');
document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const hamButton = document.querySelector('.navbar-toggler');
	const downArrow = document.querySelector('#downArrow');
	const mobileNav = document.querySelector('#navbarNavAltMarkup');
	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg');
			// downArrow.style.display = 'none';
		} else {
			if (!menuVisible) 
			{
				nav.classList.remove('shadow-bg');
			}
			// downArrow.style.display = 'block';
		}
	}

	function removeArrow() {
		if (window.scrollY >= 200) {
			downArrow.style.display = 'none';
		} else {
			downArrow.style.display = 'block';
		}
	}

	function addShadowClick() {
		if (!menuVisible) {
			nav.classList.add('shadow-bg');
			menuVisible = true;
		} else {
			if (window.scrollY < 100) {
				nav.classList.remove('shadow-bg');
			}
			menuVisible = false;
		}
	}

	function removeShow() {
		mobileNav.classList.remove('show');
	}

	window.addEventListener('scroll', addShadow);
	window.addEventListener('scroll', removeArrow);
	hamButton.addEventListener('click', addShadowClick);
	mobileNav.addEventListener('click', removeShow);
});
