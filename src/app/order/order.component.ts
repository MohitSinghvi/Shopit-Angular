import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../service/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  id
  orders:any=[]
  constructor(private route: ActivatedRoute,public productService: ProductService ) {}

  ngOnInit(): void {

    this.id=localStorage.getItem("id");
    this.productService.getOrders(this.id).subscribe(
      (orders)=>{
        this.orders=orders;
        
      }
    )


  }

}
