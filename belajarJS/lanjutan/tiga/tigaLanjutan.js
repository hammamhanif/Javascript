// Ambil semua elemen video
const videos= Array.from(document.querySelectorAll('[data-duration]'));

// Pilih Hanya JS lanjutan
let jsLanjut= videos.filter(video=>video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing2 video
.map (item=>item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
.map(waktu=>{
    // 10:30 -> [10,30] split array
    const parts =waktu.split(':').map(part=> parseFloat(part));
    return (parts[0] *60)+parts[1];
})

// Jumlahkan semua detik
.reduce((total,detik) => total+detik);

// ubah formatnya menjadi jam menit detik
const jam = Math.floor(jsLanjut/3600);
jsLanjut -=jam*3600;
const menit = Math.floor(jsLanjut/60);
const detik = jsLanjut-menit *60;

// simpan di document
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent =`${jam} jam, ${menit} menit, ${detik} detik`;

// Jmlah video
jmlVideo=videos.filter(video=>video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlvideo= document.querySelector('.jumlah-video');
pJmlvideo.textContent =`${jmlVideo} Video.`;