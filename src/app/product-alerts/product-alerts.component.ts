import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; //the component accepts an input of type product
  constructor() { }

  ngOnInit() {
  }

  //My way
  // notify() {
  //   window.alert("You will be notified when this product is on sale.")
  // }

}