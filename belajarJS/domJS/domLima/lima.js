const tUbahWarna= document.getElementById('tUbahWarna');
// event handler
tUbahWarna.onclick= function(){
    // document.body.style.backgroundColor='lightblue';
    // document.body.setAttribute('class','merah');
    document.body.classList.toggle('biru-muda');

}

// tombol ubah warna
const tAcakWarna= document.createElement('button');
const teksTombol= document.createTextNode('Acak warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type','button');
tUbahWarna.after(tAcakWarna);


let rgb = () => {
    const r = Math.round(Math.random()*255+1);
    const g = Math.round(Math.random()*255+1);
    const b = Math.round(Math.random()*255+1);
    let rgbs = (document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`);
    return rgbs;
};
tAcakWarna.addEventListener('click',rgb);

const cMerah2 = document.querySelector('input[name=sMerah]');
const cGreen2 = document.querySelector('input[name=sHijau]');
const cBlue2 = document.querySelector('input[name=sBiru]');

let rgb2 = () => {
    const r = cMerah2.value;
    const g = cGreen2.value;
    const b = cBlue2.value;
    let rgbs = (document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`);
    return rgbs;
};

cMerah2.addEventListener('input', rgb2);

cGreen2.addEventListener('input', rgb2);

cBlue2.addEventListener('input', rgb2);


document.body.addEventListener('mousemove',function(event) {
       const xPos = Math.round((event.clientX / window.innerWidth)*255);
        const yPos = Math.round((event.clientY / window.innerWidth)*255); 
        document.body.style.backgroundColor =`rgb(${xPos},${yPos},100)`;
})

// let kursor = (event)=>{
//     const xPos = Math.round((event.clientx / window.innerWidth)*255);
//     const yPos = Math.round((event.clientY / window.innerWidth)*255);
//     console.log(xPos);
//     let kursors = document.body.style.backgroundColor =`rgb(${xPos},${yPos},100)`;
//     return kursors;
// }
// document.body.addEventListener('mousemove',kursor);