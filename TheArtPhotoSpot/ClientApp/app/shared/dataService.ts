import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './product';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    apiUrl = 'http://localhost:63127/api';

    constructor(private httpClient: HttpClient) {

    }

    public products: Product[] = [];

    loadProducts() {
        return this.httpClient.get<Product[]>(`${this.apiUrl}/products`);
    }
} 