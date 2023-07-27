import { Injectable } from '@angular/core';
import { MovieDetails } from './movie-details';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import axios from 'axios';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movieDetailslist!: MovieDetails[];
  movieIdList: String[];
  apiData: any;

  // headers = {
  //   'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
  //   'X-RapidAPI-Key': '075f3dea9amsh67dc0345ab4dca7p12876fjsn7e67cc15cdc2',
  // };

  constructor(private http: HttpClient) {
    this.movieIdList = [
      'tt0468569',
      'tt7286456',
      'tt0110912',
      'tt0111161',
      'tt0068646',
      'tt0109830',
      'tt1375666',
      'tt0133093',
      'tt0816692',
      'tt0088763',
      'tt1853728',
      'tt0407887',
      'tt0482571',
      'tt4633694',
    ];
  }

  async getBasicData(): Promise<any> {
    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids',
      params: {
        idsList: this.movieIdList.join(', '),
      },
      headers: {
        'X-RapidAPI-Key': '075f3dea9amsh67dc0345ab4dca7p12876fjsn7e67cc15cdc2',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  getAllMovies(): Promise<MovieDetails[]> {
    return this.getBasicData().then((response: any) => {
      this.movieDetailslist = response.data.results.map((movie: any) => {
        return {
          id: movie.id,
          name: movie.originalTitleText.text,
          imagesrc: movie.primaryImage.url,
          // description: movie.primaryImage.caption.plainText,
        };
      });

      return this.movieDetailslist;
    });
  }

  async getMoreDetails(id: string): Promise<any> {
    const options = {
      method: 'GET',
      url: 'https://online-movie-database.p.rapidapi.com/title/get-overview-details',
      params: {
        tconst: id,
        currentCountry: 'US',
      },
      headers: {
        'X-RapidAPI-Key': '075f3dea9amsh67dc0345ab4dca7p12876fjsn7e67cc15cdc2',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  getMoviebyId(id: string): Promise<any> {
    let movieDetails: any = this.movieDetailslist.find(
      (movieDetails) => movieDetails.id === id
    );
    return this.getMoreDetails(id).then((moreDetails: any) => {
      movieDetails.description = moreDetails.plotOutline.text;
      movieDetails.rating = moreDetails.ratings.rating;
      movieDetails.genre = moreDetails.genres.join(', ');
      return movieDetails;
    });
  }
}
