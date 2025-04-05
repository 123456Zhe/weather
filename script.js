// 南昌市天气API
const API_URL = 'http://127.0.0.1:5000/api/current';
const FORECAST_URL = 'http://127.0.0.1:5000/api/forecast';

// 获取当前天气
document.addEventListener('DOMContentLoaded', () => {
    fetchCurrentWeather();
    fetchForecast();
});

// 以下是和风天气API配置，暂时不使用
// const API_KEY = 'YOUR_HEFENG_API_KEY';
// const CITY_ID = '101240101'; // 南昌市城市ID
// const HEFENG_API_URL = `https://devapi.qweather.com/v7/weather/now?location=${CITY_ID}&key=${API_KEY}`;

async function fetchCurrentWeather() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log('获取到的天气数据:', data); // 添加日志以便调试
        updateCurrentWeather(data); // 直接传递data，因为API直接返回天气数据对象
    } catch (error) {
        console.error('获取天气数据失败:', error);
    }
}

function updateCurrentWeather(data) {
    document.querySelector('.temp').textContent = `${data.temp}°C`;
    document.querySelector('.description').textContent = data.text;
    document.querySelector('.details div:nth-child(1)').textContent = `湿度: ${data.humidity}%`;
    document.querySelector('.details div:nth-child(2)').textContent = `风速: ${data.windSpeed}m/s`;
    document.querySelector('.details div:nth-child(3)').textContent = `气压: ${data.pressure}hPa`;
}

// 获取15日预报
async function fetchForecast() {
    try {
        const response = await fetch(FORECAST_URL);
        const data = await response.json();
        updateForecast(data);
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}

function updateForecast(data) {
    const forecastContainer = document.querySelector('.forecast-items');
    forecastContainer.innerHTML = '';
    
    data.forEach(forecast => {
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        forecastItem.innerHTML = `
            <div class="day">${forecast.date}</div>
            <div class="forecast-temp">${forecast.temp}</div>
            <div class="forecast-desc">${forecast.weather}</div>
        `;
        
        forecastContainer.appendChild(forecastItem);
    });
}