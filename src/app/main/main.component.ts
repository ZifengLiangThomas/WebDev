import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from './friends.json';
import { $ } from 'protractor';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  accountName:string;
  status:string = "default status"
  constructor(private route : ActivatedRoute, private zone: NgZone) { 
  }

  ngOnInit() {
    this.loadFriends();
  }

  onUpdate() {
    this.status = (<HTMLInputElement>document.getElementById("newStatus")).value;
    this.status = (<any>data).followers[0].name;
    console.log("dasdas");
  }

  loadFriends() {
    this.accountName = this.route.snapshot.paramMap.get("accountName")
    var friendNum = (<any>data).followers.length;
    var friendDiv = <HTMLDivElement>document.getElementById("myFriends");
    for (var i = 0; i < friendNum; i++) {
      var singleDiv = document.createElement("div");
      singleDiv.setAttribute("id", "singleDiv");
      var friend = (<any>data).followers[i];
      var icon = document.createElement("img");
      icon.setAttribute("src", friend.avatar);
      var name = document.createElement("p");
      name.innerHTML =  friend.name;
      var status = document.createElement("p");
      status.innerHTML = friend.status;
      singleDiv.appendChild(icon);
      singleDiv.appendChild(name);
      singleDiv.appendChild(status);
      friendDiv.appendChild(singleDiv);
    }
  }
}

