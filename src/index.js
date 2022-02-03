// Test import of a JavaScript module
import { example } from '@/js/example'

import tree from './images/tree.png'
const htmlEl = document.querySelectorAll('.tree')

htmlEl.forEach((el) => {
  console.log('🚀 ~ file: index.js ~ line 10 ~ htmlEl.forEach ~ el', el)
  let treeEl = document.createElement('img')
  treeEl.src = tree
  el.append(treeEl)
})

// Test import of styles
import '@/styles/index.scss'

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Test a public folder asset
const imagePublic = document.createElement('img')
imagePublic.src = '/assets/example.png'
