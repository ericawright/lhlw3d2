document.addEventListener("DOMContentLoaded", function(event) {
  let modal = document.getElementById('modal');
  let box = document.getElementById('box');
  let isShowing = true;
  box.addEventListener('click', function(event){
    // console.log(event);
    // console.log("is this the box?", this);
    // console.log(formElement)
    isShowing = !isShowing
    if (isShowing) {
      box.classList.add('blue')
      modal.classList.add('wider')
        // modal.style.display = 'none';
    } else {
      modal.classList.remove('wider')
      box.classList.remove('blue')
      // modal.style.display = 'block';
    }
    // box == this
    // box == event.target
    // alert("I was clicked")
  });
  
  let aTag = document.getElementById('atag'); 
  
  aTag.addEventListener('click', (event) => {
    alert('clicked!!!!')
    event.preventDefault();
    event.stopPropagation();
    // return false; 
  })
  
  modal.children[0].addEventListener('submit', function(event) {
    console.log('form submitted')
    event.preventDefault();  
    // return false;
  });
  
});





