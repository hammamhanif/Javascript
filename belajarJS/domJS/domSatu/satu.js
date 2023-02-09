// DOM selection
// getElementByid()
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'gray';
judul.innerHTML ="Hammam";  

// getlElementsBytagName
// HTML Collection
const p= document.getElementsByTagName("p");
p[2].innerHTML="ini hasil perubahan";

// getElementsByClassName
const d = document.getElementsByClassName('p1')[0];
d.style.backgroundColor="red";

// document.querySelector
