import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user.component';
import { userRoutes } from './user.routes';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(userRoutes)],
    declarations: [UserProfileComponent],
    providers: []
})

export class UserProfileModule {

}