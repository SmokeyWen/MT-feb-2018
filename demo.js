var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var c4 = document.getElementById("choice4");

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

document.getElementById("next").addEventListener("click",function(){
    if(c1.checked){
        if(head.src.match("h1.png")){
            head.src = "h2.png";
        }
        else if(head.src.match("h2.png")){
            head.src = "h3.png";
        }
        else {
            head.src = "h1.png";
        }

    }
    
    else if(c2.checked){
        if(body.src.match("b1.png")){
            body.src = "b2.png";
        }
        else if(head.src.match("b2.png")){
            body.src = "b3.png";
        }
        else {
            body.src = "b1.png";
        }

    }
    
    else if(c3.checked){
        if(leg.src.match("l1.png")){
            leg.src = "l2.png";
        }
        else if(leg.src.match("l2.png")){
            leg.src = "l3.png";
        }
        else {
            leg.src = "l1.png";
        }

    }
    
    else if(c4.checked){
        if(foot.src.match("f1.png")){
            foot.src = "f2.png";
        }
        else if(foot.src.match("f2.png")){
            foot.src = "f3.png";
        }
        else {
            foot.src = "f1.png";
        }

    }
    else{
        alert("Choose an option")
    }
});

document.getElementById("previous").addEventListener("click",function(){
    if(c1.checked){
        if(head.src.match("h3.png")){
            head.src = "h2.png";
        }
        else if(head.src.match("h2.png")){
            head.src = "h1.png";
        }
        else {
            head.src = "h3.png";
        }

    }
    
    else if(c2.checked){
        if(body.src.match("b3.png")){
            body.src = "b2.png";
        }
        else if(head.src.match("b2.png")){
            body.src = "b1.png";
        }
        else {
            body.src = "b3.png";
        }

    }
    
    else if(c3.checked){
        if(leg.src.match("l3.png")){
            leg.src = "l2.png";
        }
        else if(leg.src.match("l2.png")){
            leg.src = "l1.png";
        }
        else {
            leg.src = "l3.png";
        }

    }
    
    else if(c4.checked){
        if(foot.src.match("f3.png")){
            foot.src = "f2.png";
        }
        else if(foot.src.match("f2.png")){
            foot.src = "f1.png";
        }
        else {
            foot.src = "f3.png";
        }

    }
    else{
        alert("Choose an option")
    }
});

var enter = document.getElementById("text");

enter.addEventListener("keyup",function(ev){
    if(ev.keyCode == 13){
        if(enter.value == "combo1"){
            head.src = "h1.png";
            body.src = "b1.png";
            leg.src = "l1.png";
            foot.src = "f1.png";
        }
    
    
    
        else if(enter.value == "combo2"){
            head.src = "h2.png";
            body.src = "b2.png";
            leg.src = "l2.png";
            foot.src = "f2.png";
        }
    
    
    
        else if(enter.value == "combo3"){
            head.src = "h3.png";
            body.src = "b3.png";
            leg.src = "l3.png";
            foot.src = "f3.png";
        }
    
    
        else if(enter.value == "random"){
            var num = getRandomInt(3)+1;
            head.src = "h" + num + ".png";
            body.src = "b" + num + ".png";
            leg.src = "l" + num + ".png";
            foot.src = "f" + num + ".png";
        }
        else{
            alert("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        }
        
    }
})
