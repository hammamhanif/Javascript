// Objek literal

// Problem: tidak efektif
// let mahasiswa1 ={
//     nama : 'Hammam',
//     energi: 10,
//     makan : function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }
// };
// let mahasiswa2 ={
//     nama : 'Hanif',
//     energi: 10,
//     makan : function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }
// };

// Function Declaration
// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     },
//     main: function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!`);
//     },
//     tidur: function(jam){
//         this.energi += jam;
//         console.log(`Halo ${this.nama}, Selamat Tidur!`);
//     },
// };

// function Mahasiswa(nama,energi){
//     let mahasiswa =Object.create(methodMahasiswa);
//     mahasiswa.nama =nama;
//     mahasiswa.energi=energi;

//     return mahasiswa;
// };
// let Hammam = Mahasiswa('Hammam',10);
// let Hanif = Mahasiswa('Hanif',20);


// Ubah lebih efektif dengan Constructor
function Mahasiswa(nama,energi){
    this.nama =nama;
    this.energi=energi;

};

// Membuat methods dan properti
Mahasiswa.prototype.makan= function(porsi){
    this.energi+= porsi;
    return `Halo ${this.nama}, selamat Makan!`;
}

Mahasiswa.prototype.main= function(jam){
    this.energi-= jam;
    return `Halo ${this.nama}, selamat Bermain!`;
}
Mahasiswa.prototype.tidur= function(jam){
    this.energi+= jam*2 ;
    return `Halo ${this.nama}, selamat Tidur!`;
}
let Hammam = new Mahasiswa('Hammam',10);

// Versi class
class Mahasiswa {
    constructor(nama,energi){
        this.nama =nama;
        this.energi=energi;
    }

    makan(porsi){
        this.energi+= porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }
    main(jam){
        this.energi-= jam;
        return `Halo ${this.nama}, selamat Bermain!`;
    }
    tidur(jam){
        this.energi+= jam*2 ;
        return `Halo ${this.nama}, selamat Tidur!`;
    }
}
