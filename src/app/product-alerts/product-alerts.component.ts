import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
})
export class ProductAlertsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input() product!: Product;

  // @Output() allows the ProductAlertsComponent to emit an event when
  // the value of the notify property changes.
  @Output() notify = new EventEmitter();
}
