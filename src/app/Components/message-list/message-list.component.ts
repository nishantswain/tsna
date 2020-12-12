import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClickFriendMessage(friendName:string)
  {
      this.router.navigate[('/dms')];
  }

}
