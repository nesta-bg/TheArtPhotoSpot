﻿import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';

@Component({
    selector: "login",
    templateUrl: "login.component.html"
})
export class Login {

    constructor(private dataService: DataService, private router: Router) { }

    public creds = {
        username: "",
        password: ""
    };

    onLogin() {
        // Call the login Service
        alert(this.creds.username);
        this.creds.username += "!";
    }
}