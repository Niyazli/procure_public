import {Component, OnInit} from '@angular/core';
import {CpvCodeModel} from '../../../category/models/cpv-tree.model';
import {FilteringService} from '../../services/filtering.service';

@Component({
  selector: 'app-supplier-filtering',
  template: `
    <div class="row">
      <div class="col-12">
        <mat-form-field>
          <input type="text" matInput placeholder="search by keywords" />
          <mat-icon matSuffix>search</mat-icon>
        </mat-form-field>
      </div>
      <div class="col">
        <mat-form-field>
          <mat-select>
            <mat-option>filter by company type</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class="col">
        <mat-form-field>
          <mat-select>
            <mat-option>filter by company type</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class="col-md-auto">
        <a mat-button class="mt-2" (click)="filteringService.handleCategoryDialog()" color="primary"
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
    </div>
  `,
  styleUrls: ['./supplier-filtering.component.scss'],
})
export class SupplierFilteringComponent implements OnInit {
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
}
