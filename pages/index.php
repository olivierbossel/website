<?php

// load the db
$db = json_decode(file_get_contents('../public/data/db.json'));

print Thorin::render_twig('pages/home-page', [
  'layout' => require('layout/layout.php'),
  'projects' => $db->projects
]);
