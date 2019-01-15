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
      const values = JSON.parse(value)
      axios
        .post('/contact', values)
        .then(() => {
          resolve({
            data: value
          })
        })
        .catch(error => {
          SNotificationComponent.notify({
            title: 'Woops',
            body: error.data.message,
            dismissable: true,
            timeout: 5000
          })

          reject()
        })
    })
})
