alert("Halo");
alert("Selamat datang di Website resmi LPUM Poltek Nuklir");
alert("Salam Kenal");
var nama = prompt("Masukkan Nama Anda");
var konfirmasi = confirm("apakah yakin nama anda " + nama);
if (konfirmasi === true) {
    alert("selamat datang di Website resmi kami "+ nama);
}else{alert("Ketikan nama anda dengan benar");}
// alert("Selamat datang " + nama);