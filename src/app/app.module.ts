import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServisesComponent } from './servises/servises.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { EduComponent } from './about/edu/edu.component';
import { ProgressComponent } from './about/progress/progress.component';
import { SubserveceComponent } from './servises/subservece/subservece.component';
import { ResemeComponent } from './about/reseme/reseme.component';
import { NoteComponent } from './note/note.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServisesComponent,
    WorksComponent,
    ContactComponent,
    EduComponent,
    ProgressComponent,
    SubserveceComponent,
    ResemeComponent,
    NoteComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
