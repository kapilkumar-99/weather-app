const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
var dayIndexNum = 0;

const find = document.getElementById('submit-btn');
document.getElementById('country').value = "";


function defaultLocation(){
    const countryLocation = "Karachi";

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${countryLocation}&units=metric&appid=a12ebfe78f12f11bf6352606b3e4d54c`)
.then(response => response.json())
.then (data => {

    const tempToday = document.getElementById('temp-today');
    tempToday.innerHTML = data.list[0].main.temp;
    const location = document.getElementById('location');
    location.innerHTML = countryLocation;

    const tempSecondDay = document.getElementById('temp-secondDay');
    tempSecondDay.innerHTML = data.list[1].main.temp;

    const tempThirdDay = document.getElementById('temp-thirdDay');
    tempThirdDay.innerHTML = data.list[2].main.temp;

    const tempFouthDay = document.getElementById('temp-fouthday');
    tempFouthDay.innerHTML = data.list[3].main.temp;

    const tempFifthDay = document.getElementById('temp-fifthday');
    tempFifthDay.innerHTML = data.list[4].main.temp;

    const tempSixthDay = document.getElementById('temp-sixthday');
    tempSixthDay.innerHTML = data.list[5].main.temp;

    const tempSeventhDay = document.getElementById('temp-seventhday');
    tempSeventhDay.innerHTML = data.list[6].main.temp;

    document.getElementById('country').value = ""; 
    
});
}


function dayAndDate(){
    const dateNow = new Date();
    console.log(dateNow);
    const monthIndex = dateNow.getMonth();
    const day = dateNow.getDay();
    const today = document.getElementById('today');
    const date = document.getElementById('date');
    const secondDay = document.getElementById('second-day');
    const thirdDay = document.getElementById('third-day');
    const fouthDay = document.getElementById('fouth-day');
    const fifthDay = document.getElementById('fifth-day');
    const sixthDay = document.getElementById('sixth-day');
    const seventhDay = document.getElementById('seventh-day');
    dayIndexNum = day;
    date.innerHTML = dateNow.getDate();
    const month = document.getElementById('month');
    
    location.innerHTML = "New York";
    
    month.innerHTML = months[monthIndex];
    if(dayIndexNum > 6){
        dayIndexNum=0;
        today.innerHTML = days[dayIndexNum];
        dayIndexNum++;    
    }
    else{
        today.innerHTML = days[dayIndexNum];
        dayIndexNum++;
    }
    if(dayIndexNum > 6){
        dayIndexNum=0
        secondDay.innerHTML = days[dayIndexNum];
        dayIndexNum++;
    }
    else{
        secondDay.innerHTML = days[dayIndexNum];
        dayIndexNum++;
    }
    if(dayIndexNum > 6){
        dayIndexNum=0
        thirdDay.innerHTML = days[dayIndexNum];
        dayIndexNum++;
    }
    else{
        thirdDay.innerHTML = days[dayIndexNum];
        dayIndexNum++;
    }
    if(dayIndexNum > 6){
        dayIndexNum=0;
        fouthDay.innerHTML = days[dayIndexNum];
        dayIndexNum++;
    }
    else{
        fouthDay.innerHTML = days[dayIndexNum];
        dayIndexNum++;
    }
    if(dayIndexNum > 6){
        dayIndexNum=0;
        fifthDay.innerHTML = days[dayIndexNum];
        dayIndexNum++;
    }
    else{
        fifthDay.innerHTML = days[dayIndexNum];
        dayIndexNum++;
    }

    if(dayIndexNum > 6){
        dayIndexNum=0;
        sixthDay.innerHTML = days[dayIndexNum];
        dayIndexNum++;
    }
    else{
        sixthDay.innerHTML = days[dayIndexNum];
        dayIndexNum++;
    }

    if(dayIndexNum > 6){
        dayIndexNum=0;
        seventhDay.innerHTML = days[dayIndexNum];
        dayIndexNum++;
    }
    else{
        seventhDay.innerHTML = days[dayIndexNum];
        dayIndexNum++;
    }
}

dayAndDate();

defaultLocation();

find.addEventListener('click', function(){
    const area = document.getElementById('country');
    const country = area.value;
    const countryLocation = country;
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${countryLocation}&units=metric&appid=a12ebfe78f12f11bf6352606b3e4d54c`)
    .then(response => response.json())
    .then (data => {

        const tempToday = document.getElementById('temp-today');
        tempToday.innerHTML = data.list[0].main.temp;
        const location = document.getElementById('location');
        location.innerHTML = countryLocation;

        const tempSecondDay = document.getElementById('temp-secondDay');
        tempSecondDay.innerHTML = data.list[1].main.temp;

        const tempThirdDay = document.getElementById('temp-thirdDay');
        tempThirdDay.innerHTML = data.list[2].main.temp;

        const tempFouthDay = document.getElementById('temp-fouthday');
        tempFouthDay.innerHTML = data.list[3].main.temp;

        const tempFifthDay = document.getElementById('temp-fifthday');
        tempFifthDay.innerHTML = data.list[4].main.temp;

        const tempSixthDay = document.getElementById('temp-sixthday');
        tempSixthDay.innerHTML = data.list[5].main.temp;

        const tempSeventhDay = document.getElementById('temp-seventhday');
        tempSeventhDay.innerHTML = data.list[6].main.temp;

        document.getElementById('country').value = ""; 
    
});    
}
)