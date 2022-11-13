import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  items: Product[] = [];

  addChart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  deleteChart() {
    this.items = [];
    return this.items;
  }
  constructor() {}
}
