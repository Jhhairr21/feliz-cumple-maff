//=========================================
// ELEMENTOS
//=========================================

const audio = document.getElementById("audio");
const musicBtn = document.getElementById("music");

//=========================================
// REPRODUCIR MUSICA
//=========================================

if(musicBtn){

musicBtn.addEventListener("click",()=>{

if(audio.paused){

audio.play();

musicBtn.innerHTML="⏸ Pausar música";

}else{

audio.pause();

musicBtn.innerHTML="🎵 Reproducir música";

}

});

}

//=========================================
// EFECTO MAQUINA DE ESCRIBIR
//=========================================

const carta=document.querySelector("#carta p");

if(carta){

const texto=carta.innerHTML;

carta.innerHTML="";

let i=0;

function escribir(){

if(i<texto.length){

carta.innerHTML+=texto.charAt(i);

i++;

setTimeout(escribir,28);

}

}

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

escribir();

observer.disconnect();

}

});

});

observer.observe(carta);

}

//=========================================
// CORAZONES FLOTANDO
//=========================================

function crearCorazon(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(crearCorazon,350);

//=========================================
// APARICION SUAVE
//=========================================

const sections=document.querySelectorAll("section");

const observer2=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},
{
threshold:.25
});

sections.forEach(sec=>{

observer2.observe(sec);

});

//=========================================
// CONTADOR DE TIEMPO JUNTOS
//=========================================

const contador=document.getElementById("contador");

if(contador){

function actualizar(){

const inicio=new Date("2026-02-14");

const hoy=new Date();

let diferencia=hoy-inicio;

let dias=Math.floor(diferencia/1000/60/60/24);

let meses=Math.floor(dias/30);

let años=Math.floor(meses/12);

meses=meses%12;

dias=dias%30;

contador.innerHTML=

`
<h3>❤️ Llevamos juntos ❤️</h3>

<h2>${años} años</h2>

<h2>${meses} meses</h2>

<h2>${dias} días</h2>

`;

}

actualizar();

}

//=========================================
// CONFETI
//=========================================

function lanzarConfeti(){

for(let i=0;i<180;i++){

const conf=document.createElement("span");

conf.className="confeti";

conf.style.left=Math.random()*100+"vw";

conf.style.background=

`hsl(${Math.random()*360},100%,60%)`;

conf.style.animationDuration=(2+Math.random()*3)+"s";

document.body.appendChild(conf);

setTimeout(()=>{

conf.remove();

},5000);

}

}

//=========================================
// BOTON SORPRESA
//=========================================

const sorpresa=document.getElementById("sorpresa");

if(sorpresa){

sorpresa.addEventListener("click",()=>{

lanzarConfeti();

alert("❤️ Feliz cumpleaños mi Maff ❤️\n\nGracias por existir.\nEres el mejor regalo que la vida pudo darme.\nTe quiero muchísimo. ❤️");

});

}

//=========================================
// SCROLL SUAVE
//=========================================

document.querySelectorAll("a[href^='#']").forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const destino=document.querySelector(link.getAttribute("href"));

if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});