const myButtons = document.querySelectorAll('.button');
const body = document.querySelector('body');
myButtons.forEach((button) => {
   button.addEventListener('click', (event) => {
       switch (event.target.id) {
           case 'grey':
               body.style.backgroundColor = event.target.id;
               break;
           case 'white':
               body.style.backgroundColor = event.target.id;
               break;
           case 'blue':
               body.style.backgroundColor = event.target.id;
               break;
           case 'yellow':
               body.style.backgroundColor = event.target.id;
               break; 
           case 'green':
               body.style.backgroundColor = event.target.id;
               break;
           case 'red':
               body.style.backgroundColor = event.target.id;
               break;                   
       }
   })   
})