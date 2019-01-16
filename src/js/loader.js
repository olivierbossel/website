import '@babel/polyfill'
import 'coffeekraken-s-sprite-transition-component'
import appendStylesheetLink from 'coffeekraken-sugar/js/dom/appendStylesheetLink'
import imagesLoaded from 'coffeekraken-sugar/js/dom/imagesLoaded'
import dispatchEvent from 'coffeekraken-sugar/js/dom/dispatchEvent'

window.isIntroRunning = true
const $transition = document.querySelector('s-sprite-transition')
$transition.addEventListener('ready', () => {
  $transition.goToStillFrame()
  document.body.classList.add('ready')

  const promises = [
    appendStylesheetLink('/dist/css/style.css'),
    imagesLoaded(document.querySelectorAll('img')),
    import('./app')
  ]

  Promise.all(promises).then(() => {

    setTimeout(() => {
      document.body.classList.add('loaded')
      $transition.animateOut().then(() => {
        window.isIntroRunning = false
        dispatchEvent(document.body, 'app:ready')
      })
    }, 1000)

  })
})
