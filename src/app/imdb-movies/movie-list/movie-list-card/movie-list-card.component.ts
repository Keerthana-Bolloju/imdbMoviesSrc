import { Component, OnInit, Input } from '@angular/core';
import { Imdb } from 'src/app/model/imdb';

@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.css']
})
export class MovieListCardComponent implements OnInit {
  @Input() moviesData:Imdb[];
  @Input() index:number;
  constructor() { }

  ngOnInit() {
  }

}
