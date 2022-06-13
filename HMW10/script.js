const animalList = document.getElementById("animalList");
const getPhoto = document.querySelector("#getPhoto");
const repeatAction = document.getElementById("repeatAction"); 

getPhoto.addEventListener(`click`, returnPhoto);

function returnPhoto () {
  let listOption = animalList.options[animalList.selectedIndex].value;
  if (listOption === `foxPhoto`) {
    getMyFoxPhoto();
  } else if (listOption === `dogPhoto`) {
    getMyDogPhoto();
  } else {
    getMyCatPhoto();
  }
}

function getMyDogPhoto() {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then(function (data) {
      console.log(data.message);
      const html = `<div id='removeThis'>
  <img alt='Error, please refresh!' class='newPic' src='${data.message}'/>
  </div>`;
      myDiv.insertAdjacentHTML(`beforeend`, html);
      document.getElementById(`getPhoto`).classList.add(`hidden`);
    });
}
function getMyCatPhoto() {
  fetch(`https://api.thecatapi.com/v1/images/search`)
    .then(response => response.json())
    .then(function (data) {
      [catData] = data;
      console.log(catData.url);
      const html = `<div id='removeThis'>
  <img alt='Error, please refresh!' class='newPic' src='${catData.url}'/>
  </div>`;
      myDiv.insertAdjacentHTML(`beforeend`, html);
      document.getElementById(`getPhoto`).classList.add(`hidden`);
    });
}
function getMyFoxPhoto() {
  fetch(`https://randomfox.ca/floof/`)
    .then(response => response.json())
    .then(function (data) {
      console.log(data.image);
      const html = `<div id='removeThis'>
  <img alt='Error, please refresh!' class='newPic' src='${data.image}'/>
  </div>`;
      myDiv.insertAdjacentHTML(`beforeend`, html);
      document.getElementById(`getPhoto`).classList.add(`hidden`);
    });
}

function doItAgain(){
  document.getElementById(`removeThis`).remove();
  document.getElementById(`getPhoto`).classList.remove(`hidden`);
}

repeatAction.addEventListener(`click`,doItAgain);

