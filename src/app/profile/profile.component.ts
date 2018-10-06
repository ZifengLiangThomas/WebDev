import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  accountName:string = "John Doe";
  email:string = "jd28@rice.edu";
  phone:string = "111-111-1111"
  zipcode:string = "77005"
  constructor() { }

  ngOnInit() {
  }
  onUpdate() {
    if ((<HTMLInputElement>document.getElementById("newEmail")).value.length != 0) {
      this.email = (<HTMLInputElement>document.getElementById("newEmail")).value;
      (<HTMLInputElement>document.getElementById("newEmail")).value = "";
    }
    if ((<HTMLInputElement>document.getElementById("newPhone")).value.length != 0) {
      this.phone = (<HTMLInputElement>document.getElementById("newPhone")).value;
      (<HTMLInputElement>document.getElementById("newPhone")).value="";
    }
    if ((<HTMLInputElement>document.getElementById("newZipcode")).value.length != 0) {
      this.zipcode = (<HTMLInputElement>document.getElementById("newZipcode")).value;
      (<HTMLInputElement>document.getElementById("newZipcode")).value = "";
    }
    if ((<HTMLInputElement>document.getElementById("newName")).value.length != 0) {
      this.accountName = (<HTMLInputElement>document.getElementById("newName")).value;
      this.accountName = (<HTMLInputElement>document.getElementById("newName")).value = "";
    }
  }
}
