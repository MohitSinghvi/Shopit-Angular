import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultService } from './service/result.service';
import { ShowProductComponent } from './show-product/show-product.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ProductCartComponent } from './product/product-cart/product-cart.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';

const appRoutes: Routes  = [
  {path : '', component: ProductListComponent},
  {path : 'show/:id', component: ShowProductComponent},
  {path : 'login', component: LoginComponent},
  {path : 'cart', component: ProductCartComponent},
  {path : 'orders', component: OrderComponent},
  {path : 'checkout',component:OrderCheckoutComponent  }
]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    NavbarComponent,
    ShowProductComponent,
    LoginComponent,
    ProductCartComponent,
    OrderComponent,
    RegisterComponent,
    OrderCheckoutComponent

  ],
  imports: [
  

  BrowserModule,HttpClientModule,RouterModule.forRoot(appRoutes),CommonModule,FormsModule
  ],
  providers: [
    

    ResultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
