import { Component, Inject, Input, inject } from '@angular/core';
import { MovieDetails } from 'src/app/movie-details';
import { MoviesService } from 'src/app/movies.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-info-modal',
  templateUrl: './movie-info-modal.component.html',
  styleUrls: ['./movie-info-modal.component.scss'],
})
export class MovieInfoModalComponent {
  // @Input() public movieDetails!: MovieDetails;
  // @Input() public movieDetails: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public movieDetails: MovieDetails,
    public movieService: MoviesService
  ) {}

  ngOnInit() {
    let movieId: string;
    console.log(this.movieDetails);
    movieId = this.movieDetails.id;
    this.getMovieDetails(movieId);
  }

  async getMovieDetails(movieId: string) {
    this.movieDetails = await this.movieService.getMoviebyId(movieId);
  }
}
