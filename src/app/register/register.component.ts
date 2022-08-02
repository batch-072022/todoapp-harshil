import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name!:string;
  email!:string;
  password!:string;

  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  onSubmit(){
    alert("Registration is successful");
    this.router.navigateByUrl("/login")
  }
  
  }

