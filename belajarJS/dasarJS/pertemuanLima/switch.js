var i = prompt("Masukkan Nama Makanan / Minuman \n (nasi, daging, susu, hamburger, softdrink,");

switch (i) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert("Makanan/Minuman Sehat");
        break;

    case 'hamburger':
    case 'softdrink':
        alert("Makanan/Minuman tidak sehat");
        break;
    default:
        alert("Makanan/Minuman tidak terdaftar")
}