//Задание 1
//Создайте функцию makeOne, которая выполняет GET-запрос по адресу https://catfact.ninja/fact, используя функцию fetch(). Результат должен быть выведен в консоль. Функция вызывается по нажатию кнопки "Задание 1".

function makeOne() {
	fetch('https://catfact.ninja/fact')
	.then(data => {
		console.log(data);
		return data.text();
	})
	.then(data => {
		console.log(data);
	})
}

document.querySelector('.b-1').addEventListener('click', makeOne);

//Задание 2
//Создайте функцию makeTwo, которая выполняет GET-запрос по адресу https://emojihub.yurace.pro/api/random/group/face-positive. Результат запроса - поле htmlCode вставьте в элемент с id result2.
// Функция makeTwo должна сделать GET-запрос по адресу https://emojihub.yurace.pro/api/random/group/face-positive с помощью функции fetch()
// Полученный ответ должен быть преобразован в формат JSON с помощью метода response.json()
// Затем из полученного JSON-объекта нужно извлечь свойство "htmlCode", которое содержит HTML-код для вставки
// Далее нужно создать элемент <p> и установить его содержимое равным значению из свойства "htmlCode"
// Созданный элемент <p> должен быть вставлен в элемент с id "result2" в DOM-дерево

function makeTwo() {
	fetch('https://emojihub.yurace.pro/api/random/group/face-positive')
	.then(response => {
		return response.json();
	})
	.then((response) => {
		let result = response.htmlCode;
		const newElement = document.createElement('p');
		newElement.innerHTML += result;
		document.getElementById('result2').appendChild(newElement);
	})
	.catch((error) => {
		console.log('Ошибка. Запрос не выполнен: ', error)
	})
}

document.querySelector('.b-2').addEventListener('click', makeTwo);

//Задание 3
//Создайте функцию makeThree, которая выполняет GET-запрос по адресу https://www.boredapi.com/api/activity, используя функцию fetch(). Выведите в консоль ответ с сервера, чтобы убедиться, что получили данные.

function makeThree() {
	fetch('https://www.boredapi.com/api/activity')
	.then(response => console.log(response))
	.catch(error => console.log('Ошибка. Запрос не выполнен:', error))
}

document.querySelector('.b-3').addEventListener('click', makeThree);

//Задание 4
//Создайте функцию makeFour, которая делает запрос на адрес https://www.boredapi.com/api/activity. Выведите в консоль полученную активность в формате 'Activity: описание активности'.

function makeFour() {
	fetch('https://www.boredapi.com/api/activity')
	.then(response => {
		console.log(response)
		return response.json()
	})
	.then(response => {
		console.log(response)
		console.log(`Описание активности: ${response.activity}`)
		console.log(`Описание активности: ${response.participants}`)
	})
	
}

document.querySelector('.b-4').addEventListener('click', makeFour);

//Задание 5
//Создайте функцию makeFive, которая делает запрос на адрес https://www.boredapi.com/api/activity. Выведите в консоль количество участников для активности.

function makeFive() {
	fetch('https://www.boredapi.com/api/activity')
	.then(response => response.json())
	.then(response => console.log(`Количество участников: ${response.participants}`))
}

document.querySelector('.b-5').addEventListener('click', makeFive);

//Задание 6
//Создайте функцию makeSix, которая делает запрос на адрес https://www.boredapi.com/api/activity. Выведите в консоль свойства из полученного объекта, такие как activity, type, price и accessibility.

function makeSix() {
	fetch('https://www.boredapi.com/api/activity')
	.then(response => response.json())
	.then(response => console.log(`${response.activity}, ${response.type}, ${response.price}, ${response.accessibility}`))
}

document.querySelector('.b-6').addEventListener('click', makeSix);

//Задание 7
//Создайте функцию makeSeven, которая делает запрос на адрес https://api.agify.io/. Выведите в консоль ответ с сервера, чтобы убедиться, что получили данные.

function makeSeven() {
	fetch('https://api.agify.io/')
	.then(data => data.json())
	.then(data => console.log(data))
	.catch(error => console.log(error))
}

document.querySelector('.b-7').addEventListener('click', makeSeven);

//Задание 8
//Создайте функцию makeEight, которая отправляет GET-запрос на адрес https://api.agify.io/ с параметром ?name=alice.

function makeEight() {
	fetch('https://api.agify.io/?name=alice')
	.then((data) => data.json())
	.then(data => console.log(data))
	.catch(error => console.log(error))
}

document.querySelector('.b-8').addEventListener('click', makeEight);

