'use strict'

let url = 'https://jsonplaceholder.typicode.com/posts';

const sendPost = () => {
    fetch(url, {
                method: 'GET',
                mode: 'cors',
                })
        .then((response) => {
            if (response.status !== 200){
                throw new Error('Reaspose status is not 200');
            }
            return response.json();
        })       
        .then ((data) => {
            createWrap(data);
        })
        .catch((error) => console.error(error)) ;
}

sendPost();



// const sendPost = () => {
//      return new Promise((resolve, reject)=>{
//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', ()=> {
//                     if (request.readyState !== 4) {return;}
//                     if (request.status === 200) {
//                         let data = request.responseText;
//                         resolve(data);
//                     } else {
//                         reject('Беда-печаль! Ошибка получилася!');
//                     }
//                 });    
//         request.open('GET', url);
//         request.setRequestHeader('Content-type', 'application/json');
//         request.send();
//      });

    
// }

// sendPost()
//     .then((data)=>{return JSON.parse(data)})
//     .then((data)=> {createWrap(data)})
//     .catch((error)=>{console.error(error)})
//     .finally(() => console.log('Все сделано'));







const createWrap = (data) => {
    data.forEach((item) => {
        if (item.userId == 1) {
        let str = `<div class="col-12 col-md-6">
                        <div class="wrap">
                            <h2 class="title"> ${item.title}</h2>
                            <p>${item.body}</p>
                        </div>
                    </div>`;
        document.querySelector('.row').insertAdjacentHTML('beforeend', str);
    }
    });
}
