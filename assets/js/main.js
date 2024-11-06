function myfunction(){
    var x=document.getElementById("mynav");
    if (x.className==="nav"){
        x.className +=" responsive"
    }
    else {
        x.className="nav";
    }
}

// slider show
var slides=document.getElementsByClassName("slide");
var pre=document.querySelector(".previous");
var next=document.querySelector(".next-one");
var n=0;
function displayNone(){
    for (let i=0;i<slides.length;i++){
        slides[i].style.display="none";//slider none
    }
}
function noActive(){
    for (let i=0;i<slides.length;i++){
        slides[i].classList.remove("active");//all give me active in slider
    }
}
next.addEventListener("click",function () {
    n++;
    if (n > slides.length - 1) {
        n = 0;
    }

    displayNone();
    noActive();
    slides[n].style.display="block";
    slides[n].classList.add("active");
});
pre.addEventListener("click",function (){
    n--;
    if (n<0){
        n=slides.length-1;
    }
   displayNone();
    noActive();
    slides[n].style.display="block";
    slides[n].classList.add("active")
});
setInterval(function (){
    n++;
    if (n>slides.length-1){
        n=0;
    }
   displayNone();
   noActive();
    slides[n].style.display="block";
    slides[n].classList.add("active")

},2000);

