function verifybmi1(){
const firstbmi=document.getElementById("john").value;




if (firstbmi< 18.5){
document.getElementById("divtowrite1").innerHTML="John is underweight";
}
else if(firstbmi>= 18.5 && firstbmi <25){
document.getElementById("divtowrite1").innerHTML="John BMI is normal";
}
else if(firstbmi>=25 && firstbmi <30){
document.getElementById("divtowrite1").innerHTML="John is overweight";
}
else if (firstbmi>=30){
document.getElementById("divtowrite1").innerHTML="John is obese";
}
}


function verifybmi2(){
const secondbmi=document.getElementById("mary").value;    

if (secondbmi< 18.5){
    document.getElementById("divtowrite2").innerHTML="Mary is underweight";
    }
    else if(secondbmi>= 18.5 && secondbmi <25){
    document.getElementById("divtowrite2").innerHTML="Mary BMI is normal";
    }
    else if(secondbmi>=25 && secondbmi <30){
    document.getElementById("divtowrite2").innerHTML="Mary is overweight";
    }
    else if (secondbmi>=30){
    document.getElementById("divtowrite2").innerHTML="Mary is obese";
    }

}


