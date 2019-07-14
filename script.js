var cen, year, month, date, day, gender;
var maleNames["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
var femaleNames["akosua", "adwoa", "abenaa", "akwa", "yaa", "afua", "ama"];

//ask for input

function input(){
  cen = document.getElementById('century').value;
  year =document.getElementByid('year').value;
  month =document.getElementByid('month').value;
  date =document.getElementById('date').value;
  day =document.getElementById('day').value;
}


function calc(){
  input();
  day = ( ( (cen/4) -2*year-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
    return day = (Math.floor(day));
}

var radio = document.getElementsByName("rad");

if (rad[0].checked = true) {
  gender = "male";
}else if(rad[1].checked == true){
  gender == "female";
}else{
  console.log("pass");
}

function check(){
  calc();
  if (gender == "male") {
    if (day == 0) {
      alert("You were born on a sunday" + male Names[0]);
    }else if(day == 1){
      alert("You were born on a monday" + male Names[1]);
    }else if(day == 2){
      alert("You were born on a tuesday" + male Names[2]);
    }else if(day == 3){
      alert("You were born on a wednesday"+ male Names[3]);
    }else if(day == 4){
      alert("You were born on a thursday" + male Names[4]);
    }else if(day == 5){
      alert("You were born on a friday" + male Names[5]);
    }else if(day == 6){
      alert("You were born on a saturday" + male Names[6]);
    }
  }else if(gender == "female"){
    if (day == 0) {
      alert("You were born on a sunday" + female Names[0]);
    }else if(day == 1){
      alert("You were born on a monday" + female Names[1]);
    }else if(day == 2){
      alert("You were born on a tuesday" + female Names[2]);
    }else if(day == 3){
      alert("You were born on a wednesday"+ female Names[3]);
    }else if(day == 4){
      alert("You were born on a thursday" + female Names[4]);
    }else if(day == 5){
      alert("You were born on a friday" + female Names[5]);
    }else if(day == 6){
      alert("You were born on a saturday" + female Names[6]);
    }
  }

}
