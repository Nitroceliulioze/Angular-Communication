import { Component, OnDestroy, OnInit } from '@angular/core';

import { IProduct } from '../product';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-shell-list',
  templateUrl: './product-shell-list.component.html',
})
export class ProductShellListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Products';
  products: IProduct[] = [];
  errorMessage: string = '';
  selectedProduct!: IProduct | null;
  sub!: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.sub = this.productService.selectedProductChanges$.subscribe(
      (selectedProduct) => (this.selectedProduct = selectedProduct)
    );

    this.productService.getProducts().subscribe({
      next: (products) => (this.products = products),
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
  onSelected(product: IProduct) {
    this.productService.changeSelectedProduct(product);
  }
}
