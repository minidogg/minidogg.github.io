let snowflakes = new Set()
const canvas = document.getElementById("snowfall")
const ctx = canvas.getContext("2d")

window.document.scrollX = 0;
window.document.scrollY = 0;

function random(max){
    return Math.floor(Math.random()*max)
}
function resize(){
    canvas.width = window.innerWidth+20;
    canvas.height = window.innerHeight+20;
    regenerate()
}
resize()
window.addEventListener("resize", resize)
function render(){

    ctx.fillStyle = "#000216"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    snowflakes.forEach((e)=>{
        ctx.globalAlpha = e.size/10
        const gradient = ctx.createRadialGradient(e.x, e.y, e.size*0.1, e.x, e.y, e.size*0.2);

        gradient.addColorStop(0, "#a2a2a2ff");
        gradient.addColorStop(1, "#000216");

        ctx.fillStyle = gradient;
        ctx.fillRect(e.x-e.size, e.y-e.size, e.size*2, e.size*2);
        e.y+=0.1*random(5)
        e.x+=0.1*random(5)
        if(e.y>canvas.height||e.x>canvas.width){
            let r = random(2)
            if(r==0)e.x = random(canvas.width)-10
            if(r==1)e.x = 0
            if(r==0)e.y=0
            if(r==1)e.y = random(canvas.height)-10
            e.size=random(20)+5
        }
    })
    
    requestAnimationFrame(render)
}


function regenerate(){
    snowflakes.clear()
    for(let i = 0;i<70;i++){
    snowflakes.add({
        x:random(canvas.width),
        y:random(canvas.height+100)-100,
        size:random(20)+5,
    })
}
}
regenerate()
render()