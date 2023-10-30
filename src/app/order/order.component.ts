import { UtilityService } from './../services/utility.service';
import { NavigationService } from './../services/navigation.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PaymentMethod } from '../models/models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  selectedPaymentMethodName = 'a';
  selectedPaymentMethod = new FormControl('0');

  paymentMethods: PaymentMethod[] = [];

  constructor(
    private navigationService: NavigationService,
    public utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.selectedPaymentMethod.valueChanges.subscribe((res: any) => {
      if (res === '0') this.selectedPaymentMethodName = '';
      else this.selectedPaymentMethodName = res.toString();
    });
  }
}
