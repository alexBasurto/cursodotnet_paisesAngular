import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PaisesComponent } from './paises/paises.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    PaisesComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaginasModule { }
