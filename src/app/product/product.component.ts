import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/models';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() view: 'grid' | 'list' | 'currcartitem' | 'prevcartitem' = 'grid';
  @Input() product: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    quantity: 0,
    productCategory: {
      id: 1,
      category: '',
      subcategory: '',
    },
    offer: {
      id: 1,
      title: '',
      discount: 0,
    },
    imagename: '',
  };

  constructor(public utilityService: UtilityService) {}

  ngOnInit(): void {}
}
