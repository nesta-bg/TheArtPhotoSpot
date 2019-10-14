import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let ZippyComponent = class ZippyComponent {
    constructor() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
tslib_1.__decorate([
    Input()
], ZippyComponent.prototype, "title", void 0);
ZippyComponent = tslib_1.__decorate([
    Component({
        selector: 'zippy',
        styles: [`
        //.zippy {
        //    border: 1px solid #ccc;
        //    border-radius: 2px;
        //}
  
        //.zippy .zippy-title {
        //    padding: 20px;
        //    font-weight: bold;
        //}
  
        //.zippy .zippy-title:hover{
        //    background: #f0f0f0;
        //    cursor: pointer;
        //}
  
        //.zippy .zippy-content {
        //    padding: 20px;
        //}
    `],
        template: `
        <div class="zippy">
            <div 
            class="zippy-title"
            (click)="toggle()">
            {{ title }} 
            <i 
                class="float-right fa"
                [ngClass]="
                    { 
                        'fa-chevron-down': !isExpanded, 
                        'fa-chevron-up': isExpanded 
                    }">
            </i>
            </div>
            <div *ngIf="isExpanded" class="zippy-content">
                <ng-content></ng-content> 
            </div>
        </div> 
    `
    })
], ZippyComponent);
export { ZippyComponent };
//# sourceMappingURL=zippy.component.js.map