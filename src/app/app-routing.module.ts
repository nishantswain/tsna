import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginpageComponent} from './Pages/loginpage/loginpage.component'
import {HomepageComponent} from './Pages/homepage/homepage.component'
import {MessageListComponent} from './Components/message-list/message-list.component'

const routes:Routes=[
  {path:'',component:LoginpageComponent},
  {path:'home',component:HomepageComponent},
  {path:'login',component:LoginpageComponent},
  {path:'dms',component:MessageListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
