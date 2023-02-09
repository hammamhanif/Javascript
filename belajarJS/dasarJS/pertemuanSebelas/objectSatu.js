// Membuat Object
// Object literal
let mhs= {
    nama: "Hammam Hanif",
    nim: "022000017",
    email:"hammam123ahmad@gmail.com",
    Jurusan:"Tek. Nulir"
}
let mhs2= {
    nama: "Sandhika",
    nim: "022000018",
    email:"sandhika123@gmail.com",
    Jurusan:"Tek. Nulir"
}

// Function Declaration
    function objectMahasiswa(nama,nim,email,jurusan){
        var mhs={};
        mhs.nama= nama;
        mhs.nim=nim;
        mhs.email=email;
        mhs.jurusan=jurusan;
        return mhs;
    }
    var mhs3= objectMahasiswa("novariza",'02200019',"hajahaa@gmail.com","Tek.Informatika")

    // Constractor
    function Mahasiswa(nama,nim,email,jurusan){
        this.nama=nama;
        this.nim=nim;
        this.email=email;
        this.jurusan=jurusan;
    }
    var mhs4=new Mahasiswa("Erik","03300028","erik234@gmail.com","Tek.Fisika");