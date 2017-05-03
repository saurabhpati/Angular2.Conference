import { Injectable } from '@angular/core'
import { IUser } from "./user.model";

@Injectable()

export class UserAuthService {
    currentUser: IUser

    loginUser(userName: string, password: string): void {
        this.currentUser = {
            id: 1,
            firstName: "Saurabh",
            lastName: "Pati",
            userName: "saurabhpati"
        }
    }

    updateUser(firstName: string, lastName: string): void {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
    
    isAuthenticated(): boolean {
        return !!this.currentUser;
    }
}