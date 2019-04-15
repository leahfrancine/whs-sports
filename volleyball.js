function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle('active')
}

var myTimer;
  function clock() {
    myTimer = setInterval(myClock, 1000);
    var c = 300;

    function myClock() {
      document.getElementById("time").innerHTML = --c;
      if (c == 0) {
        clearInterval(myTimer);
        document.getElementById("time").innerHTML = "0"
    }
      var min = c / 60;
      var sec = c % 60;
      return min + " : " + sec;
  }
}


