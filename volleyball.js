function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle('active')
}

var myTimer;
  function clock() {
    myTimer = setInterval(myClock, 1000);
    var c = 300;

    function myClock() {
      var min = Math.floor(c / 60);
      var sec = c % 60;
      document.getElementById("5").innerHTML = min + " : " + sec;
      --c;
      if (c == 0) {
        clearInterval(myTimer);
        document.getElementById("5").innerHTML = "0"
    }
  }
}


