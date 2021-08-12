import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingDetailComponent } from './shopping-cart/shopping-details/shopping-details.component';
import { AppLoading } from './loading/loading.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingCartComponent,
    ShoppingDetailComponent,
    AppLoading
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    HttpClientModule,
    TooltipModule,
    ModalModule,
    FormsModule ,
    FontAwesomeModule,
    RouterModule,
    // RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ProductService,
    ShoppingCartService,
  ],
  exports: [RouterModule, BsDropdownModule, TooltipModule, ModalModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
