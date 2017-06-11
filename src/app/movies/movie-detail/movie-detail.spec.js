'use strict';

describe('movieDetails', function(){
  var movieDetailsController;
  beforeEach(angular.mock.module('moviesApp'));

  beforeEach(inject(function($componentController) {
    movieDetailsController = $componentController('movieDetails', null, {movie: {title: 'batman', release_date: "2017-03-16"}});
  }));

  it('should have movie param well binded', function() {
    expect(movieDetailsController.movie).toBeDefined();
    expect(movieDetailsController.movie).toEqual({title: 'batman', release_date: "2017-03-16"});
    expect(movieDetailsController.formatedTitle).toBe('BATMAN');
    expect(movieDetailsController.getReleaseYear()).toBe(2017);
  })



});
