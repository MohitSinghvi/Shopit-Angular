import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string='http://localhost:8080/items';
  constructor(private httpClient: HttpClient) { }
  
  public getAllProducts(){
    return this.httpClient.get(this.url);
  }

  public getProductsByName(name:string){
    return this.httpClient.get(this.url+"/search/findByNameContaining?name="+name);
  }

  public getProductById(id){
    return this.httpClient.get(this.url+"/"+id);
  }

  public getProductByLink(link){
    return this.httpClient.get(link);
  }

  public getSupplierPriceStockByProductId(id){

    return this.httpClient.get(this.url+"/search/getSupplierPriceByid?id="+id);
  }

  public getCartById(id){
    return this.httpClient.get('http://localhost:8080/getCart/'+id);
  }

  public getItemSupplier(item_id,supplier_id){
    return this.httpClient.get(this.url+"/search/findByItemAndSupplier?item_id="+item_id+"supplier_id="+supplier_id);
  }
  
  public getPriceByDetails(item_id,supplier_id){
    return this.httpClient.get('http://localhost:8080'+"/getPrice/"+item_id+"/"+supplier_id);
  }

  public addToCart(customer_id,item_id,supplier_id,quantity){
    return this.httpClient.post('http://localhost:8080/addToCart', {
      "customer_id": customer_id,
      "item_id": item_id,
      "supplier_id":supplier_id,
      "quantity": quantity
    })
  }

  public removeFromCart(customer_id,item_id,supplier_id){
    return this.httpClient.post('http://localhost:8080/removeFromCart', {
      "customer_id": customer_id,
      "item_id": item_id,
      "supplier_id":supplier_id,
      
    })
  }

  public addOrder(order){
    return this.httpClient.post('http://localhost:8080/addOrder', {
      "customer_id": order["customer_id"],
      "date":order["date"],
      "amount":order["amount"],
      "orderContents":order["orderContents"]
    })
  }

  public clearCart(customer_id){
    return this.httpClient.delete('http://localhost:8080/clearCart/'+customer_id);
  }


  public getOrders(customer_id){
    return this.httpClient.get('http://localhost:8080'+"/getOrders/"+customer_id);
    
  }

  public getMinPriceByItemId(prod_id){
    return this.httpClient.get('http://localhost:8080'+"items/search/getMinPriceByItemId?id="+prod_id);
  }

}
