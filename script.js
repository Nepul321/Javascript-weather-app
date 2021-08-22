const URL = 'https://goweather.herokuapp.com/weather/'
const form = document.querySelector('#weather-form')
const info = document.querySelector('#info')

async function getInsertData(city, City) {
    let response = await fetch(URL + city)
    let data = await response.json()
    console.log(data)
    insert(data, City)
}

form.addEventListener('submit', e => {
    e.preventDefault()
    let City = e.target[0].value
    city = City.toLowerCase().trim()
    getInsertData(city, City)
    e.target[0].value = ""
})

function insert(data, City) {
   info.innerHTML = `
        <div class="card mb-4">
        <div class="card-header">
            <h3>${City}</h3>
        </div>
        <div class="card-body">
        <p>Temperature - ${data.temperature}</p>
        <p>Wind - ${data.wind}</p>
        <p>Description : ${data.description}</p>
        </div>
        </div>
        <h3 class="mb-4">Forecast</h3>
    
   `

   const forecasts = data.forecast
   
   showForecasts(forecasts, info)
}

function showForecasts(forecasts, infodiv) {
    forecasts.forEach(forecast => {
        infodiv.innerHTML = infodiv.innerHTML + `
              <div class="card mb-4">
                <div class="card-header">
                <h4>Day ${forecast.day}</h4>
                </div>
                <div class="card-body">
                    <p>Temperature - ${forecast.temperature}</p>
                    <p>Wind - ${forecast.wind}</p>
                </div>
              </div>

        `
    })
}