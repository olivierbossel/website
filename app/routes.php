<?php

$app->get('/[{path:.*}]', function($request, $response, array $args) {
  ob_start();
  require('../pages/index.php');
  $content = ob_get_clean();
  $response->getBody()->write($content);
  return $response;
});

$app->post('/contact', function($request, $response, array $args) {

  $data = file_get_contents('php://input');
  $data = json_decode($data);

  // validate data
  if (empty($data->name)) {
    $data = [
      'status' => 'error',
      'message' => 'Please provide me a name...'
    ];
    $newResponse = $response->withJson($data, 406);
    return $newResponse;
  }
  if (empty($data->email) || !Thorin::is_email($data->email)) {
    $data = [
      'status' => 'error',
      'message' => 'A valid email has to be provided...'
    ];
    $newResponse = $response->withJson($data, 406);
    return $newResponse;
  }
  if (empty($data->message)) {
    $data = [
      'status' => 'error',
      'message' => 'If you want to contact me, provide at least a small message...'
    ];
    $newResponse = $response->withJson($data, 406);
    return $newResponse;
  }

  $mailer = Thorin::mailer('mailgun');
  $mailer->addAddress('olivier.bossel@gmail.com', 'John Doe');
  $mailer->setFrom($data->email);
  $mailer->addReplyTo($data->email);
  $mailer->isHTML(true);
  $mailer->Subject = 'A message from the website! : ' . $data->name;
  $mailer->Body = $data->message;
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
    $newResponse = $response->withJson($data, 406);
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
