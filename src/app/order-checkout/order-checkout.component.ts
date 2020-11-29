import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './../service/customer.service';
import { ProductService } from './../service/product.service';

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.css']
})
export class OrderCheckoutComponent implements OnInit {


  customer;
  cart:any[]=[];
  id;
  total_price;
  
  constructor(public customerService: CustomerService,public productService:ProductService,public router:Router) { }

  ngOnInit(): void {
    this.id=localStorage.getItem("id");
    this.customerService.findCustomerById(localStorage.getItem("id")).subscribe(
      (result)=>{
        this.customer=result;
        this.showCart();
      }
    )
    console.log(this.customer);
    
  }
  
  handleSubmit(phone,address){
    this.customer.phone=phone;
    this.customer.address=address;
    this.customerService.updateAddressAndPhone(this.customer).subscribe(
      (customer)=>{
        this.customer=customer;
        this.orderNow()
        console.log("Finished")
      }
    );
    
  }

  showCart(){
    this.productService.getCartById(this.id).subscribe(
      (cart:any[])=>{

        // this.zone.run(() => { 
          if(cart.length<1){
            // this.cartEmpty=true;
            return;
          }
          this.cart=cart;
          var count=0;
          this.total_price=0;
          for(var cartItem of this.cart){
         
            this.total_price+=(cartItem["quantity"]*cartItem["price"]);
            
            // console.log(cartItem["price"])
           }
           
         
        // });
      }

        
        // console.log(this.cart);
      
    )

  }


  orderNow(){
    let orderContents:any[]=[]
    for (const cartItem of this.cart) {
      let orderContent={
        "item_id":cartItem["item_id"],
        "supplier_id":cartItem["supplier_id"],
        "quantity":cartItem["quantity"]
      }
      orderContents.push(orderContent);
    }
    let order={
      "customer_id":this.id,
      // "date":"26/11/2020",
      "amount":this.total_price,
      "orderContents":orderContents
    }
    this.productService.addOrder(order).subscribe(
      ()=>{
        console.log("Order Added SuccessFully");
        this.productService.clearCart(this.id).subscribe(
          ()=>{
            console.log("Removed from cart")
            this.router.navigate(['/orders'])
          },
          (error)=>{
            console.log(error);
          }
        )
      },
      (error)=>{
        console.log(error)
      }
    )


  }

}
