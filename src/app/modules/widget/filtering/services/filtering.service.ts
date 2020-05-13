import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ComponentType} from '@angular/cdk/overlay';
import {CpvCodeModel} from '../../category/models/cpv-tree.model';
import {ExpansionCpvTreeComponent} from '../../category/components/expansion-cpv-tree/expansion-cpv-tree.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class FilteringService {
  selectedCategories: Subject<CpvCodeModel[]> = new Subject<CpvCodeModel[]>();

  constructor(private dialog: MatDialog) {}

  handleCategoryDialog(selectedIds?: number[]) {
    const modal = this.dialog.open(ExpansionCpvTreeComponent);
    modal.componentInstance.expanded = true;
    modal.componentInstance.multiple = true;
    modal.componentInstance.hideHeader = true;
    modal.componentInstance.selectedCategories = selectedIds;
    modal.componentInstance.selectedCategory.subscribe(r => this.selectedCategories.next(r));
  }
}
