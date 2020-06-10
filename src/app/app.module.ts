import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { CartItemService } from './shared/cart-item.service';




@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [CartItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }


