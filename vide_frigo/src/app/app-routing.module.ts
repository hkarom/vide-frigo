import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ProfileComponent} from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { LoggedGuard } from './guards/logged.guard';

const routes: Routes = [
	{ path: '#', redirectTo: '', pathMatch: 'full' },
	{	path: '', component: HomeComponent },
	{	path: 'signup', component: SignupComponent, canActivate: [LoggedGuard]  },
	{	path: 'login', component: LoginComponent, canActivate: [LoggedGuard] },
	{	path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }