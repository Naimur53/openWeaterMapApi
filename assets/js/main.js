//element 
const inputFiled = document.getElementById('input-filed');
const cityName = document.getElementById('city-name');
const tempTag = document.getElementById('temp');
const cloud = document.getElementById('cloud');
const iconWrap = document.getElementById('weather-status');

const search = () => {
    const inputText = inputFiled.value;
    loadData(inputText);
}
//data
const loadData = (text) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=42ce01b58ff8fe97ca604c9d4a87e5ed`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => calculateData(data));
}
//calculate data
const calculateData = (data) => {
    console.log(data);

    if (data.cod == '404') {
        alert(`we could not find any city with this name`);
    }
    else {
        const tempC = Math.round(fToC(data.main.temp));
        const weather = data.weather[0].main;
        const icon = data.weather[0].icon;
        dataInput(data.name, tempC, weather, icon);
    }
}
// fahrenheit to c 
const fToC = fahrenheit => (fahrenheit - 32) * (5 / 9);
//data input 
const dataInput = (name, tempera, weather, icon) => {
    cityName.innerText = name;
    tempTag.innerText = tempera;
    cloud.innerText = weather;
    //change clear
    iconWrap.textContent = '';
    //change icon
    iconWrap.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="">`;
}