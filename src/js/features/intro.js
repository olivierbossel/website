import dispatchEvent from 'coffeekraken-sugar/js/dom/dispatchEvent'
;(() => {
  // const $loader = document.querySelector('#loader')
  // const $polygon = $loader.querySelector('polygon')
  // const $feTurbulence = $loader.querySelector('feTurbulence')
  // const $feDisplacementMap = $loader.querySelector('feDisplacementMap')

  // // 353.5 0 353.5 431 707.01 635 353.5 431 0 635 353.5 431 353.5 0

  // anime({
  //   targets: [$polygon, $feTurbulence, $feDisplacementMap],
  //   points: '69.59,0 69.67,85 139.18,125 69.67,85 0,125 69.67,85',
  //   baseFrequency: 0,
  //   scale: 1,
  //   loop: true,
  //   direction: 'alternate',
  //   easing: 'easeInOutExpo'
  // });

  window.isIntroRunning = true
  const $transition = document.querySelector('s-sprite-transition')
  $transition.addEventListener('ready', () => {
    $transition.goToStillFrame()
    document.body.classList.add('ready')
    $transition.animateOut().then(() => {
      window.isIntroRunning = false
      dispatchEvent(document.body, 'app:ready')
    })
  })
})()
