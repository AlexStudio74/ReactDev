"use strict";

//alert('жопа');

const NumberOfFilms = +prompt("Сколько фильмов вы посмотрели?", " ");

const personalMoveDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('Оцените его из 10', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Оцените его из 10', '');

personalMoveDB.movies[a] = b;
personalMoveDB.movies[c] = d;

console.log(personalMoveDB);