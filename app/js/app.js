// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	testimonialsSlider ()

		mobMenuToggle ()
		videoPopup () 
})

// мобильное меню
function mobMenuToggle () {
	let btn = document.querySelector('.header__navigation-btn-menu')
	let menu = document.querySelector(btn.dataset.toggle)
		btn.addEventListener('click', function (e) {
			btn.classList.toggle('active')
			menu.classList.toggle('active')
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