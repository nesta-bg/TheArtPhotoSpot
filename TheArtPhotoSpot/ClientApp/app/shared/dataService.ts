import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private httpClient: HttpClient) {

    }

    public products = [];

    loadProducts() {
        return this.httpClient.get("/api/products")
            .pipe(map((data: any[]) => {
                this.products = data;
                return true;
            }));
    }
} 