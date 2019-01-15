const $logo = document.querySelector('#logo')
document.body.addEventListener('app:ready', () => {
  setTimeout(() => {
    $logo.play()
  }, 500)
})
