"use strict";


const personalMoveDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMoveDB.count = +prompt("Сколько фильмов вы посмотрели?", " ");
    
        while(personalMoveDB.count == '' || personalMoveDB.count == null || isNaN(personalMoveDB.count)){
            personalMoveDB.count = +prompt("Сколько фильмов вы посмотрели?", " ");
        }
    },
    remamberMyFilms: function(){
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
    },
    detectPersonalLevel: function(){
        if(personalMoveDB.count < 10){
            console.log("Просмотренно давольно мало фильмов");
        } else if(personalMoveDB.count >= 10){
            console.log("Вы классический зритель");
        } else if(personalMoveDB.count >= 30){
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if(!hidden){
            console.log(personalMoveDB);
        }
    },
    writeYourGenres: function(){
        for(let i=1; i<=3; i++){
            const mes = prompt(`Ваш любимый жанр под номером ${i}`);
            if (mes==""||mes==null) {
                console.log(`Произошла ошибка введите жанр под номером ${i} ещё раз`);
                i--;
            } else {
                personalMoveDB.genres[i-1] = mes;
            }
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMoveDB.privat){
            personalMoveDB.privat = false;
        }else{
            personalMoveDB.privat = true;
        }
    }
    
};


