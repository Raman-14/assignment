import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'home',
    component:HomeComponent,
    title:'Home-assignment',
  },
  {
    path:'create-account',
    component:CreateAccountComponent,
    title:'Create-account',
  },
  {
    path:'account',
    component:AccountComponent,
    title:'account',
  },
  {
    path:'login',
    component:LoginComponent,
    title:'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
