// This pada object

// cara 1 declaration
function halo(){
    console.log(this);
    console.log("halo");
}
this.halo();
// this mengembalikan object global

// cara 2
var obj ={};
obj.halo=function(){
    console.log(this);
    console.log("halo");
}
obj.halo();
// Mengembalikan obj yang terkait (pada variabel)

// cara 2  constructor
function Halo(){
    console.log(this);
    console.log("halo");
}
var obj1 =new halo();
var obj2 =new halo();
// this mengembalikan object yang baru dibuat