window.addEventListener("mousemove",move);
function move()
{var t=document.querySelectorAll(".eye");
t.forEach(function(t) {
   let x=(t.getBoundingClientRect().left)+(t.clientWidth/2); 
    let y = (t.getBoundingClientRect().top) + (t.clientHeight / 2);
let rad=Math.atan2(event.pageX-x,event.pageY-y);
let rotation=(rad*(180/Math.PI)*-1)+270;
t.style.transform="rotate("+rotation+"deg)"
});
}
