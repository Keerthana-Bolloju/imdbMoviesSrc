import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImdbMoviesComponent } from './imdb-movies/imdb-movies.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:ImdbMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
