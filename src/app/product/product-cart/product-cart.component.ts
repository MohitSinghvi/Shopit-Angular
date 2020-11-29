import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { ProductService } from './../../service/product.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  id=null;
  count=0;
  
  cart:any[];
  priceList:any[];

  total_price:number=0;
  cartEmpty=false;
  
  
  constructor(public productService:ProductService,private zone:NgZone, private router:Router) {
    this.id=localStorage.getItem("id");
   }

  ngOnInit(): void {
    this.showCart();
    this.id=localStorage.getItem("id");
    console.log(this.id);
    
  }

  showCart(){
    this.productService.getCartById(this.id).subscribe(
      (cart:any[])=>{

        this.zone.run(() => { 
          if(cart.length<1){
            this.cartEmpty=true;
            return;
          }
          this.cart=cart;
          var count=0;
          this.total_price=0;
          for(var cartItem of this.cart){
         
            this.total_price+=(cartItem["quantity"]*cartItem["price"]);
            
            // console.log(cartItem["price"])
           }
           
         
        });
      }

        
        // console.log(this.cart);
      
    )

  }

  removeFromCart(customer_id,item_id,supplier_id){
    this.productService.removeFromCart(customer_id,item_id,supplier_id).subscribe(
      ()=>{
        this.showCart();
      }
    );
    // console.log(customer_id,item_id,supplier_id)
    



  }

  myMethod(){
      
  }

  checkOut(){
    this.router.navigate(['/checkout'])
  }

  // orderNow(){
  //   let orderContents:any[]=[]
  //   for (const cartItem of this.cart) {
  //     let orderContent={
  //       "item_id":cartItem["item_id"],
  //       "supplier_id":cartItem["supplier_id"],
  //       "quantity":cartItem["quantity"]
  //     }
  //     orderContents.push(orderContent);
  //   }
  //   let order={
  //     "customer_id":this.id,
  //     // "date":"26/11/2020",
  //     "amount":this.total_price,
  //     "orderContents":orderContents
  //   }
  //   this.productService.addOrder(order).subscribe(
  //     ()=>{
  //       console.log("Order Added SuccessFully");
  //       this.productService.clearCart(this.id).subscribe(
  //         ()=>{
  //           console.log("Removed from cart")
  //           this.router.navigate(['/orders'])
  //         },
  //         (error)=>{
  //           console.log(error);
  //         }
  //       )
  //     },
  //     (error)=>{
  //       console.log(error)
  //     }
  //   )


  // }

}
