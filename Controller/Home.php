<?php

class Home extends Controller {

  function __construct(){
    parent::__construct();
  }

  public function index(){

    $this->title = "Shakti Society";
    $this->bodyclass = "home";
    $this->loadPage();
    $this->render('index');
    $this->loadFooter();

  }
}
?>
