function addToCart(){
    let cartTotal = document.getElementById('cart-count');
    cartTotal.innerText++;
}

function linuxAvailable(){
    alert("This game is supported on Linux")
}


var i = 0; 			
var images = [];	
images[0] = "./images/stonepunk.png";
images[1] = "./images/cafe-neko.png";
images[2] = "./images/pixel-ninjas-2.png";

function loadImg(){
    document.getElementById('slideshow').src= images[0];
}

window.onload=loadImg();

function nextImg(){
    if(i<images.length-1){
        i++;
        document.getElementById('slideshow').src = images[i];
        console.log(i); 
    } else{
        i=0;
        document.getElementById('slideshow').src = images[i];
        console.log(i); 
    }
    return i;
}

function previousImg(){
    if(i!=0){
        i--;
        document.getElementById('slideshow').src = images[i];
        console.log(i); 
    } else{
        i=2;
        document.getElementById('slideshow').src = images[i];
        console.log(i); 
    }
    return i;
}
