import dispatchEvent from 'coffeekraken-sugar/js/dom/dispatchEvent'
;(() => {


  window.isIntroRunning = true
  const $transition = document.querySelector('s-sprite-transition')
  $transition.addEventListener('ready', () => {
    $transition.goToStillFrame()
    document.body.classList.add('ready')
    setTimeout(() => {
      document.body.classList.add('loaded')
      $transition.animateOut().then(() => {
        window.isIntroRunning = false
        dispatchEvent(document.body, 'app:ready')
      })
    }, 1000)
  })
})()
