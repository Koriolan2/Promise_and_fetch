'use strict'

let url = 'https://jsonplaceholder.typicode.com/posts';

const sendPost = () => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', ()=> {
        if (request.readyState !== 4) {return;}
        if (request.status === 200) {
            let data = JSON.parse(request.responseText);
            createWrap(data);
        }
    });    
    request.open('GET', url);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
}


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

sendPost();