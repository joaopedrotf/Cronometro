var sec=0
var min=0
var hor=0
var intervalo

function digito(num){
    if(num<10){
        return('0'+num)
    }else{
        return (num)
    }
}

function iniciar(){
    watch()
    intervalo=setInterval(watch,1000)
}
function pausar(){
    clearInterval(intervalo)
}
function parar(){
    clearInterval(intervalo)
    sec=0
    min=0
    hor=0
    document.getElementById('crono').innerHTML='00:00:00'
}

function watch(){
    sec++
    if(sec==59){
        min++
        sec=0
        
    }if(min==59){
        hor++
        min=0
    }
    document.getElementById('crono').innerHTML=digito(hor)+':'+digito(min)+':'+digito(sec)

}