// Variables
const btnParent = document.querySelector('.navbar');

// Get all buttons within container
const btns = btnParent.getElementsByClassName('btn');

// Loop through all the buttons to add active class
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(){
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

