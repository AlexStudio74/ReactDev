"use strict";

const NumberOfFilms = +prompt("Сколько фильмов вы посмотрели?", " ");
const personalMoveDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i=0; i<2; i++){
    let a = prompt('Один из последних просмотренных фильмов?', ""),
    b = prompt('Оцените его из 10', "");
    
    if(a != null && b != null && a != "" && b != "" && a.length < 50 && b <= 10){
        personalMoveDB.count[a] = b;
        alert('УДАЧНО!');
    }else{
        alert('Ответ не правильный');
        i--;
    };

    if(personalMoveDB.movies){
        
    }
};

console.log(personalMoveDB);