function init() {
    // let nama ='Sandika';
    return function (nama) {
        console.log(nama);
    }
}
let panggilNama = init();
panggilNama('Sandika');
panggilNama('Hammam');

// dua
function ucapkanSalam(waktu){
    return function (nama){
        console.log(`Halo ${nama} Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}
let selamatPagi = ucapkanSalam('Pagi')
let selamatSiang = ucapkanSalam('Siang')
let selamatMalam = ucapkanSalam('Malam')

console.dir(selamatPagi('Hammam'))