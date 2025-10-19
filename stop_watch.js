var minitue=document.getElementById("mint_id")
var second=document.getElementById("sec_id")
var mili_second=document.getElementById("milisec_id")
var start_btn=document.getElementById("start_btn")
var stop_btn=document.getElementById("stop_btn")
var reset_btn=document.getElementById("reset_btn")

var mint='00'
var sec='00'
var mili='00'
var my_interval
function start_func(){
 my_interval  = setInterval(()=>{
        mili++
        mili_second.innerHTML=mili

        if (mili>=100){
            mili=0
            sec++
            if (sec<10) {
                
                second.innerHTML="0"+ sec
            }
            else {
              second.innerHTML=sec
            }
        }

        if (sec>=60) {
            sec=0
            mint++
            if(mint<10){
             minitue.innerHTML="0"+ mint;
            }
            else{
              minitue.innerHTML= mint;
            }
        } 
        start_btn.disabled=true
    },10 )

}

function stop_func() {
    clearInterval(my_interval)
    start_btn.disabled=false
}

function reset_func() {
    clearInterval(my_interval)
     mint='00'
     sec='00'
     mili='00'
     mili_second.innerHTML=mili
     second.innerHTML=sec
     minitue.innerHTML=mint
     start_btn.disabled=false
}