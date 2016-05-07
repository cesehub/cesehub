window.onload = function() {
  var sidebar = document.getElementById("sidebar");

  function openSidebar(e) {
    if (sidebar.className.indexOf("slideIn") != -1) {
      sidebar.className = sidebar.className.replace(" slideIn", "");
    } else {
     sidebar.className = sidebar.className + " slideIn"; 
    }
  }

};
