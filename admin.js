const defaults = {
  title:"Mulheres que transformam arte em história.",
  project:"Ciências Delas nasce para registrar e divulgar histórias de mulheres artesãs de Carolina-MA. O projeto valoriza o conhecimento transmitido entre gerações, a criatividade presente em cada peça e o papel do artesanato na cultura e na economia local.",
  quote:"Cada peça carrega um pouco de quem cria, do lugar onde nasceu e da história que continua.",
  heroImage:"/assets/hero.jpeg",
  artisans:[
    {name:"Maria de Exemplo",tech:"Bordado & costura",desc:"História da artesã e descrição de seu trabalho artesanal.",image:"/assets/viviane.jpeg"},
    {name:"Ana de Exemplo",tech:"Fibra & trançado",desc:"História da artesã e descrição de seu trabalho artesanal.",image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"},
    {name:"Joana de Exemplo",tech:"Cerâmica & criação",desc:"História da artesã e descrição de seu trabalho artesanal.",image:"https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=800&q=80"}
  ],
  gallery:[
    "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
  ]
};
let data; try{data={...defaults,...JSON.parse(localStorage.getItem("cienciasDelas"))}}catch{data=defaults}
document.querySelector("#adminTitle").value=data.title;
document.querySelector("#adminProject").value=data.project;
document.querySelector("#adminQuote").value=data.quote;
document.querySelector("#adminHeroImage").value=data.heroImage;

function renderArtisans(){
 const el=document.querySelector("#adminArtisans");
 el.innerHTML=data.artisans.map((a,i)=>`
 <div class="edit-row">
   <img src="${a.image}" alt="">
   <div class="edit-fields">
     <input data-i="${i}" data-k="name" value="${esc(a.name)}" placeholder="Nome da artesã">
     <input data-i="${i}" data-k="tech" value="${esc(a.tech)}" placeholder="Técnica">
     <textarea data-i="${i}" data-k="desc" rows="4" placeholder="Descrição">${esc(a.desc)}</textarea>
   </div>
   <div><input data-i="${i}" data-k="image" value="${esc(a.image)}" placeholder="URL da imagem"></div>
   <button class="delete" onclick="removeArtisan(${i})">Excluir</button>
 </div>`).join("");
}
function renderGallery(){
 document.querySelector("#adminGallery").innerHTML=data.gallery.map((g,i)=>`
 <div class="edit-row" style="grid-template-columns:120px 1fr 80px">
   <img src="${g}" alt="">
   <input data-g="${i}" value="${esc(g)}" placeholder="URL da imagem">
   <button class="delete" onclick="removeGallery(${i})">Excluir</button>
 </div>`).join("");
}
function esc(s=""){return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
renderArtisans();renderGallery();

document.addEventListener("input",e=>{
 if(e.target.dataset.i!==undefined) data.artisans[e.target.dataset.i][e.target.dataset.k]=e.target.value;
 if(e.target.dataset.g!==undefined) data.gallery[e.target.dataset.g]=e.target.value;
});
document.querySelector("#addArtisan").onclick=()=>{data.artisans.push({name:"Nova artesã",tech:"Técnica artesanal",desc:"Escreva aqui a história e a descrição do trabalho.",image:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"});renderArtisans()};
document.querySelector("#addGallery").onclick=()=>{data.gallery.push("https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=80");renderGallery()};
window.removeArtisan=i=>{data.artisans.splice(i,1);renderArtisans()};
window.removeGallery=i=>{data.gallery.splice(i,1);renderGallery()};
document.querySelector("#saveAll").onclick=()=>{
 data.title=document.querySelector("#adminTitle").value;
 data.project=document.querySelector("#adminProject").value;
 data.quote=document.querySelector("#adminQuote").value;
 data.heroImage=document.querySelector("#adminHeroImage").value;
 localStorage.setItem("cienciasDelas",JSON.stringify(data));
 const t=document.querySelector("#toast");t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800);
};
