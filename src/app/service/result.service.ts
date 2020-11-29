import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable()
export class ResultService {

  result:any[]
  constructor(private productService: ProductService) { }

  setResult(result){
    this.result=result;
  }

  getResult(){
    return this.result;
  }
}
