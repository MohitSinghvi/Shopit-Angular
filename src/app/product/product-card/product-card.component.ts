import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from './../../service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  // getMinPriceById(id){
  //   let minPrice
  //   this.productService.getMinPriceByItemId(id).subscribe(
  //     (price)=>{
  //       minPrice=price;
  //       return minPrice;
  //     }
  //   );
  // }
}

