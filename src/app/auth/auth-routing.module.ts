import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GetbackPasswordComponent } from './getback-password/getback-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthComponent } from './auth/auth.component';



const authRoutes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    outlet: 'side'
  },
  // {path: 'register', component: RegisterComponent},
  {
    path: 'getback-password',
    component: GetbackPasswordComponent,
    outlet: 'side'
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  }




]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
