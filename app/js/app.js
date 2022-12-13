// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	testimonialsSlider ()
	mobMenuToggle ()
	videoPopup () 
	stickyHeader ()
	toggleTutorialContent ()
})

// мобильное меню
function mobMenuToggle () {
	let btn = document.querySelector('.header__navigation-btn-menu')
	let menu = document.querySelector(btn.dataset.toggle)
	let header = document.querySelector('.header')
		btn.addEventListener('click', function (e) {
			btn.classList.toggle('active')
			menu.classList.toggle('active')
			header.classList.toggle('active')
		})
}
function testimonialsSlider () {
	var swiper = new Swiper(".testimonials__slider", {
		slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
		  clickable: true,
        },
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		  },
		  breakpoints: {
			320: {
			  slidesPerView: 1,
			  spaceBetween: 10,
			},
			768: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			},
			992: {
			  slidesPerView: 3,
			  spaceBetween: 30,
			},
		  }
      });
}

function videoPopup () {
	let btn = document.querySelector('.js-video-btn')
	if (!btn) {
		return
	}
	let popup = document.querySelector(btn.dataset.popup)
	btn.addEventListener('click', function (e) {
		popup.classList.add('active')
	})
	btn.addEventListener('click', function (e) {
		let videoId = e.currentTarget.dataset.video
		let popupInner = document.querySelector(e.currentTarget.dataset.inner)
		let frame = document.createElement('iframe')
		frame.classList.add('features-popup__frame')
        frame.src = "https://www.youtube.com/embed/"+videoId
        frame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
        frame.setAttribute('allowfullscreen', true)
		popupInner.appendChild(frame)
	}, {once: true})

	popup.addEventListener('click', function (e) {
		if (e.target === e.currentTarget || e.target.classList.contains('features-popup__close')) {
			popup.classList.remove('active')
		}
	})
}

function stickyHeader () {
	let header = document.querySelector('.header')
	document.addEventListener('scroll', function () {
		if (document.body.getBoundingClientRect().top < 0) {
			header.classList.add('sticky')
		} else {
			header.classList.remove('sticky')
		}
		
	})
}


function toggleTutorialContent () {
	let btns = document.querySelectorAll('.tutorial__navigation-btn')
	let activeContent
	let activeBtn
	for(let i = 0; i < btns.length; i++) {
		if (btns[i].classList.contains('active')) {
			activeContent = document.querySelector(btns[i].dataset.target)
			activeContent.classList.add('active')
			activeBtn = btns[i]

		} else {
			activeContent.classList.remove('remove')
		}
		btns[i].addEventListener('click', function (e) {
			activeContent.classList.remove('active')
			activeBtn.classList.remove('active')
			let content = document.querySelector(btns[i].dataset.target)
			content.classList.add('active')
			activeContent = content
			e.currentTarget.classList.add('active')
			activeBtn = e.currentTarget
		})
	}
}