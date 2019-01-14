import isMobile from 'coffeekraken-sugar/js/utils/is/mobile'

import 'coffeekraken-s-icon-component'
import 'coffeekraken-s-validator-component'
import 'coffeekraken-s-slideshow-component'
import 'coffeekraken-s-sprite-transition-component'
import 'coffeekraken-s-ajax-form-component'
import 'coffeekraken-s-recaptcha-component'
import 'coffeekraken-s-bodymovin-component'

if (!isMobile()) {
  import('coffeekraken-s-atv-card-component')
  import('coffeekraken-s-motion-blur-component')
  import('coffeekraken-s-spring-snap-component')
}

// check out https://github.com/coffeekraken for more components
