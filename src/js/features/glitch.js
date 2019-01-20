import isSafari from 'coffeekraken-sugar/js/utils/is/safari'
;(() => {
  if (!isSafari) return
  document.body.addEventListener('app:ready', () => {
    const $glitch = document.querySelector('s-glitch.body__glitch')
    if (!$glitch) return
    $glitch.domUpdated()
  })
})()
