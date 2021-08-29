var span=document.getElementById("sp");
var x=1;
function buy(){
span.style.visibility= 'visible';
span.style. opacity= '1';
span.innerHTML = "pieces   "+x;
x++;
}
var span2=document.getElementById("sp2");
var y=1;
function buy2(){
span2.style.visibility= 'visible';
span2.style. opacity= '1';
span2.innerHTML = "pieces   "+y;
y++;
}
var span3=document.getElementById("sp3");
var z=1;
function buy3(){
span3.style.visibility= 'visible';
span3.style. opacity= '1';
span3.innerHTML = "pieces   "+z;
z++;
}
var span4=document.getElementById("sp4");
var a=1;
function buy4(){
span4.style.visibility= 'visible';
span4.style. opacity= '1';
span4.innerHTML = "pieces   "+a;
y=a++;
}

var i=0;
var slid=["images/background/background2.webp","images/background/background1.webp","images/background/background3.webp"]
var slidshow=function(){
    document.slideshow.src=slid[i];
    if(i < slid.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("slidshow()",2000)
}
slidshow();




