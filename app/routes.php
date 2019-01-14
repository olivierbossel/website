<?php

$app->get('/[{path:.*}]', function($request, $response, array $args) {
  ob_start();
  require('../pages/index.php');
  $content = ob_get_clean();
  $response->getBody()->write($content);
  return $response;
});

$app->post('/contact', function($request, $response, array $args) {

  $mailer = Thorin::mailer('mailgun');
  $mailer->addAddress('olivier.bossel@gmail.com', 'John Doe');
  $mailer->setFrom($_POST['email']);
  $mailer->addReplyTo($_POST['email']);
  $mailer->isHTML(true);
  $mailer->Subject = 'A message from the website! : ' . $_POST['fullname'];
  $mailer->Body = $_POST['message'];
  if ($mailer->send()) {
    $data = [
      'status' => 'ok',
      'message' => 'Your message has been sent. I will come back to you asap, thanks!'
    ];
    $newResponse = $response->withJson($data);
    return $newResponse;
  } else {
    $data = [
      'status' => 'error',
      'message' => 'An error has occured. Please try again later...',
      'info' => $mailer->ErrorInfo
    ];
    $newResponse = $response->withJson($data);
    return $newResponse;
  }
});

// pages/... folder auto routes
// $files = scandir('../pages');
// $files = array_filter($files, function($file) {
//   return $file != '..' && $file != '.' && $file != '.DS_Store' && ! is_dir('pages/'.$file);
// });
// foreach($files as $file) {
//   $path = '/'.str_replace('.php','',$file);
//   if ($path == '/index') $path = '/';
//   $app->get($path, function($request, $response, array $args) use($file) {
//     ob_start();
//     require('../pages/'.$file);
//     $content = ob_get_clean();
//     $response->getBody()->write($content);
//     return $response;
//   });
// }
