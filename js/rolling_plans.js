// Получаем все элементы div с классом "rolling_plans_movies"
const movies = document.getElementsByClassName('rolling_plans_movies');

// Получаем кнопку
const button = document.getElementsByClassName('rolling_plans_btn')[0];

// Функция обработки события нажатия на кнопку
function toggleMovies() {
    // Проверяем, есть ли у пятого элемента класс "rolling_plans"
    const fifthMovieHasClass = movies[4].classList.contains('rolling_plans');
    
    if (!fifthMovieHasClass) {
        // Если у пятого элемента нет класса "rolling_plans",
        // добавляем его всем элементам
        for (let i = 0; i < movies.length; i++) {
            movies[i].classList.add('rolling_plans');
        }
    } else {
        // Иначе, удаляем класс "rolling_plans" у всех элементов, кроме первых 4
        for (let i = 4; i < movies.length; i++) {
            movies[i].classList.remove('rolling_plans');
        }
    }
}

// Назначаем обработчик события нажатия на кнопку
button.addEventListener('click', toggleMovies);