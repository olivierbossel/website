import Navigo from 'navigo'
import { contactEnterHandler, contactLeaveHandler } from './pages/contact'
import { projectsEnterHandler } from './pages/projects'

const root = '/'
const useHash = false
const hash = '#'
const router = new Navigo(root, useHash, hash)

router.hooks({
  before: done => {
    if (window.isIntroRunning) {
      console.log('running')
      document.body.addEventListener('app:ready', e => {
        done()
      })
      return
    }
    done()
  }
})
router
  .on('contact', contactEnterHandler, {
    leave: contactLeaveHandler
  })
  .on('', projectsEnterHandler)
  .resolve()
