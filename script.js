var cen, year, month, date, day;

//ask for input

cen = document.getElementById('century').value;
year =document.getElementByid('year').value;
month =document.getElementByid('month').value;
date =document.getElementById('date').value;
day =document.getElementById('day').value;


function cal(){
  day = ( ( (cen/4) -2*year-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
  day = (Math.floor(day));
}
<button type="button" onclick="alert('your nzme is')">Click Me!</button>
