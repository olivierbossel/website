import dispatchEvent from 'coffeekraken-sugar/js/dom/dispatchEvent'
import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'

// icons
SWebComponent.setDefaultProps(
  {
    driver: 'fontawesome'
  },
  's-icon'
)

// transition start on slideshow items
let isFirst = true
SWebComponent.setDefaultProps(
  {
    onChange: comp => {
      if (!isFirst) {
        // avoid trigger motion blur on first change event
        Array.from(comp.querySelectorAll('[s-slideshow-slide]')).forEach(
          $slide => {
            dispatchEvent($slide, 'transitionstart')
          }
        )
      }
      isFirst = false
    }
  },
  's-slideshow'
)

// s-validator
SWebComponent.setDefaultProps(
  {
    on: 'keyup'
  },
  's-validator'
)

// recaptcha
SWebComponent.setDefaultProps(
  {
    sitekey: '6LfLqYkUAAAAADaAhZIBuIcnIR8EoCzccIPcQslj'
  },
  's-recaptcha'
)

// glitch
SWebComponent.setDefaultProps(
  {
    mountDependencies: [
      function() {
        return new Promise(resolve => {
          document.body.addEventListener('app:ready', () => {
            console.log('ready')
            resolve()
          })
        })
      }
    ]
  },
  's-glitch'
)
