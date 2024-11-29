import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  loading: any;

  constructor(public http: HttpClient) { }

  getAllFoods() {
   return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  postFood(body: any) {
    return this.http.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", body, {responseType: "text"})
  }

  getCartList() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }

  deleteproduct(id: any) {
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`, {responseType: "text"})
  }

  filterProducts(sicxare: any, txileuloba: any, vegetarian: any) {
    return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${vegetarian}&nuts=${txileuloba}&spiciness=${sicxare}`)
  }

  getCategories () {
    return this.http.get("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  }

  getProductsByCategory(id: any) {
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
  }
}
