const apiKey = '294c485d0b9be98bf34e241349233cbd';
const cities = ['Воткинск', 'Глазов', 'Ижевск', 'Камбарка', 'Можга', 'Сарапул'];

cities.forEach(city => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const weather = document.getElementById('weather');
        const tempCelsius = Math.round(data.main.temp - 273.15);
        weather.innerHTML += `<p>Погода в городе ${city}: Температура: ${tempCelsius}°C, Погодные условия: ${data.weather[0].description}</p>`;
    });
});

let audio = new Audio('music.mp3');
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
}

const musicButton = document.createElement('button');
musicButton.textContent = 'Включить/Выключить музыку';
musicButton.onclick = toggleMusic;
document.body.appendChild(musicButton);
