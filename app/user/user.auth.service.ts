import { Injectable } from '@angular/core'
import { IUser } from "./user.model";
import { RequestOptions, Headers, Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()

export class UserAuthService {
    currentUser: IUser

    constructor(private http: Http) {

    }

    loginUser(userName: string, password: string): Observable<any> {
        /*
        this.currentUser = {
            id: 1,
            firstName: "Saurabh",
            lastName: "Pati",
            userName: "saurabhpati"
        }
        */

        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let options = new RequestOptions({
            headers: headers
        })

        let user = {
            username: userName,
            password: password
        }

        return this.http.post('/api/login', user, options).do((response: Response) => {
            if (response) {
                this.currentUser = <IUser>response.json().user;
            }
        }).catch(error => {
            return Observable.of(false);
        });
    }

    updateUser(firstName: string, lastName: string): Observable<IUser> {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });

        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options).map((response: Response) => {
            return <IUser>response.json();
        });
    }
    
    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    checkAuthenticationStatus(): void {
        this.http.get('/api/currentIdentity').map((response: any) => {
            if (response._body) {
                return <IUser>response.json();
            } else {
                return <IUser>{};
            }
        }).do(loggedInUser => {
            if (!!loggedInUser.userName) {
                this.currentUser = loggedInUser;
            }
        }).subscribe();
    }
}