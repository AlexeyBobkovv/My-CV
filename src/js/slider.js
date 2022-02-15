const nextBtn = document.querySelector('.slider__next-btn')
const prevtBtn = document.querySelector('.slider__prev-btn')
const dotsEl = document.querySelectorAll('.slider-dots__item')

/* Индекс слайда по умолчанию */
let slideIndex = 1
showSlides(slideIndex)

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
nextBtn.addEventListener('click', () => {
  showSlides((slideIndex += 1))
})

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
prevtBtn.addEventListener('click', () => {
  showSlides((slideIndex -= 1))
})

/* Устанавливает текущий слайд */
dotsEl.forEach((el) =>
  el.addEventListener('click', function (event) {
    showSlides((slideIndex = event.target.dataset.slidenum))
  })
)

/* Основная функция слайдера */
function showSlides(n) {
  let i
  let slides = document.getElementsByClassName('slider__item')
  let dots = document.getElementsByClassName('slider-dots__item')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'flex'
  dots[slideIndex - 1].className += ' active'
}
