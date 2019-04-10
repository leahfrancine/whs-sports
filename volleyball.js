function toggleSidebar(){
	document.getElementById("sidebar").classList.toggle('active')
}

var myTimer;
  function clock() {
    myTimer = setInterval(myClock, 1000);
    var c = 300;

    function myClock() {
      document.getElementById("time0").innerHTML = --c;
      if (c == 0) {
        clearInterval(myTimer);
        document.getElementById("time0").innerHTML = "0"
    }
  }
}