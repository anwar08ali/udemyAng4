import { Injectable } from '@angular/core';
import { Http,Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Route, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export class AuthenticationService {
    token: string;
    isLoggedOut = new Subject<boolean>();
    constructor(private http: Http, private router: Router) { }

    login(username: string, password: string) {
         return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
             .map((response: Response) => {
                 // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.token = user.token;
                }
             });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.token == null;
        this.isLoggedOut.next(true);
        this.router.navigate(['/login']);
    }
    getToken(){
        return this.token;
    }
    isAuthenticated(){
        return this.token!=null;
    }
}