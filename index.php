<?php

spl_autoload_register(function($class){
	include $class . '.php';
});

use App\Controllers\LoginController;
use App\Controllers\FollowController;
use App\Controllers\InitController;
include('app/helpers/helper.php');

/**
 * 
 * Session Handler
 * Use reddis as session handler.
 * Set handler and path here if not already set in php.ini
 */
ini_set('session.save_handler', 'redis');
ini_set('session.save_path', "tcp://localhost:6379");
//echo ini_get('session.save_path');

session_start();

$path = request_path();

if($path == 'user/check-session'){
    if(isset($_SESSION['user'])){
      $user = new InitController();
    }else{
        //print_r($path);
        print_r('false');
    }
}elseif($path == 'user/login' ){
    session_unset();
    $login = new LoginController(); 
}elseif($path == 'user/follow'){
    $uid = $_SESSION['user']->id;
    $follow = new FollowController($uid);
}
?>