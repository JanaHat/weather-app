const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');
const icon = document.querySelector('.icon');
const humidity = document.querySelector('.humidity');
  

button.addEventListener('click', function(){
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=5cbc33ae6fb822fb2235ebf98fd61817&units=metric')
    .then(response => response.json())
    .then(data => {
        let name = document.querySelector('.name');
        let nameValue = data['name'];
        let descValue = data['weather'][0]['description'];
        let tempValue = data['main']['temp'];
        let iconValue = data['weather'][0]['icon'];
        let humidityValue = data['main']['humidity']
        
        name.innerHTML = nameValue;
        desc.innerHTML = 'Description: ' + descValue;
        temp.innerHTML = 'Temperature: ' + tempValue+' °C';
        icon.src = "https://openweathermap.org/img/wn/" + iconValue + ".png";
        humidity.innerHTML = 'Humidity: ' + humidityValue;

    })
    

    .catch(err => alert("Wrong city name!"));
})

    

    



        

    

