function update() {
    var element = document.getElementById("myprogressBar");   
    var width = 1;
    var identity = setInterval(scene, 10);
    function scene() {
      if (width >= 100) {
        clearInterval(identity);
        window.location="portfolio.html";
      } else {
        width++; 
        element.style.width = width + '%'; 
      }
    }
  }