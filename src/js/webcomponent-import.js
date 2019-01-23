import isMobile from 'coffeekraken-sugar/js/utils/is/mobile'
import isChrome from 'coffeekraken-sugar/js/utils/is/chrome'

import 'coffeekraken-s-icon-component'
import 'coffeekraken-s-slideshow-component'
import 'coffeekraken-s-sprite-transition-component'
import 'coffeekraken-s-bodymovin-component'
import 'coffeekraken-s-codemirror-component'
import 'coffeekraken-s-notification-component'
import 'coffeekraken-s-router-component'

if (!isMobile()) {
  import('coffeekraken-s-atv-card-component')
  import('coffeekraken-s-glitch-component')
}

if (isChrome()) {
  import('coffeekraken-s-motion-blur-component')
}

// check out https://github.com/coffeekraken for more components
