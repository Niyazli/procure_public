import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CpvCodeModel} from '../../../models/cpv-tree.model';

@Component({
  selector: 'app-cpv-recursion-model',
  templateUrl: './cpv-recursion-model.component.html',
  styleUrls: ['./cpv-recursion-model.component.scss'],
})
export class CpvRecursionModelComponent implements OnInit {
  @Input() categories: CpvCodeModel[];
  @Input() multiple: boolean;
  @Output() $getChild = new EventEmitter<CpvCodeModel>();
  @Output() selectedCategory = new EventEmitter();
  @Input() multiSelected: CpvCodeModel[];

  xz: any;

  log() {
    console.log(this.xz);
  }

  constructor() {}

  ngOnInit() {
    if (!this.multiSelected) {
      this.multiSelected = [];
    }
  }

  getChild(c: CpvCodeModel) {
    this.$getChild.emit(c);
  }

  selectCategory(category: CpvCodeModel) {
    if (!this.multiple) {
      this.selectedCategory.emit([category]);
    } else {
      this.selectedCategory.emit(this.categories.filter(c => c.checked));
    }
  }
}
