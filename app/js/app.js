// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	testimonialsSlider ()
	samplePlansSlider ()
	mobMenuToggle ()
	videoPopup () 
	stickyHeader ()
	toggleContent ('.tutorial__navigation-btn')
	toggleContent ('.how-solution__navigation-btn')
	accordion ('.accordion-item-js', {closeItem: false})
	accordion ('.report-accordion-item-js', {closeItem: true, closeTarget: 'sample-report__item-title'})
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
			280: {
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
function samplePlansSlider () {
	var swiper = new Swiper(".sample-plans__slider", {
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
			280: {
			  slidesPerView: 1,
			  spaceBetween: 10,
			},
			768: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			},
			992: {
			  slidesPerView: 3,
			  spaceBetween: 0,
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

	if (document.body.getBoundingClientRect().top < 0) {
		header.classList.add('sticky')
	} else {
		header.classList.remove('sticky')
	}
	
	document.addEventListener('scroll', function () {
		if (document.body.getBoundingClientRect().top < 0) {
			header.classList.add('sticky')
		} else {
			header.classList.remove('sticky')
		}
		
	})
}


function toggleContent (selectorBtn) {
	let btns = document.querySelectorAll(selectorBtn)
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


function accordion (accordionItemSelector, mode) {
	let accordionElements = document.querySelectorAll(accordionItemSelector)
	let openedElement
	for(let i = 0; i < accordionElements.length; i++) {
		
		if (accordionElements[i].classList.contains('open')) {
			openedElement = accordionElements[i]
		}
		accordionElements[i].addEventListener('click', function (e) {
			if (mode.closeItem) {
				if (openedElement && openedElement !== e.currentTarget) {

					openedElement.classList.remove('open')
				}
				openedElement = e.currentTarget
				if (openedElement.classList.contains('open') && e.target.classList.contains(mode.closeTarget)) {
					openedElement.classList.remove('open')
				} else {
					openedElement.classList.add('open')
				}

			} else {
				if (openedElement) {
					openedElement.classList.remove('open')
				}
				openedElement = e.currentTarget
				openedElement.classList.add('open')
			}

		})
	}
}	