// export function fetchCountries(name) {
//     return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)    
//     .then(response => {        
//         if (response.status === 200) {            
//             return response.json();
//           }
//       // Не забывай о том, что fetch не считает 404 ошибкой, поэтому необходимо явно отклонить промис чтобы можно было словить и обработать ошибку.
//           if (response.status === 404) {
//             return Promise.reject('Error 404');
//           }     
//     })    
// }
