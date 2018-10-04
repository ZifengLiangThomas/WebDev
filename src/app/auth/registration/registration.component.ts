import { Component, OnInit } from '@angular/core';
import { User } from "../../app.model"
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {
  title = 'registration';
  RegistrationModel: User = new User();
  constructor() {
    console.log("constructor");
   }
  ngOnInit() {
    console.log("registration page");
  }

}
