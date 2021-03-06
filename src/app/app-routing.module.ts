import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { MurderByZombieComponent } from "./movies/murder-by-zombie/murder-by-zombie.component";
import { MoviesComponent } from "./pages/movies/movies.component";

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/murder-by-zombie',
    component: MurderByZombieComponent
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
