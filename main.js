const canvas  = document.getElementById("canvas");

canvas.width = 300;

canvas.height = 300;


const sword = document.getElementById("sword");
const ctx = canvas.getContext("2d");
let y=100;
let swap = false;
function animate(){
    ctx.clearRect(0,0,300,300)
    ctx.drawImage(sword,100,y,180,100);
    if(y+100>300 || y<100){
        swap = !swap;
    }
    if(swap){
        y-=1;
    }else{
        y+=1;
    }
    
    requestAnimationFrame(animate);
}


animate();