

function toggleIcon(collapseId) {
    var iconSpan = document.getElementById(collapseId + "-icon");
    var icon = iconSpan.querySelector("i");
    var collapseElement = document.getElementById(collapseId);
  
    // Toggle between plus and minus icons based on the current state
    if (collapseElement.classList.contains("show")) {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    } else {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    }
  }
  