//Задание 9
//Создайте функцию makeNine, которая отправит запрос на адрес `https://api.agify.io/?name=vadim` и выведет полученные данные в элемент с id result9.
//Подсказка: использование JSON.stringify() позволит преобразовать объект в строку.

function makeNine() {
	fetch('https://api.agify.io/?name=vadim')
		.then((response) => response.json())
		.then((response) => {
			const resultElement = document.getElementById('result9');
			const result = JSON.stringify(response);
			resultElement.innerText += result;
		})
		.catch((error) => {
			console.error('Ошибка:', error);
		});
}

document.querySelector('.b-9').addEventListener('click', makeNine);

//Задание 10
//Создайте функцию makeTen, которая делает запрос на адрес https://dog.ceo/api/breeds/image/random. Полученное изображение выведите после элемента с id "result10".

function makeTen() {
	fetch('https://dog.ceo/api/breeds/image/random')
	.then ((response) => response.json())
	.then ((response) => {
	const imageElement = document.createElement('img');
	imageElement.src = response.message;
	const idElement = document.getElementById('result10');
	
	idElement.insertAdjacentElement('afterend', imageElement);
	})
	.catch((error) => {
		console.error('Ошибка:', error);
	});
}

document.querySelector('.b-10').addEventListener('click', makeTen);

//Задание 11
//Создайте функцию makeEleven, которая делает запрос на адрес "https://api.ipify.org?format=json". Полученный результат выведите в элемент с id "result11".

function makeEleven() {
	fetch('https://api.ipify.org?format=json')
		.then((response) => response.json())
		.then((data) => {
			const ip = data.ip;
			const result = document.getElementById('result11');		
			console.log(data)
			result.innerText = JSON.stringify(ip);

			//интересно было попробовать сразу запросить геолокацию из 12го задания
			// fetch(`http://ip-api.com/json/${ip}`)
			// .then(response => response.json())
			// .then((data) => {
			// 	console.log(data)
			// 	const result = document.getElementById('result12')
			// 	result.innerText = `Пользователь находится в стране ${data.country}, городе ${data.city}`
			// })
			// .catch((error) => {
			// 	console.error('Ошибка во втором запросе:', error);
			// });
		})
		.catch((error) => {
			console.error('Ошибка в первом запросе:', error);
		});		
}

document.querySelector('.b-11').addEventListener('click', makeEleven);

//Задание 12
//Создайте функцию makeTwelve, которая будет получать IP-адрес из поля ввода и находить его гео-позицию.

function makeTwelve() {
	let value = document.getElementById('ipAddress').value;
	fetch(`http://ip-api.com/json/${value}`)
	.then(response => response.json())
	.then((data) => {
		document.getElementById('result12').innerText = `Пользователь находится в стране ${data.country}, городе ${data.city}`
	})
	.catch((error) => {
		console.error('Ошибка:', error);
	});
}

document.querySelector('.b-12').addEventListener('click', makeTwelve);

//Задание 13
//Создайте функцию makeThree, которая делает запрос на адрес fetch('https://official-joke-api.appspot.com/random_joke'). Выведите в консоль ответ с сервера, чтобы посмотреть, какие поля есть в ответе.

function makeThirteen() {
	fetch('https://official-joke-api.appspot.com/random_joke')
	.then(response => response.json())
	.then(data => console.log(data))

	.catch(error => console.error('Ошибка:', error));
}

document.querySelector('.b-13').addEventListener('click', makeThirteen);

//Задание 14
//Создайте функцию makeFourteen, которая делает запрос на адрес https://official-joke-api.appspot.com/random_joke с помощью функции fetch() . Выведите на страницу информацию о шутке, используя поля "setup" и "punchline" из ответа сервера.

function makeFourteen() {
	fetch('https://official-joke-api.appspot.com/random_joke')
		.then((response) => response.json())
		.then((data) => {
			document.getElementById('result14').innerText = `${data.setup} ${data.punchline}`;
		})
		.catch((error) => console.error('Ошибка:', error));
}

document.querySelector('.b-14').addEventListener('click', makeFourteen);

//Задание 15
//Создайте функцию makeFifteen, которая выполняет POST-запрос по адресу https://randomuser.me/api/, используя функцию fetch(). Выведите ответ от сервера в консоль.
// Нужно создать функцию makeFifteen, которая делает следующие действия:

