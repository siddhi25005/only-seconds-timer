let time=document.querySelector(".time");
let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let reset=document.querySelector(".reset");
let sec=0;
let interval;
function update(){
    time.innerText=`Time : ${sec}`;
}
start.addEventListener("click",()=>{
    if(!interval) {
        interval=setInterval(()=>{
            sec++;
            update();
        },1000)
    }
})
stop.addEventListener("click",()=>{
    clearInterval(interval);
    interval=null;
})
reset.addEventListener("click",()=>{
    clearInterval(interval);
    interval=null;
    sec=0;
    update();
})
update();
