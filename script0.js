
var maleNames = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
var femaleNames = ["akosua", "adwoa", "abenaa", "akwa", "yaa", "afua", "ama"];
var cen, year, month, date;
//ask for input

function input(){
  cen = parseInt(document.getElementById('century').value);
  year =parseInt(document.getElementById('year').value);
  month =parseInt(document.getElementById('month').value);
  date =parseInt(document.getElementById('date').value);
}


function calc(){
  input();
  day = (((cen/4) -2*year-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
    return day = (Math.floor(day));
}
  var result=calc();

function check(){
  calc();
  var radio = document.getElementsByName("rad");

  if (radio[0].checked = true) {
    gender = "male";
  }else if(radio[1].checked == true){
    gender = "female";
  }else{
    console.log("pass");
  }

  if (gender == "male") {
    if (day == 0){
      alert("You were born on a sunday" + maleNames[0]);
    }else if(day == 1){
      alert("You were born on a monday" + maleNames[1]);
    }else if(day == 2){
      alert("You were born on a tuesday" + maleNames[2]);
    }else if(day == 3){
      alert("You were born on a wednesday"+ maleNames[3]);
    }else if(day == 4){
      alert("You were born on a thursday" + maleNames[4]);
    }else if(day == 5){
      alert("You were born on a friday" + maleNames[5]);
    }else if(day == 6){
      alert("You were born on a saturday" + maleNames[6]);
    }
  }else if(gender == "female"){
    if (day == 0) {
      alert("You were born on a sunday" + femaleNames[0]);
    }else if(day == 1){
      alert("You were born on a monday" + femaleNames[1]);
    }else if(day == 2){
      alert("You were born on a tuesday" + femaleNames[2]);
    }else if(day == 3){
      alert("You were born on a wednesday"+ femaleNames[3]);
    }else if(day == 4){
      alert("You were born on a thursday" + femaleNames[4]);
    }else if(day == 5){
      alert("You were born on a friday" + femaleNames[5]);
    }else if(day == 6){
      alert("You were born on a saturday" + femaleNames[6]);
    }
  }

}
