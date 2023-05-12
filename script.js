let apiKey = '8eb95ffe3a74bb5ab411107a63ac6c09';

let searchButton = document.getElementById(searchButton)
let cityName = document.getElementById(searchName)
let desiredCity = document.getElementById(desiredCity)

let cities = [];

//Use the search button 
searchButton.addEventListener('click', function() {
    let city = cityName.value;
    desiredCity.text = 'Desired city: ' + city;
})

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let city = cityName.value;
    desiredCity.textContent = 'Desired city: ' + city;
    form.reset();
})
