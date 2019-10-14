import { Component, OnInit } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Product } from '../shared/product';

@Component({
    selector: "product-list",
    templateUrl: "productList.component.html",
    styleUrls: ["productList.component.css"]
})

export class ProductList implements OnInit {

    public products: Product[];

    constructor(private data: DataService) {
       
    }

    ngOnInit() {
        return this.data.loadProducts()
            .subscribe(data => {
                if (data) {
                    this.products = data;
                }
            });
    }

    addProduct(product: Product) {
        this.data.AddToOrder(product);
    }
}