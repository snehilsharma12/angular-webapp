import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetails } from '../movie-details';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  standalone: false,
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent {
  movieId: string;
  route: ActivatedRoute = inject(ActivatedRoute);
  moviesService = inject(MoviesService);
  movieDetails: MovieDetails | any;

  movieID = -1;
  constructor() {
    this.movieId = this.route.snapshot.params['id'];
    this.getMovieDetails();
  }

  async getMovieDetails() {
    this.movieDetails = await this.moviesService.getMoviebyId(this.movieId);
  }
}
