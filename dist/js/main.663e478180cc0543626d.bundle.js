;(self.webpackChunkwebpack_boilerplate = self.webpackChunkwebpack_boilerplate || []).push([
  [179],
  {
    579: (e, t, c) => {
      'use strict'
      c(396)
      var n = c(425),
        s = document.querySelector('.greet__avatar'),
        a = document.createElement('img')
      ;(a.src = n),
        s.append(a),
        document.createElement('div').classList.add('image'),
        (document.createElement('img').src = '/assets/example.png')
    },
    396: () => {
      var e = document.querySelector('.slider__next-btn'),
        t = document.querySelector('.slider__prev-btn'),
        c = document.querySelectorAll('.slider-dots__item'),
        n = 1
      function s(e) {
        var t,
          c = document.getElementsByClassName('slider__item'),
          s = document.getElementsByClassName('slider-dots__item')
        for (e > c.length && (n = 1), e < 1 && (n = c.length), t = 0; t < c.length; t++)
          c[t].style.display = 'none'
        for (t = 0; t < s.length; t++) s[t].className = s[t].className.replace(' active', '')
        ;(c[n - 1].style.display = 'flex'), (s[n - 1].className += ' active')
      }
      s(n),
        e.addEventListener('click', function () {
          s((n += 1))
        }),
        t.addEventListener('click', function () {
          s((n -= 1))
        }),
        c.forEach(function (e) {
          return e.addEventListener('click', function (e) {
            s((n = e.target.dataset.slidenum))
          })
        })
    },
    425: (e, t, c) => {
      'use strict'
      e.exports = c.p + '6cf811910c05c0fd061c.png'
    },
  },
  (e) => {
    e((e.s = 579))
  },
])
