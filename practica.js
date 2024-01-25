// Допишите этот код, чтобы показывать текущее время в консоли каждую секунду

function consoleDate() {
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  }

  const interval = setInterval(consoleDate, 1000);

  clearInterval(interval);

  // Напишите функцию wait, которая принимает на вход количество миллисекунд ожидания и возвращает промис

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
  }
  
  wait(2000)
    .then(() => console.log('Прошло 2000мс'));

    // перепишите функцию с использованием async/await

function getMainActorProfileFromMovie(id) {
    return fetch(`https://swapi.dev/api/films/${id}/`)
      .then((movieResponse) => {
        return movieResponse.json()
      })
      .then((movie) => {
        const characterUrl = movie.characters[0].split("//")[1]
        return fetch(`https://${characterUrl}`)
      })
      .then((characterResponse) => {
        return characterResponse.json()
      })
      .catch((err) => {
        console.error("Произошла ошибка!", err)
      })
  }

  async function getMainActorProfileFromMovie(id) {
    try {
      const movieResponse = await fetch(`https://swapi.dev/api/films/${id}/`);
      const movie = await movieResponse.json();
  
      const characterUrl = movie.characters[0].split('//')[1];
      const characterResponse = await fetch(`https://${characterUrl}`);
      return characterResponse.json();
    } catch (err) {
      console.error('Произошла ошибка!', err);
    }
  }