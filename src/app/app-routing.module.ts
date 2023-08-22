import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProjectComponent } from './project/project.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewsComponent } from './news/news.component';
import { UpdatesComponent } from './updates/updates.component';
import { DummyComponent } from './dummy/dummy.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
