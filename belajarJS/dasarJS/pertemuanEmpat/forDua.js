var jumlhAngkot = 10;
var angkotBeroperasi = 6;

for (var i = 1 ; i <=jumlhAngkot; i++){
    if (i <= angkotBeroperasi && i!==5){
        console.log("Angkot No. "+ i+" Beroperasi dengan baik");
    }else if(i===9||i===5){console.log("Angkot No. "+ i+" sedang lembur");}
    else{{console.log("Angkot No. "+ i+" sedang dalam perbaikan");}}
}