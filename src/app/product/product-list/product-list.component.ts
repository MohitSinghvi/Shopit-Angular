import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from './../../service/product.service';
import { ResultService } from './../../service/result.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  public productList: any[]; 

  constructor(public productService: ProductService,public resultService: ResultService) { }
  

  ngOnInit(): void {
    
      // this.productService.getAllProducts().subscribe(
      //   (products:any[])=>{

      //     this.resultService.setResult(products["_embedded"]["items"])
      //     // this.productList=this.resultService.getResult();
      //   },
      //   (error)=>{
      //     console.log(error);
      //   }
      // )
  }

  showProduct(){

  }

}

