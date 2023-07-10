import { bgArray } from "./module.js";


// ----select Element
const rangeInput = document.querySelector('input');
const container = document.querySelector('.container');

// ----get value of Range when it changes and set it for Brightness filter 
rangeInput.addEventListener('change', (event) => {
    container.style.filter =`brightness(${event.target.value}%)`;
})

// ----set Random Background
setInterval(() => {
    let index=Math.floor(Math.random() *4);
    // console.log(bgArray[index] );
    container.style.background=`URL(${bgArray[index]})  center center/cover no-repeat fixed`;
    
}, 2000);

