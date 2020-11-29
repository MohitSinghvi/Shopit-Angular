import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../service/product.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  
  private id;
  public product;
  public suppliers;
  public isAdded=false;
  constructor(private route: ActivatedRoute,public productService:ProductService , private router:Router) { }

  getSupplier(){
    this.productService.getSupplierPriceStockByProductId(this.id).subscribe(
      (supplier)=>{
        this.suppliers=supplier["_embedded"]["namePriceStocks"];
        console.log(this.suppliers);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  ngOnInit(): void {

    // var user_id = localStorage.getItem("id");
    // console.log(user_id)
    this.route.params.subscribe( params =>  this.id=params["id"]);

    this.productService.getProductById(this.id).subscribe(
      (product)=>{
        this.product=product;
      },
      (error)=>{
        console.log(error);
      }
    )

    this.suppliers=this.getSupplier();

  }

  addToCart(supplier_id,qty){
    var user_id = localStorage.getItem("id");

    if(user_id!=null){
      var quantity=qty;
      console.log(user_id,this.id,supplier_id,quantity)
      this.productService.addToCart(user_id,this.id,supplier_id,quantity).subscribe(
        (p)=>{
          this.isAdded=true;
          this.router.navigate(['/cart'])
        }
      )
    }else{
      this.router.navigate(['/login'])
    }

  }

  

}
