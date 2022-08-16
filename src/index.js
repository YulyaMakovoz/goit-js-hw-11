// Добавить оформление!

const API_KEY = '29274974-75b7ad93639b97858ba53233b';
const axios = require('axios');
import Notiflix from 'notiflix';
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const inputEl = document.querySelector('input');
const galleryEl = document.querySelector('.gallery');
const formEL = document.querySelector('.search-form');
const buttonLoadMore = document.querySelector('.load-more');

let currentPage = 1;
let perPage = 40;
let item = inputEl.value;
let lightbox = new SimpleLightbox('.gallery a',{captions: true,
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,})

buttonLoadMore.classList.add('is-hidden')

formEL.addEventListener('submit', onSubmit);
buttonLoadMore.addEventListener('click', onLoadMore);

// Делаем запрос пользователя с данным ID
async function fetchItems() {
    try {
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${item}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${currentPage}`)
    const dataImages = await response.data.hits;     
// Если бэкенд возвращает пустой массив, значит ничего подходящего найдено небыло. В таком случае показывай уведомление с текстом "Sorry, there are no images matching your search query. Please try again.".
    if (dataImages.length === 0) {
            buttonLoadMore.classList.add('is-hidden')
            Notiflix.Notify.info("Sorry, there are no images matching your search query. Please try again.")
    }    
    return dataImages;
    }
            catch (error) {
            console.log(error);
    };
    
}

function onSubmit(event) {
    event.preventDefault();
    
// При поиске по новому ключевому слову необходимо полностью очищать содержимое галереи, чтобы не смешивать результаты.
    galleryEl.innerHTML = "";
    buttonLoadMore.classList.add('is-hidden')

    item = inputEl.value;
    item;
    // console.log(item);
    // При поиске по новому ключевому слову значение page надо вернуть в исходное, так как будет пагинация по новой коллекции изображений.
    currentPage = 1;

    fetchItems()   
        .then(images => { showResult(images); })
        .catch(error => (console.log(error)));
   
}
    

function createOneItem(image) {

    return `<div class="photo-card">
    <a href="${image.largeImageURL}">
  <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" width ="215" />
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes ${image.likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${image.views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${image.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${image.downloads}</b>
    </p>
  </div>
  </div>`
}

function showOneItem(dataImages) {

    return dataImages.reduce((acc,image) =>acc +createOneItem(image),"")
}

function showResult(dataImages) {

    galleryEl.insertAdjacentHTML('beforeend', showOneItem(dataImages))   
    // После первого запроса кнопка появляется в интерфейсе под галереей.
    buttonLoadMore.classList.remove('is-hidden');
    onResult(dataImages);
    lightbox.refresh();
}

function onLoadMore() {

    currentPage += 1;
    item = inputEl.value;

     fetchItems()
        .then(images => { showResult(images); })
        .catch(error => (console.log(error)))
       
}

function onResult(dataImages) {

    if (dataImages.length > 0 && dataImages.length < perPage) {
    buttonLoadMore.classList.add('is-hidden')
    // Если пользователь дошел до конца коллекции, пряч кнопку и выводи уведомление с текстом "We're sorry, but you've reached the end of search results."
        Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
        
    } else if 
        (dataImages.length === 0){
        buttonLoadMore.classList.add('is-hidden')
       
    }
    
}



//  fetch(`https://pixabay.com/api/?key=${API_KEY}&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`)



