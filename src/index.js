const API_KEY = '29274974-75b7ad93639b97858ba53233b';
const axios = require('axios');

const inputEl = document.querySelector('input');
const galleryEl = document.querySelector('.gallery');

let currentPage = 1;

inputEl.addEventListener('submit', onSubmit);

// Делаем запрос пользователя с данным ID
fetchItems(){
    const response = axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${item}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${currentPage}`)
        // .then(function (response) {
        //     // обработка успешного запроса
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     // обработка ошибки
        //     console.log(error);
        // });
    return response.data;
}

function onSubmit(event) {
    event.preventDefault();
    const item = inputEl.value;
    showResult(item);
}

// const url = `https://pixabay.com/api/?key=${API_KEY}&q=${}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${}`


































// import './sass/index.scss';
// import { fetchCountries } from './fetchCountries';
// const debounce = require('lodash.debounce');
// import Notiflix from 'notiflix';

// const DEBOUNCE_DELAY = 300;

// const inputEl = document.querySelector('#search-box');
// const countryListEl = document.querySelector('.country-list');
// const countryInfoEl = document.querySelector('.country-info');

// inputEl.addEventListener('input',debounce(onInputChange,DEBOUNCE_DELAY));


// // Если пользователь полностью очищает поле поиска, то HTTP-запрос не выполняется, а разметка списка стран или информации о стране пропадает.
// function clearInput() {
//     countryListEl.innerHTML = '';
//     countryInfoEl.innerHTML = '';
// }

// // Запускает поиск по странам + ошибка если нет такой страны -
// function onInputChange(event) {
//     clearInput()
//      if (event.target.value.trim() === '') {
//     return;
//   }
//     const searchItem = fetchCountries(event.target.value.trim());
//     searchItem
//         .then((countries) => { onStartSearch(countries); })
//         .catch (error => {
//             if (error === 'Error 404') {
//                 Notiflix.Notify.failure("Oops, there is no country with that name");
//         }
//     });
// }
// function onStartSearch(countries) {
//     // Если в ответе бэкенд вернул больше чем 10 стран, в интерфейсе пояляется уведомление о том, что имя должно быть более специфичным. 
//     if (countries.length > 10) {
//         Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
//     } else if (countries.length <= 10 && countries.length > 1) {
//         // Если бэкенд вернул от 2-х до 10-х стран, под тестовым полем отображается список найденных стран. Каждый элемент списка состоит из флага и имени страны.
//         showList(countries);
      
//     } else if (countries.length === 1) {
//         // Если результат запроса это массив с одной страной, в интерфейсе отображается разметка карточки с данными о стране: флаг, название, столица, население и языки.
//         showCard(countries[0]);
//      }
//  }

// function showList(array) {
//     const listMarking = array.map(({ flags, name }) => { return `<li class="item-list"><img src="${flags.svg}" alt="" width="50" height = "30"> <h2>${name.official}</h2></li>`; }).join('')

//     countryListEl.insertAdjacentHTML('beforeend', listMarking);
// }
 
// function showCard(country) {
//     const { name, capital,  population,flags, languages } = country;
//     countryInfoEl.insertAdjacentHTML('beforeend', `<div class="main-wrap"><img src="${flags.svg}" alt="" width="50" height = "30"><h1>${name.official}</h1></div>
//       <ul class="all-item">
//       <li class="item">Capital: ${capital}</li>
//       <li class="item">Population: ${population} people</li>
//       <li class="item">Languages: ${Object.values(languages)}</li>
//     </ul>`);
// }




// // fetch(`https://restcountries.com/v3.1/all/`);
