window.onload = function() {
  clockChange();
  dateChange();
}

/* CLOCK AND DATE */

//runs the functions on every amount of milliseconds
setInterval(clockChange, 1000);
setInterval(dateChange, 180000);

/* Time and Date Change */
function clockChange(){
  var time = new Date();
  var hours = time.getHours().toString();
  var min = time.getMinutes().toString();

  if(hours.length<2){
    hours = '0' + hours;
  }
  if(min.length <2){
    min = '0' + min;
  }
  var newTimeHM = hours + ':' + min;
  document.getElementById("clock").innerHTML = newTimeHM;
}

function dateChange(){
  var date = new Date();
  var year = date.getFullYear().toString();
  var month = date.getMonth();
  var datenum = date.getDate();
  var datenumstr = datenum.toString();
  var day = date.getDay();

  var months = ["January", "Febuary", "March", "April", "May", "June", "July",
                "August", "September", "October", "Novemeber", "December"];

  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  month = months[month];

  if(day == 0){
    day = days[6];
  }else{
      day = days[day -1];
  }

  var newDate = day + ', ' + suffix(datenum) + ' ' + month + ', ' + year;

  document.getElementById("date").innerHTML = newDate;

}

function suffix(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}




