
function getHash() {
    const hashInput = document.querySelector(`#input-text`).value;
    location.hash = hashInput;
    document.getElementById("demo").innerHTML = "You just set your own HASH named: " + location.hash;
};

window.addEventListener('popstate', () => alert ("Here I used a popstate event"));

function goToBtn(){
    history.pushState({}, "", "home");
    document.getElementById("demo2").innerHTML = "Here I used pushState method"
};
// Aici am folosit metoda replaceState
// function goToBtn(){
//     history.replaceState (null, null,"settings");
//     document.getElementById("demo2").innerHTML = "Here I used replaceState method"
// };

function goBackBtn() {
    window.history.back()
};

function goFwdBtn() {
    window.history.forward()
};




 













