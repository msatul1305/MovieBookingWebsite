var glob;
function namecall(){

    console.log("localStorage="+localStorage[0]);
    var arr=["3 Idiots","Chichore","Bala","Avengers"];
    document.getElementById("mymovie").innerHTML=arr[localStorage[0]];
}
function myfunc(elem){
    var x=elem.id;
    console.log(x);
    glob=x;
    localStorage[0]=x;
    namecall(x);
}
 