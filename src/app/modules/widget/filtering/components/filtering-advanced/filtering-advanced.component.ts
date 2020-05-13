import {Component, OnInit} from '@angular/core';
import {FilteringService} from '../../services/filtering.service';
import {CpvCodeModel} from '../../../category/models/cpv-tree.model';

@Component({
  selector: 'app-filtering-advanced',
  template: `
    <section class="row">
      <div class="col-lg-4">
        <mat-form-field>
          <input type="text" matInput placeholder="Search by keywords" />
          <button mat-icon-button matSuffix><mat-icon>search</mat-icon></button>
        </mat-form-field>
      </div>
      <div class="col-lg-2">
        <mat-form-field>
          <mat-select [ngModel]="any()">
            <mat-option disabled value="1">Event type</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class="col-lg-2">
        <mat-form-field>
          <mat-select [ngModel]="any()">
            <mat-option disabled value="1">Purchasing type</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class="col-lg-4 text-right">
        <a mat-button (click)="filteringService.handleCategoryDialog()" class="mt-2" color="primary"
          >Search by purchasing category <mat-icon class="icon--sm">search</mat-icon></a
        >
      </div>
      <div class="col-12">
        <mat-form-field appearance="standard" *ngIf="categories?.length">
          <mat-chip-list #chipList>
            <mat-chip *ngFor="let category of categories" [selectable]="selectable" [removable]="removable" (removed)="remove(category)">
              {{ category.name }}
              <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
            </mat-chip>
          </mat-chip-list>
        </mat-form-field>
      </div>
    </section>
  `,
  styleUrls: ['./filtering-advanced.component.scss'],
})
export class FilteringAdvancedComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  categories: CpvCodeModel[];

  remove(fruit: any): void {
    const index = this.categories.indexOf(fruit);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }
  constructor(public filteringService: FilteringService) {}

  ngOnInit(): void {
    this.filteringService.selectedCategories.subscribe(r => (this.categories = r));
  }

  any() {
    return '1';
  }
}
