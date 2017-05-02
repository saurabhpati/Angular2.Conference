import { Injectable } from '@angular/core'
import { IUser } from "./user.model";

@Injectable()

export class UserAuthService {
    currentUser: IUser

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            firstName: "Saurabh",
            lastName: "Pati",
            userName: "saurabhpati"
        }
    }
    
    isAuthenticated() {
        return !!this.currentUser;
    }
}