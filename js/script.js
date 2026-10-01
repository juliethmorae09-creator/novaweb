
const btn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
if(btn)btn.onclick=()=>nav.classList.toggle("open");
const theme=document.getElementById("themeBtn");
if(localStorage.getItem("theme")==="light")document.body.classList.add("light");
if(theme)theme.onclick=()=>{document.body.classList.toggle("light");localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark")};

document.querySelectorAll(".service button").forEach(b=>b.onclick=()=>{
  b.textContent=b.textContent==="+"?"✓":"+";
  b.parentElement.style.borderColor=b.textContent==="✓"?"var(--hot)":"";
});

const form=document.getElementById("contactForm");
if(form)form.onsubmit=e=>{
 e.preventDefault();
 const n=document.getElementById("name"),em=document.getElementById("email"),m=document.getElementById("message"),r=document.getElementById("result");
 if(n.value.trim().length<2||!em.value.includes("@")||m.value.trim().length<10){
   r.textContent="⚠ Completa correctamente todos los campos.";r.style.color="var(--pink)";
 }else{
   r.textContent="✓ ¡Mensaje recibido! La función JavaScript funcionó correctamente.";r.style.color="var(--hot)";form.reset();
 }
};

const tilt=document.querySelectorAll(".tilt");
tilt.forEach(card=>{
 card.addEventListener("mousemove",e=>{
   const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
   card.style.transform=`perspective(800px) rotateX(${(y-r.height/2)/-25}deg) rotateY(${(x-r.width/2)/25}deg)`;
 });
 card.addEventListener("mouseleave",()=>card.style.transform="");
});
