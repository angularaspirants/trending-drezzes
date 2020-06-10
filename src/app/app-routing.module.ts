import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MenListComponent } from './men/men-list/men-list.component';
import { WomenListComponent } from './women/women-list/women-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KidListComponent } from './kids/kid-list/kid-list.component';
import { KidlistItemComponent } from './kids/kid-list/kidlist-item/kidlist-item.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'men', component: MenComponent},
      {path: 'women', component: WomenComponent},
      {path: 'kids', component: KidsComponent},
      {path: 'deliveryinfo', component: DeliveryInfoComponent}
    ]}
];

@NgModule({
  declarations: [
    MenComponent,
    WomenComponent,
    KidsComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    MenListComponent,
    WomenListComponent,
    KidListComponent,
    KidlistItemComponent,
    DeliveryInfoComponent
    
  ],
  imports: [RouterModule.forRoot(routes), CommonModule, FormsModule],
  exports: [RouterModule, HomeComponent, HeaderComponent, FooterComponent, CommonModule]
})
export class AppRoutingModule { }``
