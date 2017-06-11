
import { moviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-detail/movie-details.component';
import { MovieService } from './movie.service';
import { IsAdult } from './movie-detail/is-adult.directive';



angular
	.module('moviesApp', [])
	.component('moviesList', moviesListComponent)
  .component('movieDetails', MovieDetailsComponent)
	.service('MovieService', MovieService)
  .directive('isAdult', () => new IsAdult);
