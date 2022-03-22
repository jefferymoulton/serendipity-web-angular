import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieHeaderComponent } from "./movie-header/movie-header.component";
import { MurderByZombieComponent } from "./murder-by-zombie/murder-by-zombie.component";

@NgModule({
  declarations: [
    MovieHeaderComponent,
    MurderByZombieComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class MoviesModule { }
