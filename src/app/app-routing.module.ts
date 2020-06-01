import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WomenListComponent } from './women/women-list/women-list.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'men', component: MenComponent},
      {path: 'women', component: WomenComponent},
      {path: 'kids', component: KidsComponent}
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
    WomenListComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, HomeComponent, HeaderComponent, FooterComponent]
})
export class AppRoutingModule { }
