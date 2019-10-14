import { Component, Input } from '@angular/core';

@Component({
    selector: 'zippy',
    styles: [`
        .zippy .zippy-title:hover{
            background: #f0f0f0;
            cursor: pointer;
        }
    `],
    template: `
        <div class="zippy">
            <div 
                class="zippy-title"
                (click)="toggle()">
                {{ title }} 
                <i 
                    class="fa"
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
export class ZippyComponent {
    isExpanded = false;
    @Input() title: string;

    toggle() {
        this.isExpanded = !this.isExpanded;
        this.isExpanded ? this.title = "Hide" : this.title = "Show";
    }
}