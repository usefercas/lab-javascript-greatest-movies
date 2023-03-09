// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let newMoviesArray = moviesArray.map(movie => {
    return movie.director;
  });
  return newMoviesArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter((movie) => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  }).length;
}

// Iteration 3:  All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

  if (moviesArray.length === 0) {
    return 0;
  }

  let sumatorioDeTodasLasPelis = moviesArray.reduce((sum, movie) => {
    let scoreActual = 0;
    if (typeof movie.score != 'string' && movie.score != undefined) {
      scoreActual = movie.score;
    }
    return sum + scoreActual;
  }, 0);

  let response = sumatorioDeTodasLasPelis / moviesArray.length;
  if (response % 1 == 0) {
    return response;
  } else {
    return Number(response.toFixed(2));
  }
}


scoresAverage([{ score: 6 }, { score: '' }, {}]);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let contadorDramas = 0;
  let sumaDelaPuntuacionDeLasPeliculasDrama = moviesArray.reduce((sum, movie) => {
    let scoreActual = 0;
    if (typeof movie.score != 'string' && movie.score != undefined) {
      if (movie.genre.includes("Drama")) {
        console.log("Generos de la actual pel" + movie.genre);
        scoreActual = movie.score;
        contadorDramas += 1;
      }
    }

    return sum + scoreActual;
  }, 0);

  if (contadorDramas === 0) {
    return 0;
  }

  return Number((sumaDelaPuntuacionDeLasPeliculasDrama / contadorDramas).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

  let peliculasOrdenadasDeMayorAMenor = moviesArray.sort((movie1, movie2) => {
    // Ordena por año
    // Si el primer año tiene mayor numero, se mueve para arriba
    if (movie1.year > movie2.year) return 1;
    // Si el primer año tiene menor numero se mueve para abajo
    if (movie1.year < movie2.year) return -1;

    // Si ambos son iguales no se cumple nada de arriba y ordenamos alfabeticamente por titulo
    // Si movie 1 viene primero en el alfabeto la subimos
    if (movie1.title > movie2.title) return 1;
    // si movie 2 viene segunda en el alfabeto la bajamos
    if (movie1.title < movie2.title) return -1;
  });

  let arrayCopia = [...peliculasOrdenadasDeMayorAMenor];

  arrayCopia.forEach(element => console.log("Elemento nombre -> " + element.name + " Elemento año" + element.year));

  return arrayCopia;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  let alfabeticamenteOrdenado = moviesArray.sort((movie1, movie2) => {

    // Si ambos son iguales no se cumple nada de arriba y ordenamos alfabeticamente por titulo
    // Si movie 1 viene primero en el alfabeto la subimos
    if (movie1.title > movie2.title) return 1;
    // si movie 2 viene segunda en el alfabeto la bajamos
    if (movie1.title < movie2.title) return -1;
  }).map(movie => movie.title);

  if(alfabeticamenteOrdenado.length > 20) {
    alfabeticamenteOrdenado = alfabeticamenteOrdenado.slice(0,20);
  }

  let arrayCopia = [...alfabeticamenteOrdenado];

  arrayCopia.forEach(element => console.log("Elemento nombre -> " + element.name + " Elemento año" + element.year));

  return arrayCopia;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
