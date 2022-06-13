//First Container

fetch("https://rickandmortyapi.com/api/episode")
.then(function(response){
    return response.json()
}).then(function(response){
    response.results.forEach(function(elem) {
        leftContainer(elem);  
    })
});


function leftContainer(episode){
    var container = document.querySelector("#episode-container"); 
    var episodeContainer = document.createElement("div");
    var episodeName = document.createElement("div");
    var episodeAirDate = document.createElement("div");
    var episodeNumber = document.createElement("div");
    var content = document.createElement("div");
    var contentBtn = document.createElement("button");
    container.appendChild(episodeContainer);
    episodeContainer.appendChild(episodeName);
    episodeContainer.appendChild(episodeAirDate);
    episodeContainer.appendChild(episodeNumber);
    episodeContainer.appendChild(contentBtn);
    episodeContainer.appendChild(content);
    content.classList.add(`display-content`);
    contentBtn.innerText = `VIEW CHARACTERS`;
    contentBtn.classList.add(`button-display`);
    episodeName.innerText = `Episode name: ${episode.name}`;
    episodeAirDate.innerText = `Air date: ${episode.air_date}`;
    episodeNumber.innerText = `Episode: ${episode.episode}`;
    var charactersList = episode.characters;
    contentBtn.addEventListener(`click`, rightContainer.bind(charactersList));
    
};


//Second Cointainer

    function rightContainer(){
        console.log(this);
        var secondContainer = document.querySelector("#characters-container");

        this.forEach(function (character) {
         secondContainer.innerHTML = "";
         console.log(character);
         fetch(character)
            .then (function (response){
                return response.json();
            })
            .then(function (data){
        

  
    var contentContainer = document.createElement("div");
    var characterName = document.createElement("div");
    var characterPicture = document.createElement("img");
    contentContainer.appendChild(characterName);
    contentContainer.appendChild(characterPicture);
    characterName.classList.add(`character-name`);
    characterPicture.classList.add(`character-picture`);
    characterName.innerHTML = data.name;
    characterPicture.src = data.image;
    secondContainer.appendChild(contentContainer);

        })
    }) 
    };
   
    

    


 
      
  
  
  