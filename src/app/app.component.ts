import { Component } from '@angular/core';
import { ProductService } from './service/product.service';
import { ResultService } from './service/result.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopit';
  constructor(public productService: ProductService,public resultService: ResultService) { 
  }
  ngOnInit(): void {

    
    this.productService.getAllProducts().subscribe(
      (products:any[])=>{

        this.resultService.setResult(products["_embedded"]["items"])
        // this.productList=this.resultService.getResult();
      },
      (error)=>{
        console.log(error);
      }
    )
}
}


