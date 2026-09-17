const defaultData = {
  title:"Mulheres que transformam arte em história.",
  project:"Ciências Delas nasce para registrar e divulgar histórias de mulheres artesãs de Carolina-MA. O projeto valoriza o conhecimento transmitido entre gerações, a criatividade presente em cada peça e o papel do artesanato na cultura e na economia local.",
  quote:"Cada peça carrega um pouco de quem cria, do lugar onde nasceu e da história que continua.",
  heroImage:"https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1000&q=85",
  artisans:[
    {name:"Maria de Exemplo",tech:"Bordado & costura",desc:"História da artesã e descrição de seu trabalho artesanal.",image:"licor artesanal.jpeg"},
    {name:"Ana de Exemplo",tech:"Fibra & trançado",desc:"História da artesã e descrição de seu trabalho artesanal.",image:"/assets/fatima.png"},
    {name:"Joana de Exemplo",tech:"Cerâmica & criação",desc:"História da artesã e descrição de seu trabalho artesanal.",image:"https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=800&q=80"}
  ],
  gallery:[
    "licor artesanal.jpeg",
    "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
  ]
};
function getData(){try{return {...defaultData,...JSON.parse(localStorage.getItem("cienciasDelas"))}}catch{return defaultData}}
const data=getData();
document.querySelector("#heroImage").src=data.heroImage;
document.querySelector("#projectText").textContent=data.project;
document.querySelector("#quoteText").textContent=data.quote;
document.querySelector("h1").innerHTML=data.title.replace(/(arte)/i,"<em>$1</em>");
document.querySelector("#artisanGrid").innerHTML=data.artisans.map(a=>`
<article class="artisan"><img src="${a.image}" alt="${a.name}"><div class="artisan-body"><div class="tech">${a.tech}</div><h3>${a.name}</h3><p>${a.desc}</p></div></article>`).join("");
document.querySelector("#gallery").innerHTML=data.gallery.map(x=>`<img src="${x}" alt="Galeria do projeto">`).join("");
