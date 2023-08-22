import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProjectComponent } from './project/project.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SaComponent } from './sa/sa.component';
import {MatCardModule} from '@angular/material/card';



import { RouterModule, Routes } from '@angular/router';
import { BackgroundsliderComponent } from './backgroundslider/backgroundslider.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NewsComponent } from './news/news.component';
import { UpdatesComponent } from './updates/updates.component';
import { DummyComponent } from './dummy/dummy.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
   {path:"signin",component:SigninComponent},
   {
    path: "project",component: ProjectComponent
   },
   {path:"navbar",component: NavbarComponent},
   {
    path: "home",component: HomeComponent
   },
   {
    path: "aboutus",component: AboutusComponent
   },
   {
    path: "contactus",component:ContactusComponent
   },
   {
    path: "news",component: NewsComponent
   },
   {
    path: "updates",component: UpdatesComponent
   },
];



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ProjectComponent,
    NavbarComponent,
    SaComponent,
    BackgroundsliderComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    NewsComponent,
    UpdatesComponent,
    DummyComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    SlickCarouselModule,
    RouterModule,
    MatToolbarModule,
    MatCardModule,

    RouterModule.forRoot([
      {path: '', redirectTo:'/project',pathMatch:'full'}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
