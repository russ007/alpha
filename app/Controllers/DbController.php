<?php

namespace App\Controllers;
use PDO;

class DbController extends PDO{

	public function __construct()
	{
		$default_options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
		];

		try{
			parent::__construct("mysql:host=localhost;dbname=alpha",'root','', $default_options);
		}catch(PDOException $e){
			echo $e;	
		}
	}
}
?>