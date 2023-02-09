const p3 = document.querySelector('.p3');
const p2= document.querySelector('.p2');


function ubahWarna2(){
    p2.style.backgroundColor ='lightBlue';

}
function ubahWarna3(){
    p3.style.backgroundColor ='lightBlue';

}
p2.onclick = ubahWarna2;
p3.onclick = ubahWarna3;

// addEventListener()
const p4 = document.querySelector('section#b p');
p4.addEventListener('click',function(){
    const ul= document.querySelector('section#b ul');
    const liBaru= document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});

// EventHandler
const p3 = document.querySelector('.p3');
p3.onclick=function(){
    p3.style.backgroundColor='lightBlue';

}
p3.onclick=function(){
    p3.style.color='red';

}
// Menumpuk function

p4.addEventListener('click',function(){
    p4.style.backgroundColor='lightBlue';
});
p4.addEventListener('click',function(){
    p4.style.color='red';
});
