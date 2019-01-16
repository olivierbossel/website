import axios from 'axios'
import SNotificationComponent from 'coffeekraken-s-notification-component'

axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response)
)

const $code = document.querySelector('s-codemirror#contact-code')

$code.setProps({
  updateOn: 'run',
  compile: value =>
    new Promise((resolve, reject) => {
      let values = {}
      try {
        values = JSON.parse(value)
      } catch(e) {
        SNotificationComponent.notify({
          title: 'Woops',
          body: e,
          dismissable: true,
          timeout: 10000,
          side: 't',
          type: 'error'
        })
        reject()
        return
      }
      axios
        .post('/contact', values)
        .then((response) => {
          resolve({
            data: value
          })
          $code.setProp('value', `{ "message": "${response.data.message}" }`)
        })
        .catch(error => {
          SNotificationComponent.notify({
            title: 'Woops',
            body: error.data.message,
            dismissable: true,
            timeout: 10000,
            side: 't',
            type: 'error'
          })

          reject()
        })
    })
})
