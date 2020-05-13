import {Component, OnInit} from '@angular/core';
import {ICategory} from '../../models/category.interface';
import {CATEGORY} from '../../const/category.const';

@Component({
  selector: 'app-filtering-by-categories',
  template: `
    <h3 class="text-center font-weight-bold">LAST 5 EVENTS OF TOP 5 PURCHASING CATEGORIES</h3>
    <mat-button-toggle-group [(ngModel)]="categoryId">
      <mat-button-toggle *ngFor="let category of categories" [value]="category.id" [ngClass]="{isActive: category.id === categoryId}">
        <span [matTooltip]="category.name" class="cute-text-by-line max-line-2">{{ category.name }}</span>
      </mat-button-toggle>
    </mat-button-toggle-group>
  `,
  styleUrls: ['./filtering-by-categories.component.scss'],
})
export class FilteringByCategoriesComponent implements OnInit {
  categoryId: string;
  categories: ICategory[] = CATEGORY;
  constructor() {}

  ngOnInit(): void {
    this.categoryId = '1';
  }
}
