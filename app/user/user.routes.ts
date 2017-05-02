import { Routes } from '@angular/router';
import { UserProfileComponent } from './user.component';
import { UserLoginComponent } from './user.login.component';

export const userRoutes: Routes = [
    { path: 'profile', component: UserProfileComponent },
    { path: 'login', component: UserLoginComponent }
]