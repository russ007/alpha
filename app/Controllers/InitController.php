<?php

namespace App\Controllers;
use App\Controllers\ListController;

class InitController extends Controller{

    //public $pdo = null;
    //public $input = null;
    //public $res = null;

    function __construct(){
        parent::__construct();
        self::setDashboard();
    }

    public function setDashboard() {

        $this->results['user'] = $_SESSION['user'];

        //if user logged in then get follow list
        $list = new ListController();
        $this->results['list'] = $list->getList();

        print_r(json_encode($this->results));
    }
}


//WHERE NOT u.id = {$this->res->id}
?>