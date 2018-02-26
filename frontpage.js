document.getElementById("bg1").addEventListener("click",function(){
    document.getElementById("main").style.display = "block";
});
document.getElementById("bg2").addEventListener("click",function(){
    document.getElementById("main").style.display = "block";
});
document.getElementById("bg3").addEventListener("click",function(){
    document.getElementById("main").style.display = "block";
});
document.getElementById("bg4").addEventListener("click",function(){
    document.getElementById("main").style.display = "block";
});

document.getElementById("bg1").addEventListener("click",function(){
    document.getElementById("innerhead").style.display = "block";
    document.getElementById("pic1").style.backgroundImage = "url(h1.png)";
    document.getElementById("pic2").style.backgroundImage = "url(h2.png)";
    document.getElementById("pic3").style.backgroundImage = "url(h3.png)";
});

document.getElementById("bg4").addEventListener("click",function(){
    document.getElementById("innerfoot").style.display = "block";
    document.getElementById("pic1").style.backgroundImage = "url(f1.png)";
    document.getElementById("pic2").style.backgroundImage = "url(f2.png)";
    document.getElementById("pic3").style.backgroundImage = "url(f3.png)";
});

document.getElementById("bg2").addEventListener("click",function(){
    document.getElementById("innerbody").style.display = "block";
    document.getElementById("pic1").style.backgroundImage = "url(b1.png)";
    document.getElementById("pic2").style.backgroundImage = "url(b2.png)";
    document.getElementById("pic3").style.backgroundImage = "url(b3.png)";
});

document.getElementById("bg3").addEventListener("click",function(){
    document.getElementById("innerleg").style.display = "block";
    document.getElementById("pic1").style.backgroundImage = "url(l1.png)";
    document.getElementById("pic2").style.backgroundImage = "url(l2.png)";
    document.getElementById("pic3").style.backgroundImage = "url(l3.png)";
});