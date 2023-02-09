var jmlhAngkot = 10;
var angkotBeroperasi = 5;
var  noAngkot = 1;

while (noAngkot <= angkotBeroperasi){
    console.log("Angkot No. "+ noAngkot+" Beroperasi dengan baik")
    noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot<= jmlhAngkot; noAngkot++){
    console.log("Angkot No. "+ noAngkot +" sedang dalam perbaikan");
}