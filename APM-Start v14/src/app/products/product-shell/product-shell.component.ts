import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './product-shell.component.html',
})
export class ProductShellComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Products';
  monthCount!: number;
  sub!: Subscription;

  constructor(private productService: ProductService) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit() {
    this.sub = this.productService.selectedProductChanges$.subscribe(
      (selectedProduct) => {
        if (selectedProduct) {
          const start = new Date(selectedProduct.releaseDate);
          const now = new Date();
          this.monthCount =
            now.getMonth() -
            start.getMonth() +
            12 * (now.getFullYear() - start.getFullYear());
        } else {
          this.monthCount = 0;
        }
      }
    );
  }
}
