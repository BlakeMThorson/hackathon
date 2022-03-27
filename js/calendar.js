var currentMonth = new Date().getMonth();
var currentYear = new Date().getFullYear();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

function getMood(day, month, year){
  const months = ["bad","good","neutral"];

const random = Math.floor(Math.random() * months.length);
return months[random]
}

function addDays(){
  $(".calendar").html("");
  $("#month").text(`${monthNames[currentMonth]} ${currentYear}`);

  let totalDays = daysInMonth(currentMonth+1,currentYear);

  for(var i = 1 ; i <= totalDays ; i++){
    let mood = getMood(i,currentMonth,currentYear);
    let stencil = `
    <div class="col ${mood} flex-container">
       <h4 class="day">${i}</h4>
    </div>`;

    $(".calendar").append(stencil);

  }
}

function cycleMonth(direction){

if(direction == "up"){
  currentMonth ++;
}
else {
  currentMonth --;
}

if(currentMonth > 11){
  currentYear ++;
  currentMonth = 0;
}

if(currentMonth < 0){
  currentYear --;
  currentMonth = 11;
}

addDays();

}



$("#decMonth").click(function(){
  cycleMonth("down")
})
$("#incMonth").click(function(){
  cycleMonth("up")
})
addDays();