// Функция makeFifteen должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/posts с помощью функции fetch()
// В теле запроса отправьте JSON-объект с полями title и body, например:
// { "title": "Заголовок", "body": "Текст поста" }
// Укажите заголовок "Content-Type" как "application/json" для запроса
// Полученный ответ от сервера должен быть преобразован в формат JSON с помощью метода response.json()
// Выведите ответ от сервера в консоль
// Подсказка: использование JSON.stringify() позволит преобразовать объект в строку.

function makeFifteen() {
	const postData = {
		title: 'Заголовок',
		body: 'Текст поста',
	};

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(postData),
	})
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.error('Ошибка:', error));
}

document.querySelector('.b-15').addEventListener('click', makeFifteen);

//Задание 16
//Создайте функцию makeSixteen, которая должна сделать PUT-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch(). Выведите ответ с сервера в консоль.
// Создайте функцию makeSixteen, которая делает следующие действия:

// Функция makeSixteen должна сделать PUT-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch()
// Укажите заголовок "Content-Type" как "application/json" для запроса
// В теле запроса отправьте JSON-объект с полями title и body, например:
// { "title": "Новый заголовок", "body": "Новый текст поста" }
// Полученный ответ с сервера должен быть преобразован в формат JSON с помощью метода response.json()
// Выведите ответ с сервера в консоль
// Подсказка: использование JSON.stringify() позволит преобразовать объект в строку.

function makeSixteen() {
	const putData = {
		title: 'Новый заголовок',
		body: 'Новый текст поста',
	};

	fetch('https://jsonplaceholder.typicode.com/posts/1', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(putData),

	})
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.error('Ошибка:', error));
}

document.querySelector('.b-16').addEventListener('click', makeSixteen);

//Задание 17
//Создайте функцию makeSeventeen, которая должна сделать DELETE-запрос на адрес https://jsonplaceholder.typicode.com/posts/1 с помощью функции fetch(). Полученный ответ с сервера должен быть выведен в консоль.

const makeSeventeen = () => {
	// const deleteData = {
	// 	title: 'Удаленный заголовок',
	// 	body: 'Удаленный текст поста',
	// };

	fetch('https://jsonplaceholder.typicode.com/posts/1', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		// body: JSON.stringify(deleteData),

	})
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.error('Ошибка:', error));
};

document.querySelector('.b-17').addEventListener('click', makeSeventeen);

//Задание 18
//Создайте функцию makeEighteen, которая должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/photos с помощью функции fetch(). ыведите ответ с сервера в консоль.

function makeEighteen() {
	const postData = {
		title: 'Название изображения',
		url: "https://example.com/image.jpg" }

		fetch('https://jsonplaceholder.typicode.com/photos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(postData),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error('Ошибка:', error));
	};

document.querySelector('.b-18').addEventListener('click', makeEighteen);

//Задание 19
//Создайте функцию makeNineteen, которая должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/users с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeNineteen() {
	const postData = {
		name: "Кот Учёный",
		username: "kitty",
		email: "kitty@example.com",
		phone: "123-456-7890" }

		fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(postData),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error('Ошибка:', error));
}

document.querySelector('.b-19').addEventListener('click', makeNineteen);

//Задание 20
//Создайте функцию makeTwenty, которая должна сделать POST-запрос на адрес https://jsonplaceholder.typicode.com/comments с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeTwenty() {
	const postData = {
		name: "Золотая рыбка",
		email: "goldfish@example.com",
		body: "Гав-гав!",
		postId: 1
	}

		fetch('https://jsonplaceholder.typicode.com/comments', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(postData),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error('Ошибка:', error));
}

document.querySelector('.b-20').addEventListener('click', makeTwenty);

//Задание 21
//Создайте функцию makeTwentyOne, которая должна сделать PUT-запрос на адрес https://jsonplaceholder.typicode.com/comments/1 с помощью функции fetch(). Выведите ответ с сервера в консоль.

function makeTwentyOne() {
	const putData = {
		name: "Золотая рыбка",
		email: "goldfish@example.com",
		body: "Буль-буль!",
		postId: 1
	}

		fetch('https://jsonplaceholder.typicode.com/comments/1', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(putData),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error('Ошибка:', error));
}

document.querySelector('.b-21').addEventListener('click', makeTwentyOne);

//Задание 22
//Создайте функцию makePromiseAllOne, которая должна делать два GET-запроса на адреса: https://jsonplaceholder.typicode.com/posts/1, https://jsonplaceholder.typicode.com/comments/1. Используйте `.then()` для обработки результатов.
//Выведите оба ответа с сервера в консоль.

