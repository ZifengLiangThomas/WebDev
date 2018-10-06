import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from './data.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  accountName:string = "John Doe";
  status:string = "default status"
  constructor(private route : ActivatedRoute, private zone: NgZone) { 
  }

  ngOnInit() {
    this.loadFriends();
    this.loadPosts();
  }

  onUpdate() {
    this.status = (<HTMLInputElement>document.getElementById("newStatus")).value;
  }
  filterPost() {
    var keyWord = (<HTMLInputElement>document.getElementById("filter")).value;
    var postList = document.getElementById("postDiv");
    if (keyWord.length == 0) {
      for (var i = 0; i < postList.children.length; i++) {
        (<HTMLDivElement>postList.children[i]).style.display ="";
      }
    }
    else{
      for (var i = 0; i < postList.children.length; i++) {
        var singleDiv = postList.children[i];
        var author = (<HTMLDivElement>singleDiv).children[0].children[0].innerHTML;
        var paragraph = (<HTMLDivElement>singleDiv).children[1].innerHTML;
        if (author.includes(keyWord) || paragraph.includes(keyWord)) {
          (<HTMLDivElement>singleDiv).style.display ="";
        }
        else{
          (<HTMLDivElement>singleDiv).style.display ="none";
        }
      }
    }
  }

  loadPosts() {
    var postNum = (<any>data).posts.length;
    var postList = document.getElementById("postDiv");
    for (var i = 0; i < postNum; i++) {
      var author = (<any>data).posts[i].author;
      var time = (<any>data).posts[i].timestamp;
      var text = (<any>data).posts[i].text;
      var img = (<any>data).posts[i].image;
      var singleDiv = document.createElement("div");
      var infoDiv = document.createElement("div");
      var authorSpan = document.createElement("span");
      var timeSpan = document.createElement("span");
      authorSpan.innerHTML = author;
      timeSpan.innerHTML = (new Date(time)).toLocaleString();
      infoDiv.appendChild(authorSpan).appendChild(timeSpan);
      singleDiv.appendChild(infoDiv);
      var paragraph = document.createElement("p");
      paragraph.innerHTML = text;
      singleDiv.appendChild(paragraph);
      if (img.length > 0) {
        var icon = document.createElement("img");
        icon.setAttribute("src", img);
        singleDiv.appendChild(icon);
      }
      var editBtn = document.createElement("button");
      var t1 = document.createTextNode("Edit");
      editBtn.appendChild(t1);
      var commentBtn = document.createElement("button");
      var t2 = document.createTextNode("Comment");
      commentBtn.appendChild(t2);
      singleDiv.appendChild(editBtn);
      singleDiv.appendChild(commentBtn);
      singleDiv.setAttribute("class", "post"); 
      singleDiv.style.backgroundColor ="yellow" 
      singleDiv.style.margin = "10px";
      postList.appendChild(singleDiv);
      

    }
  }

  loadFriends() {
    // this.accountName = this.route.snapshot.paramMap.get("accountName")
    var friendNum = (<any>data).followers.length;
    var friendDiv = document.getElementById("myFriends");
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

