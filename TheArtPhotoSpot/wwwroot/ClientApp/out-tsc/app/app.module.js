import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductList } from './shop/productList.component';
import { DataService } from './shared/dataService';
import { ZippyComponent } from './shared/zippy.component';
import { Cart } from './shop/cart.component';
import { Shop } from './shop/shop.component';
import { Checkout } from './checkout/checkout.component';
const appRoutes = [
    { path: "", component: Shop },
    { path: "checkout", component: Checkout }
];
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            ProductList,
            ZippyComponent,
            Cart,
            Shop,
            Checkout
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            RouterModule.forRoot(appRoutes, {
                //useHash: true,
                enableTracing: false // for Debugging of the Routes
            })
        ],
        providers: [DataService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map