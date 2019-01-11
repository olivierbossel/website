<?php

print Thorin::render_twig('pages/home-page', [
  'layout' => require('layout/layout.php'),
  'projects' => [
    (object) [
      'title' => 'Sugar',
      'description' => 'A little sugar in your codebase',
      'url' => 'https://github.com/coffeekraken/sugar',
      'image' => (object) [
        'src' => '/data/sugar.jpg',
        'alt' => 'Sugar illustration'
      ]
    ],
    (object) [
      'title' => 'Thorin',
      'description' => 'Size doesn\'t always matter',
      'url' => 'https://github.com/dwarvesforge/thorin',
      'image' => (object) [
        'src' => '/data/thorin.jpg',
        'alt' => 'Thorin illustration'
      ]
    ],
    (object) [
      'title' => 'Webcomponents',
      'description' => 'A bunch of cool webcomponents',
      'url' => 'https://github.com/Coffeekraken?utf8=%E2%9C%93&q=s-&type=&language=',
      'image' => (object) [
        'src' => '/data/webcomponents.jpg',
        'alt' => 'Webcomponents illustration'
      ]
    ],
    (object) [
      'title' => 'Code playground',
      'description' => 'Play with your code with ease',
      'url' => 'https://github.com/Coffeekraken/code-playground',
      'image' => (object) [
        'src' => '/data/code-playground.jpg',
        'alt' => 'Code playground illustration'
      ]
    ]
  ]
]);
