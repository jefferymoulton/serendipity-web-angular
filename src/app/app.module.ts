import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './shared/footer/footer.component';
import { MoviesModule } from "./movies/movies.module";
import { PagesModule } from "./pages/pages.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PagesModule,
    MoviesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
