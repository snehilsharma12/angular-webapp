import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor(private movieService: MoviesService){

  };

  title = 'Movies';

  // ngOnInit(){
  //   this.movieService.getData();
  // }

}