function makePromiseAllOne() {
	const promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => response.json());

	const promise2 = fetch('https://jsonplaceholder.typicode.com/comments/1')
	.then(response => response.json());

	Promise.all([promise1, promise2])
	.then(data => {
		console.log(data);//массив из двух объектов
		const [data1, data2] = data;//деструктуризация массива
		console.log('Данные из первого запроса:', data1);
		console.log('Данные из второго запроса:', data2)
	})
	.catch(error => console.error('Ошибка:', error));
}

document.querySelector('.b-22').addEventListener('click', makePromiseAllOne);

//Задание 23
//Создайте функцию makePromiseAllTwo, которая должна делать три GET-запроса на адреса: https://jsonplaceholder.typicode.com/users/1, https://jsonplaceholder.typicode.com/posts/1, https://jsonplaceholder.typicode.com/comments/1.
//Используйте `async/await` для обработки результатов. Выведите все ответы с сервера в консоль.

async function makePromiseAllTwo() {
	try {
		const response1 = await fetch('https://jsonplaceholder.typicode.com/users/1');//дожидаемся ответа от сервера, когда полностью ответ будет загружен-завершен-передан
		const data1 = await response1.json();//помещаем результат ответа в переменную
		console.log(data1);

		//Ваш код
		const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
		const data2 = await response2.json();
		console.log(data2);
		const response3 = await fetch('https://jsonplaceholder.typicode.com/comments/1');
		const data3 = await response3.json()
		console.log(data3);


	} catch (error) {
		console.error('Ошибка при выполнении запросов:', error);
	}
}

document.querySelector('.b-23').addEventListener('click', makePromiseAllTwo);

//Задание 24
//Какое имя выведется в консоль?
//здесь используется замыкание, но я еще до конца не поняла принцип его работы
const makeTwentyFour = () => {
	let name = 'Вася'; //выведется это имя
	function sayHi() {
		console.log(name);
	}

	setTimeout(function () {
		let name = 'Петя';
		sayHi();
	}, 1000);
	
};

document.querySelector('.b-24').addEventListener('click', makeTwentyFour);

//Задание 25
//В каком порядке числа выведутся в консоль?

// в порядке 1, 3, 2

function makeTwentyFive() {
	console.log(1);

	//Cтавим таймер на 0 миллисекунд
	setTimeout(function () {//функции попадают в очередь выполнения, а не выполняются немедленно, несмотря на нулевой таймер
		console.log(2);
	}, 0);

	console.log(3);
}
document.querySelector('.b-25').addEventListener('click', makeTwentyFive);

//Задание 26
//Создайте функцию makeTwentySix, должна использовать `setTimeout` для отображения в консоли сообщения "Прошло 5 секунд" через 5 секунд. Вызывается функция по кнопке Задание 26.

function makeTwentySix() {
	setTimeout(() => {
		console.log('Прошло 5 секунд');
	}, 5000);
}

document.querySelector('.b-26').addEventListener('click', makeTwentySix);

//Задание 27
//Создайте функцию makeTwentySeven, должна использовать `setTimeout` для отображения в консоли сообщения "Прошло 2 секунды" через 2 секунды. Вызывается функция по кнопке Задание 27.

function makeTwentySeven() {
	setTimeout(() => {
		console.log('Прошло 2 секунды');
	}, 2000);
}

document.querySelector('.b-27').addEventListener('click', makeTwentySeven);

//Задание 28
//Создайте функцию makeTwentyEight, которая использует `setInterval` для отображения в консоли сообщения "Прошло 3 секунды" каждые 3 секунды.

function makeTwentyEight() {
	const interval = setInterval(() => {
		console.log("Прошло 3 секунды")
	}, 3000);
	// clearInterval(interval);
}

document.querySelector('.b-28').addEventListener('click', makeTwentyEight);

//Задание 29
//Создайте функцию makeTwentyNine, которая использует `setInterval` для отображения в консоли сообщения "Прошло 2 секунды" каждые 2 секунды.

function makeTwentyNine() {
		const interval = setInterval(() => {
			console.log("Прошло 2 секунды")
		}, 2000);
		// clearInterval(interval);
	}

document.querySelector('.b-29').addEventListener('click', makeTwentyNine);

//Задание 30
//Создайте функцию makeThirty, которая использует `setInterval` для отображения в консоли сообщения "Прошло 5 секунд" каждые 5 секунд.

function makeThirty() {
	const interval = setInterval(() => {
		console.log("Прошло 5 секунд")
	}, 5000);
	// clearInterval(interval);
}

document.querySelector('.b-30').addEventListener('click', makeThirty);
