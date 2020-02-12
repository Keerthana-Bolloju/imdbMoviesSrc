import { Component, OnInit } from '@angular/core';
import { Imdb } from 'src/app/model/imdb';
import { Subscription } from 'rxjs';
import { ImdbService } from 'src/app/service/imdb.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public allMovies:Imdb[];
  public inputString:String = '';  
  public pageNo:number = 1;
  public filtered:number
  public length:number;
  public subscription:Subscription;
  public loader:Boolean = true;
  public sortString:string = "";
  constructor(private IMDB_SERVICE:ImdbService) { }

  ngOnInit() {
   this.loader = true;
   this.subscription = this.IMDB_SERVICE.getAllMovies().subscribe(
      data => {
        this.allMovies = data;
        this.loader = false;
      }
    )
  }

  searchBy(){
    if(this.inputString != ''){
      this.allMovies = this.allMovies.filter(res => {
        return (res.movie_title.toLocaleLowerCase().match(this.inputString.toLocaleLowerCase()) 
        ||res.genres.toLocaleLowerCase().match(this.inputString.toLocaleLowerCase())  )  
      })            
      this.length = this.allMovies.length
    }else if(this.inputString == ''){
      this.allMovies = []
      this.ngOnInit()
    }
  }
  sortByBudget(sort:string){
    this.sortString = sort
    this.allMovies.sort((a,b)=>{
      return b.budget.localeCompare(a.budget)
    })

  }
  sortByYear(sort:string){
    this.sortString = sort
    this.allMovies.sort((a,b)=>{
      return b.title_year.localeCompare(a.title_year)
    })
  }
  
  sortByRating(sort:string){
    this.sortString = sort
    this.allMovies.sort((a,b)=>{
      return b.content_rating.localeCompare(a.content_rating)
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
