import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../service/product.service';
import { ResultService } from './../service/result.service';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public allProduct: any[]; 

  constructor(private productService:ProductService,public resultservice: ResultService,private router: Router,public authService: AuthService,public resultService:ResultService) { }
  ngOnInit(): void {
  }

  showResults(name:string){
    this.productService.getProductsByName(name).subscribe(
      (products:any[])=>{


        this.resultservice.setResult(products["_embedded"]["items"]);
        this.router.navigate(['/'])
      },
      (error)=>{
        console.log(error);
      }
    )

  }
goHome(){
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

