export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('movieslist', {
      url: '/movies',
      template: '<movies-list></movies-list>'
    })
    .state('moviesDetail', {
      url: '/movie-detail',
      template: '<movies-list></movies-list>'
    });

  $urlRouterProvider.otherwise('/');
}
