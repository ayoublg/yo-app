/**
 * Created by Ayoub on 09/05/2017.
 */
export class IsAdult{
  constructor() {
    this.templateUrl = './app/movies/movie-detail/is-adult.template.html';//
    this.restrict = 'E';
    this.scope = {
      mov: '='
    };
    this.compile = function() {
      console.log('state ll2', this.scope.mov.popularity);
    };
  }

}
