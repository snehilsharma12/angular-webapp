import { Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieInfoComponent} from './movie-info/movie-info.component';

const routeConfig: Routes = [
    {
      path: '',
      component: MovieComponent,
      title: 'Home page'
    },
    {
      path: 'movieinfo/:id',
      component: MovieInfoComponent,
      title: 'Movie Info'
    }
  ];
  
  export default routeConfig;