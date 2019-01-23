export function contactEnterHandler() {
  document.querySelector('s-slideshow.content').goTo('contact')
  document.body.classList.add('page-contact')
}
export function contactLeaveHandler() {
  document.body.classList.remove('page-contact')
}
