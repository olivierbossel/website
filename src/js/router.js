import SRouterComponent from 'coffeekraken-s-router-component'
import { contactHandler, contactLeave } from './pages/contact'
import { projectsHandler } from './pages/projects'

setTimeout(() => {
  SRouterComponent.on('/', projectsHandler)
    .on('/contact', contactHandler, {
      leave: contactLeave
    })
    .listen()
})
