import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(public myService: ApiService) {}
  ngOnInit(): void {
    this.showAll();
    
  this.getAllCategories()
  }

  public foodList: any;
  public categoryList: any
  public sicxare: string = "";
  public txili: string = "";
  public vegetarianuli: string = ""

  filterFoods() {
    // console.log(this.sicxare);
    // console.log(this.txili);
    // console.log(this.vegetarianuli);
    if (this.sicxare == "-1") {
      this.sicxare = ""
    }
    this.myService.filterProducts(this.sicxare, this.txili, this.vegetarianuli).subscribe(data => {
      console.log(data);
      this.foodList = data
      
    })
    
  }

  showAll() {
    this.myService.getAllFoods().subscribe((data) => {
      console.log(data);
      this.foodList = data;
    });
  }

  getAllCategories() {
    this.myService.getCategories().subscribe(lists => {
  console.log(lists);
    this.categoryList = lists
    })
  }

  showByCategory(foodId: any) {
  this.myService.getProductsByCategory(foodId).subscribe((data:any) => {
    console.log(data.products);
    this.foodList = data.products
    
  })
  
  }


  addToCart(produdNumber: any, foodPrice: any) {
    let userPrompt = Number(prompt("შეიყვანეთ რაოდენობა")) 
   
    
    this.myService.postFood({
      quantity: userPrompt,
      price: foodPrice,
      productId: produdNumber,
    }).subscribe(pasuxi => {
      alert("პროდუქტი წარმატებით დაემატა")
    });
   }
}


// function test(foodId) {
//   console.log(foodId);
  
// }


// test(8)