import { SubserveceComponent } from './servises/subservece/subservece.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { title } from 'process';
import { AboutComponent } from './about/about.component';

import { EduComponent } from './about/edu/edu.component';
import { ProgressComponent } from './about/progress/progress.component';
import { ServisesComponent } from './servises/servises.component';





const routes: Routes = [

  {path:"home", component:HomeComponent,title:"home"},
  
  {path:"servises", component:ServisesComponent,title:"servises"},
  {path:"about", component:AboutComponent,title:"about"},
  {path:"contact", component:ContactComponent,title:"contact"},
  {path:"subservece", component:SubserveceComponent,title:"subservece"},
  {path:"work", component:WorksComponent,title:"works"},
  {path:'', redirectTo:"home" ,pathMatch:'full'},
  {path:"edu", component:EduComponent,title:"edu"},
  {path:"progress", component:ProgressComponent,title:"progress"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
