import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InitialPageComponent } from './page/initial-page/initial-page.component';
import { INITIAL_PAGE_ROUTES } from './initial-page.routing';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    InitialPageComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(INITIAL_PAGE_ROUTES),
    HttpClientModule
  ]
})
export class InitialPageModule { }
