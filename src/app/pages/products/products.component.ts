import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ProductInterface } from './interfaces/product.interface';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{
  products!: ProductInterface[];
  onAction1: any;

  constructor(private productObj: ProductService){}
  ngOnInit(): void {
    this.productObj.getProductos().pipe( tap((products: ProductInterface[]) => this.products = products) ).subscribe();
  }
}
