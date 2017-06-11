const tmdbBaseUrl = 'http://api.themoviedb.org/3';
const tmdbApiKey = '5192eb6331a3db50b6b388ae8941edc6';
const language = 'fr-FR';
const tmdbUrls = {
	base: tmdbBaseUrl,
	popular: `${tmdbBaseUrl}/movie/popular?api_key=${tmdbApiKey}&language=${language}`,
	topRated: `${tmdbBaseUrl}/movie/top_rated?api_key=${tmdbApiKey}&language=${language}`,
	upcoming: `${tmdbBaseUrl}/movie/upcoming?api_key=${tmdbApiKey}&language=${language}`,
	nowPlaying: `${tmdbBaseUrl}/movie/now_playing?api_key=${tmdbApiKey}&language=${language}`,
	search: `${tmdbBaseUrl}/search/movie?api_key=${tmdbApiKey}&language=${language}`
};
export class MovieService{

	/* @ngInject */
	constructor($http){
		this.$http = $http;
	}

	getPopularMovies(){
		return this.$http.get(tmdbUrls.popular);

	}

	searchByTitle(movieTitle){
		return this.$http.get('/url/searchmovies', {title: movieTitle});
	}
}