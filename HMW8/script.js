

function countryTemperature(){
 var weather= fetch
(`https://api.openweathermap.org/data/2.5/weather?q=cluj&appid=8f27e85eb6283722b3a654f4b16e0ea2`)

.then(function(response){
    return response.json();
})
.then(function(response){
    return (response.main.temp-273.15).toFixed(0);
    
});
return weather;
}
function tempParagraph(tempObj){
    // var tempParagraph=document.querySelector(".temperature_value p");
    var tempParagraph = document.getElementById('cristina');
    tempParagraph.innerHTML=tempObj;

}


function onTemperatureLoad(){
    var tempLoad=countryTemperature();
    tempLoad.then(function(data){
        tempParagraph(data);
    });
};

window.addEventListener("load",onTemperatureLoad);