<?php
require 'vendor/autoload.php';
//$client = \Symfony\Component\Panther\Client::createChromeClient();
//$client->setClient(new \GuzzleHttp\Client($config));
//sleep(mt_rand(200, 1650));
$client = \Symfony\Component\Panther\Client::createChromeClient();
//use Goutte\Client;

//$client = new Client();
  //$client->setClient(new \GuzzleHttp\Client(['proxy' => '199.217.116.5:5836']));
sleep(1);
$client->request('GET', 'https://matveynikon.wixsite.com/dailyhero/post/inventions-that-help-the-world');
sleep(15);
?>
