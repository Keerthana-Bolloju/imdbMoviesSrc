import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImdbService } from './service/imdb.service';
import { ImdbMoviesComponent } from './imdb-movies/imdb-movies.component';
import { MovieListComponent } from './imdb-movies/movie-list/movie-list.component';
import { MovieListCardComponent } from './imdb-movies/movie-list/movie-list-card/movie-list-card.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ImdbMoviesComponent,
    MovieListComponent,
    MovieListCardComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [ImdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
