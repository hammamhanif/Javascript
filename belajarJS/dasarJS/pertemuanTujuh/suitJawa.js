// Menangkap pilihan player
tanya = true
while (tanya){
var p = prompt("pilih: gajah, semut, manusia");

// Menangkap pilihan komputer
// Mmebangkitkan bilangan random number
var c = Math.random();

if (c <0.34){
    c="gajah";
}
else if (c >=0.34 && c<=0.67){
    c="semut";
}
else{
    c="Manusia";
}

// Menentukan rules
if(p==c){
    hasil= "SERI!";
}
else if(p=="gajah"){
    hasil=(c== "manusia")? 'MENANG!':'KALAH!';
}
else if(p=="manusia"){
    hasil=(c== "semut")? 'MENANG!':'KALAH!';
}
else if(p== "semut"){
    hasil=(c=="gajah")?"MENANG!":"KALAH!"
}
else{"Masukkan pilihan yang sesuai"}

// Tampilkan hasilnya
alert ("Kamu memilih : "+p+ " dan komputer memilih "+c +"\nkamu maka kamu " + hasil);

tanya = confirm("lagi?");
}
alert ("Terima kasih sudah bermain");