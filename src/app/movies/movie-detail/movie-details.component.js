export const MovieDetailsComponent = {
  bindings : {
    movie: '='
  },
  templateUrl : './app/movies/movie-detail/movie-details.template.html',
  controller : class MovieDetailController{
    /* @ngInject */
    constructor(){
      this.formatedTitle = "BATMAN";
    }

    getReleaseYear(){
      return 2017;
    }
  },
  controllerAs : 'mvctr'
}
