<?php

// load the db
$db = json_decode(file_get_contents('https://olivierbossel.github.io/projects-sink-data-source/db.json'));

print Thorin::render_twig('pages/home-page', [
  'layout' => require('layout/layout.php'),
  'projects' => $db->projects
]);
