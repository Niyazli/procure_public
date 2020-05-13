import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../models/product.interface';
import {PRODUCTS} from '../../const/products.const';

@Component({
  selector: 'app-product-tab',
  template: `
    <div class="row justify-content-center" *ngIf="selectedProduct">
      <div class="col-auto border-right">
        <flexbox class="h-100" flexDirection="column" justifyContent="space-between">
          <flexbox flexDirection="column" justifyContent="space-between">
            <button
              *ngFor="let product of products"
              class="button-group"
              mat-stroked-button
              [ngClass]="{isActive: product.isActive}"
              (click)="handleSelectProduct(product)"
            >
              {{ product.name }}
            </button>
          </flexbox>
          <div class="text-center">
            <p>(+99412) 537-15-58</p>
            <p>Qurban Xəlilov 8, Bakı, Azərbaycan</p>
            <p>office@procure.az</p>
          </div>
        </flexbox>
      </div>
      <div class="col">
        <div class="mb-4" *ngFor="let info of selectedProduct.productInfo">
          <b>{{ info.title }}</b>
          <p>{{ info.description }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./product-tab.component.scss'],
})
export class ProductTabComponent implements OnInit {
  products: IProduct[];
  selectedProduct: IProduct;

  constructor() {}

  ngOnInit(): void {
    this.products = PRODUCTS;
    this.handleSelectProduct(this.products[0]);
  }

  handleSelectProduct(product: IProduct) {
    this.products.forEach(p => {
      p.isActive = p.id === product.id;
    });
    this.selectedProduct = this.products.find(p => p.isActive);
  }
}
