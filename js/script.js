"use strict";

let NumberOfFilms ;

function start (){
    NumberOfFilms = +prompt("Сколько фильмов вы посмотрели?", " ");

    while(NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)){
        NumberOfFilms = +prompt("Сколько фильмов вы посмотрели?", " ");
    }
}

//start();

const personalMoveDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function remamberMyFilms(){
    for(let i=0; i<2; i++){
        let a = prompt('Один из последних просмотренных фильмов?', ""),
        b = prompt('Оцените его из 10', "");
        
        if(a != null && b != null && a != "" && b != "" && a.length < 50 && b <= 10){
            personalMoveDB.movies[a] = b;
            alert('УДАЧНО!');
        }else{
            alert('Ответ не правильный');
            i--;
        };
    
    }
}

//remamberMyFilms();

function detectPersonalLevel (){
    if(personalMoveDB.count < 10){
        console.log("Просмотренно давольно мало фильмов");
    } else if(personalMoveDB.count >= 10){
        console.log("Вы классический зритель");
    } else if(personalMoveDB.count >= 30){
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

//detectPersonalLevel ();

function showMyDB() {
    if(personalMoveDB.privat == false){
        console.log(personalMoveDB);
    }
}
showMyDB();

function writeYourGenres(){
    for(let i=1; i<=3; i++){
        personalMoveDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

