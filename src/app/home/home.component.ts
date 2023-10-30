import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  suggestedProducts: SuggestedProduct[] = [
    {
      bannerImage: 'Banner/Banner_Mobile.png',
      category: {
        id: 0,
        category: 'electronics',
        subcategory: 'mobiles',
      },
    },
    {
      bannerImage: 'Banner/Banner_Laptop.png',
      category: {
        id: 1,
        category: 'electronics',
        subcategory: 'laptops',
      },
    },
    {
      bannerImage: 'Banner/Banner_Chair.png',
      category: {
        id: 2,
        category: 'furniture',
        subcategory: 'chairs',
      },
    },
    {
      bannerImage: 'Banner/Banner_Table.png',
      category: {
        id: 3,
        category: 'furniture',
        subcategory: 'tables',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
