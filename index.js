const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;

ctx.fillStyle = '#000';
ctx.fillRect(0,0,w,h);

const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

const matrix = ()=> {
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);
    
    ctx.fillStyle = '#0f0';
    ctx.font = '15pt monospace';

    ypos.forEach((item, index)=>{
        const text = String.fromCharCode(Math.random() * 128);
        const x = index * 20;
        ctx.fillText(text, x, item);
        if(item > 100 + Math.random() * 10000){
            ypos[index] = 0
        }else{
            ypos[index] = item + 20
        }
    })

}

setInterval(matrix,50)