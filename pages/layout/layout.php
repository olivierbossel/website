<?php

return [
  'root_url' => Thorin::root_url(),
  'current_url' => Thorin::current_url(),
  'lang' => Thorin::language(),
  'charset' => 'utf-8',
  'viewport' => null,
  'noindex' => Thorin::is_environment('development','testing'),
	'title' => Thorin::lang('default.metas.title'),
	'description' => Thorin::lang('default.metas.description'),
	'keywords' => Thorin::lang('default.metas.keywords'),
	'sharing_image' => Thorin::asset_url('img/sharing.png', true),
  'body_class' => null,
  'og' => true,
  'twitter' => true,
  'critical_css' => null,
  'google_tag_manager_id' => null,
  'google_analytics_id' => 'UA-41993246-1',
  'webfonts' => [
		'Roboto:300,400,800'
	],
  'head' => [
    'stylesheets' => [
      Thorin::asset_url('css/style.css')
    ],
    'scripts' => [],
    'js_variables' => []
  ],
  'foot' => [
    'stylesheets' => [],
    'scripts' => [
      Thorin::asset_url('js/app.js'),
      (Thorin::is_environment('development','testing')) ? Thorin::asset_url('js/template-stack.js') : null
    ],
    'js_variables' => []
  ],
];
