const notificacao = document.getElementById('notificacao')
const icone = document.getElementById('conteudo-icone')
const temperatura = document.getElementById('conteudo-temperatura')
const descTemperatura = document.getElementById('temperatura-descricao')
const local = document.getElementById('local')
const weather = {}
weather.temperature = {
    unit: 'celsius'
}
const KELVIN = 273
const key = '82005d27a116c2880c8f0fcb866998a0'

// Checa se o navegador suporta geolocalização
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError)
}else{
    notificacao.style.display = 'block'
    notificacao.innerHTML = '<p>O Navegador não suporta geolocalização! =(</p>'
    
}

// Verifica a localização do usuário
function setPosition(position){
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    getWeather(latitude, longitude)
}

// Exibe erro se der algum problema
function showError(error){
    notificacao.style.display = 'block'
    notificacao.innerHTML = `<p>${error.message}</p>`
}

// Recebe a temperatura do API
function getWeather(latitude, longitude){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&lang=pt_br`
    fetch(api).then((response)=>{
        let data = response.json()
        return data
    }).then((data)=>{
        weather.temperature.value = Math.floor(data.main.temp-KELVIN)
        weather.description = data.weather[0].description
        weather.iconID = data.weather[0].icon
        weather.city = data.name
        weather.country = data.sys.country
    }).then(()=>{
        exibirClima()
    })
}

function exibirClima(){
    icone.innerHTML = `<img src="icons/${weather.iconID}.png">`
    temperatura.innerHTML = `${weather.temperature.value}°<span>C</span>`
    descTemperatura.innerHTML = weather.description
    local.innerHTML = `${weather.city}, ${weather.country}`    
}

function celsiusParaFahrenheit(temperature){
    return (temperature * 9/5) + 32
}

temperatura.addEventListener('click', ()=>{
    if(weather.temperature.value === undefined){
        return
    }
    if(weather.temperature.unit === 'celsius'){
        let fahrenheit = celsiusParaFahrenheit(weather.temperature.value)
        fahrenheit = Math.floor(fahrenheit)
        temperatura.innerHTML = `${fahrenheit}°<span>F</span>`
        weather.temperature.unit = 'fahrenheit'
    }else{
        temperatura.innerHTML = `${weather.temperature.value}°<span>C</span>`
        weather.temperature.unit = 'celsius'
    }
})
