let x = document.getElementById("scroll")
let header = document.querySelector("header");
window.onscroll = function (){
    if (scrollY >= 400) {
    x.style.opacity = "1";
}else {
    x.style.opacity = "0";
}
if (scrollY >= 358 ) {
    header.style.cssText = `
    position: fixed;
    width: 100%;
    top: 0;
    opacity: .8;
    z-index: 6515151515151515151515151;
    `
}else {
    header.style.cssText = `
    position: relative;
    `
}
}

x.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
}
let count = document.getElementsByClassName("count");
    for(let i = 0 ; i < count.length ; i++) {
        let number = +count[i].innerHTML;
        count[i].innerHTML = 0;
        let counter = setInterval(function(){
            count[i].innerHTML++;
            if(number == count[i].innerHTML){
                clearInterval(counter)
            }
        } , 50)
    }
    
    console.log(document.links)