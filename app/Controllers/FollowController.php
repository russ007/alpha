<?php

namespace App\Controllers;

class FollowController extends Controller{

    private $uid = null;
    private $input_arr = null;
    private $input_incr = null;


    function __construct($uid){
        $this->input = json_decode(file_get_contents('php://input'));
        $this->uid = $uid;
        $this->input_arr = json_encode($this->input->follow_array);
        $this->input_incr = json_encode($this->input->incr);
        $this->input_fuid = $this->input->fuid;
        parent::__construct();
        self::follow();
        //update session
        $_SESSION['user']->following =  $this->input_arr;
    }

    public function follow() {
        //with multiple pdo queries better performance if use pdo->prepare() before execute
        //https://www.php.net/manual/en/pdo.query.php
        $q = "
        UPDATE users SET following= :input WHERE id = :uid;
        UPDATE users SET followers_count= followers_count+{$this->input_incr} WHERE id = :fuid;
        ";
        $stmt = $this->pdo->prepare($q);
        $stmt->execute([':input'=>$this->input_arr,':uid'=>$this->uid,':fuid'=>$this->input_fuid]);   
    }
}