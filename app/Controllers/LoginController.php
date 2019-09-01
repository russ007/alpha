<?php

namespace App\Controllers;
use App\Controllers\ListController;

class LoginController extends Controller{

    //public $pdo = null;
    //public $input = null;
    //public $res = null;

    function __construct(){
        parent::__construct();
        $this->input = json_decode(file_get_contents('php://input'));
        self::login();
    }

    public function login() {

        $stmt = $this->pdo->prepare('SELECT * FROM users WHERE name = :uname');
        $stmt->execute([':uname' => $this->input->userName]);
        $stmt->setFetchMode(\PDO::FETCH_OBJ);
        $this->res = $stmt->fetch(); 

        if($this->res){
            $_SESSION['user'] =  $this->res;
            $this->results['user'] = $this->res;
            //self::getList();
        }
    
        //if user does not exist then respond with 401
        if(!isset($_SESSION['user'])){
            header("HTTP/1.1 401 Unauthorized");
            return;
        }

        //if user logged in then get follow list
        $list = new ListController();
        $this->results['list'] = $list->getList();

        print_r(json_encode($this->results));
    }
}


//WHERE NOT u.id = {$this->res->id}
?>



