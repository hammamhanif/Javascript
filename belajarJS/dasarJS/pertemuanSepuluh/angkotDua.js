let penumpang =[];
let tambahPenumpang = function(namaPenumpang,penumpang){
    // jika angkot kosong
    if(penumpang.length==0){
        //tambah penumpang diawal array
        penumpang.push(namaPenumpang);
        // Kembalikan isi array dan keluar dari function
        return penumpang;
    }
    else{
        // telusuri seluruh kursi dari awal
        for (let i=0;i<penumpang.length;i++){
            // jika ada kursi kosong
            if(penumpang[i]==undefined){
                // tambah penumpang pada kursi tersebut
                penumpang[i]=namaPenumpang;
                // Kembalikan isi array dan keluar dari function
                return penumpang;
            }
            // Jika sudah ada nama yang sama
            else if(penumpang[i]==namaPenumpang){
                // Tampilkan pesan kesalahan
                console.log(namaPenumpang+" sudah terdapat di dalam angkot");
                // kembalikan isi array
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if(i==penumpang.length-1){
                penumpang.push(namaPenumpang);
                // kembalikan isi array
                return penumpang;
            }
        }
    }
}

// Fungsi hapus penumpang 
let hapusPenumpang= function(namaPenumpang, penumpang){
    if (penumpang.length==0){
        console.log("Angkot Masih Kosong")
        return penumpang;
    }else{
        for(let i=0;i<penumpang.length;i++){
            if(penumpang[i]==namaPenumpang){
                penumpang[i]=undefined;
                return penumpang;
            }else if(i==penumpang.length-1){
                console.log(namaPenumpang+" Tidak ada dalam angkot")
                return penumpang;
            }
        }
    }
}
