import { MovieService } from '../movie.service';
export const moviesListComponent = {
  bindings: {
  },
  templateUrl: 'app/movies/movies-list/movies-list.template.html',
  controller: class moviesListController {
    /* @ngInject */
    constructor (MovieService) {
      this.MovieService = MovieService;
      this.movies = [];
      this.init();
    }
    init(){
      this.MovieService.getPopularMovies().then((response) => {
      this.movies = response.data.results;
    })

      this.movie = MovieService.selectedMovie;
    }
    showDetails(movie){
      this.selectedMovie = movie;
    }

    /*getMovie(id) {
    	this.MovieService.getMovie(id).then(response => response.data);
    	this.MovieService.getMovie(id).then((response) => {
    		return response.data;
    	});
    	if(test) {
    		var x = 10;
    	}
    }*/
  }
}
