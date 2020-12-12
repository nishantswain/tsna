import { Component, OnInit } from '@angular/core';
import {MatIconRegistry,} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router} from '@angular/router';
// import {chat_bubble} from '../../.././assets/chat_bubble';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router:Router) {
    // iconRegistry.addSvgIcon('messages',sanitizer.bypassSecurityTrustResourceUrl('../../.././assets/chat_bubble.svg'));
   }

  ngOnInit(): void {
    
  }

  onClickMessages()
  {
    this.router.navigate(['/dms'])
    
  }

}
