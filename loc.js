// create ele to add class clor
var cont = document.getElementById('continer')
//add localstorage to element
cont.classList.add(localStorage.getItem('changcolors')||'black')
//get element with attribute
var span = document.querySelectorAll('span');
// create list for attributes
var classlist = []
// loob for active elements
for(i = 0; i<span.length;i++){
    span[i].addEventListener('click',function(){
 classlist.push(this.getAttribute('data-color')); //get attribute
 cont.classList.remove(...classlist); //ecmascript 
 cont.classList.add(this.getAttribute('data-color'))
 localStorage.setItem('changcolors',this.getAttribute('data-color'))
   
    })
}
console.log(localStorage.getItem('changcolors'))