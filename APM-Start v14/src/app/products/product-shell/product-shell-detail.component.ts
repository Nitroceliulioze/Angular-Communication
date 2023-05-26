import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-shell-detail',
  templateUrl: './product-shell-detail.component.html',
})
export class ProductShellDetailComponent implements OnInit, OnDestroy {
  pageTitle = 'Product Detail';

  // Need to handle null to allow for no selected product.

  product!: IProduct | null;
  sub!: Subscription;

  errorMessage = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.sub = this.productService.selectedProductChanges$.subscribe(
      (selectedProduct) => (this.product = selectedProduct)
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
