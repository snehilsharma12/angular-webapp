import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MovieDetails } from '../movie-details';
import { MoviesService } from '../movies.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { MovieInfoModalComponent } from '../modals/movie-info-modal/movie-info-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie',
  standalone: false,
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  movieDetailsList: MovieDetails[] = [];

  constructor(public moviesService: MoviesService, public dialog: MatDialog) {
    this.getMovieData();
  }

  async getMovieData(): Promise<void> {
    if (this.movieDetailsList.length == 0) {
      this.movieDetailsList = await this.moviesService.getAllMovies();
    }
  }

  open(content: MovieDetails) {
    let modalRef = this.dialog.open(MovieInfoModalComponent, {
      data: content,
      width: 'max-content',
      panelClass: 'custom-container',
    });
  }
}
