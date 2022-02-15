// Test import of a JavaScript module
import './js/slider'

import avatar from './images/avatar.png'
const htmlEl = document.querySelector('.greet__avatar')
let avatarEl = document.createElement('img')
avatarEl.src = avatar
htmlEl.append(avatarEl)

// Test import of styles
import '@/styles/index.scss'

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Test a public folder asset
const imagePublic = document.createElement('img')
imagePublic.src = '/assets/example.png'
