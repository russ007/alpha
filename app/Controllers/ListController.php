<?php

namespace App\Controllers;

class ListController extends Controller{
    

    public function getList() {
        $stmt = $this->pdo->query(
            "SELECT 
                u.*, g.id AS group_id, g.name AS group_name
            FROM
                users AS u
                    LEFT JOIN
                groups AS g ON u.group_id = g.id
            ORDER BY u.name
        ");
        $stmt->setFetchMode(\PDO::FETCH_OBJ);
        $this->res = $stmt->fetchAll(); 
        return $this->res;
    }
}
