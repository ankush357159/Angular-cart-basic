import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: any
  constructor(private api: ApiService, private cartService: CartService) { }

  // ngOnInit() is a place to put the code that we need to execute at very first as soon as the class is instantiated.
  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res => {
      this.productList = res

      this.productList.forEach((a:any) => {
        Object.assign(a, {quantity: 1, total:a.price})
        
      });
    })
  }
  addtocart(item:any) {
    this.cartService.addToCart(item)


  }

}
