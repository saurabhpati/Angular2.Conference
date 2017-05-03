import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user.component';
import { UserLoginComponent } from './user.login.component';
import { userRoutes } from './user.routes';

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule ],
    declarations: [UserProfileComponent, UserLoginComponent],
    providers: []
})

export class UserProfileModule {

}