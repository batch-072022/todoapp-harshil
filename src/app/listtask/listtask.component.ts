import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.css']
})
export class ListtaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   // users ! :any;
  // users = ["Harshil", "Sonu", "Don"];
  users = [
    {id:101,name:"Harshil",email:"harshilparlikar3247@gmail.com",status:"PENDING"},
   {id:1022,name:"Sonu",email:"221810302044@gitam.in",status:"PENDING"}
  ]
  deleteUser(){
    alert("Successfully Deleted");
  }


}
