import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(public api: ApiService) {}
  ngOnInit(): void {
    this.showCartFoods()
  }

  public cartList: any


  showCartFoods() {
    this.api.getCartList().subscribe(data => {
      console.log(data);
      this.cartList = data
      
    })
  }

  deleteMyFood(id: any) {
    this.api.deleteproduct(id).subscribe(data => {
      alert("პროდუქტი წარმატებით წაიშალა")
      this.showCartFoods()
    })
    
    
  }

}
