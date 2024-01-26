// Вам нужно написать функцию для создания постов, в ней должен быть вызов `fetch`, с двумя обработчиками then, который:

// - делает POST-запрос по адресу https://jsonplaceholder.typicode.com/posts ;
// - с телом — JSON с двумя свойствами `title` и `body` ;
// - со свойством `headers` с единственным заголовком: `'Content-Type': 'application/json; charset=UTF-8'` ;
// - добавляет созданный пост в DOM.

function posting() {
    const title = document.querySelector('.post-title');
    const body = document.querySelector('.post-body');
    const errorValue = document.querySelector('.error');

    if (!title.value.trim().length || !body.value.trim().length) {
        errorValue.innerText = 'Заполните оба поля';

    } else {
        errorValue.innerText = '';
    

        const postData = {
            title: `${title.value}`,
            body: `${body.value}`,
        };


        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(postData),
        })
            .then((response) => response.json())
            .then((data) => {
            console.log(data);

            const article = document.createElement('article');
            document.querySelector('.output').appendChild(article);
            article.innerHTML +=
            `<h2>${data.title}</h2>
            <p>${data.body}</p>`

            title.value = '';
            body.value = '';
            }        
)
		.catch((error) => {
            console.error('Ошибка при выполнении запроса', error)
            errorValue.innerText = 'Произошла ошибка при отправке запроса';
        });
}
}

document.querySelector('.post-public').addEventListener('click', posting);