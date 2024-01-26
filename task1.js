// 2. Воспользуемся открытым API — [JSONplaceholder](https://jsonplaceholder.typicode.com/). От этого API можно получить тестовые данные: строки, данные пользователя, набор постов. И все они будут лишены смысла — это идеально для тренировки.
    
//     Нужно получить с сервера список постов и отобразить его на странице. 
    
//     Создайте функции:
    
//     - получает на вход объект поста и возвращает строку HTML-разметки;
//     - добавляет полученную разметку в полученный контейнер;
//     - делает GET запрос по адресу `https://jsonplaceholder.typicode.com/posts` и добавит их на страницу (для этого примените метод `forEach` и функции созданные ранее).
    
//     Пример реализации: (видео)


async function loadPosts() {
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    data.forEach(item => {
        const article = document.createElement('article');
        document.getElementById('container').appendChild(article);
        article.innerHTML +=
        `<h2>${item.title}</h2>
        <p>${item.body}</p>`        
    });
} catch (error) {
    console.error('Ошибка при выполнении запросов:', error);


    // return article;

	// .then(response => {
	// 	return response.json();
	// })
    // .then(data => {
    //     console.log(typeof data);
    //     console.log(data);
    //     const article = document.createElement('article');
    //     const h2 = document.createElement('h2');
    //     const p = document.createElement('p');
    // })
    // .then(data => {

    // })

    // .catch((error) => {
	// 	console.log('Ошибка. Запрос не выполнен: ', error)
	// })
}
};

loadPosts();