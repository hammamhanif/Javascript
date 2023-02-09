const judul =document.getElementsByTagName('h')[0];

const a= document.querySelector('section#a a');
a.setAttribute('id','link'); //mengubah atribut html

// DOM Manipulasi
const pBaru= document.createElement('p');
const teksBaru =document.createTextNode('Paragraf Baru');

// simpan tulisan 
pBaru.appendChild(teksBaru);

// simpan teks di section a
const sectionA= document.getElementById('a');
sectionA.appendChild(pBaru);

// insertBefore()
const liBaru= document.createElement('li');
const teksLiBaru= document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);
const ul=document.querySelector('section#b ul');
const li2 =ul.querySelector('li:nth-child(2)')
ul.insertBefore(liBaru,li2);

// Remove
const link= document.getElementsByTagName('a')[0];

sectionA.removeChild(link);