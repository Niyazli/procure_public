import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CpvCodeModel} from '../../models/cpv-tree.model';
import {tap} from 'rxjs/operators';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-expansion-cpv-tree',
  templateUrl: './expansion-cpv-tree.component.html',
  styleUrls: ['./expansion-cpv-tree.component.scss'],
})
export class ExpansionCpvTreeComponent implements OnChanges, OnInit {
  @Input() multiple: boolean;
  @Input() hideHeader: boolean;
  @Input() staticWidth: boolean;
  @Input() expanded: boolean;
  @Input() fullHeight: boolean;
  @Input() newCategory: boolean;
  @Input() selectedCategories: number[] = [];
  @Output() selectedCategory = new EventEmitter();
  @Input() title: string;
  @Input() listHeight: string;
  keyword: string;
  loadingState: boolean;
  categories: CpvCodeModel[];

  constructor(private categoryService: CategoryService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.title) {
      this.title = 'CPV tree list';
    }
    this.getData();
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loadingState = true;
    if (!this.newCategory) {
      this.categoryService.getParent().subscribe(
        (r: CpvCodeModel[]) => {
          console.log(r);
          this.loadingState = false;
          r.forEach(c => (c.hasChild = true));
          if (this.selectedCategories && this.selectedCategories.length > 0) {
            this.categories = r.map((c: CpvCodeModel) => {
              return {...c, checked: this.selectedCategories.includes(c.id)};
            });
          } else {
            this.categories = r;
          }
        },
        error => (this.loadingState = false)
      );
    } else {
      this.categoryService.getInternalCategories().subscribe(
        (r: CpvCodeModel[]) => {
          this.loadingState = false;
          this.categories = r.map(c => {
            c.subCategories = c.subCategories.map(sc => {
              return {...sc, checked: this.selectedCategories.includes(sc.id), collapsed: false};
            });
            return {...c, hasChild: c.subCategories.length > 0, checked: this.selectedCategories.includes(c.id), collapsed: false};
          });
        },
        error => (this.loadingState = false)
      );
    }
  }
  getChild(category: CpvCodeModel) {
    if (!this.newCategory) {
      this.loadingState = true;
      if (category.subCategories === null || category.subCategories.length === 0) {
        this.categoryService.getChild(category.id).subscribe(
          (r: CpvCodeModel[]) => {
            this.loadingState = false;
            if (this.selectedCategories && this.selectedCategories.length > 0) {
              [...category.subCategories] = r.map((c: CpvCodeModel) => {
                return {...c, checked: this.selectedCategories.includes(c.id)};
              });
            } else {
              [...category.subCategories] = r;
            }
          },
          error => (this.loadingState = false)
        );
      } else {
        this.loadingState = false;
        [...category.subCategories] = [];
      }
    }
  }

  filterCategories() {
    if (this.keyword !== '') {
      this.categoryService
        .filterCategories(this.newCategory ? 'internalCategory/SearchInternalCategories' : 'category/SearchInCategories', {
          keyword: this.keyword,
          pageNumber: 1,
          pageSize: 100,
          active: false,
        })
        .subscribe((res: any) => {
          console.log(res);
          this.newCategory ? (this.categories = res.internalCategories) : (this.categories = res.cpvCodes);
        });
    } else {
      this.getData();
    }
  }
}
