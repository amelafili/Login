import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'login', component: LoginComponent},
  {path:'select', component: SelectComponent}
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
