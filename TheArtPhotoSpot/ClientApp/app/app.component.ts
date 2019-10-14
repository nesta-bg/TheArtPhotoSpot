import { Component } from '@angular/core';

@Component({
  selector: 'the-shop',
  templateUrl: "./app.component.html",
    styles: [
        `
        .wrap {
            margin: 20px;
        }
        `
    ]
})
export class AppComponent {
  title = 'Product List';
}
