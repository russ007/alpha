<?php

namespace App\Controllers;

class Controller {

    protected $dbo = null;
    protected $res = null;
    protected $input = null; 
    protected $results = [];

    function __construct(){
        $this->pdo = new dbController();
    }
}