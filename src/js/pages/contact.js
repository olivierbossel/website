export function contactHandler() {
  document.querySelector('s-slideshow.content').goTo('contact')
  document.body.classList.add('page-contact')
}
export function contactLeave() {
  document.body.classList.remove('page-contact')
}
