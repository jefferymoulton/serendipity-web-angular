import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";
import { PagesHeaderComponent } from "./pages-header/pages-header.component";
import { CarouselComponent } from "./home/carousel/carousel.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "../app-routing.module";
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    PagesHeaderComponent,
    CarouselComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    NgbModule,
  ]
})
export class PagesModule { }
