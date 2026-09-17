const defaultData = {
  title:"Mapeando saberes, valorizando mulheres: As artesãs e o patrimônio de Carolina MA.",
  project:"O projeto visa trazer visibilidade para as artesãs de Carolina, mostrando a cultura, diversidade e memória de cada mulher junto com as suas histórias.",
  quote:"Cada peça carrega um pouco de quem cria, do lugar onde nasceu e da história que continua.",
  heroImage:"https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1000&q=85",
  artisans:[
    {name:"Viviane",tech:"Bordado & costura",desc:"Artesã carolinense de grandes saberes em costura e bordado, transformando tecidos em peças cheias de história, delicadeza e identidade.",image:"/assets/viviane.jpeg"},
    {name:"Fátima Matos",tech:"Fibra & trançado",desc:"Artesã de fibra e trançado, cuja técnica reflete tradição, resistência e criatividade, celebrando a beleza do trabalho manual.",image:"/assets/fatima.png"},
    {name:"Eva Galvão",tech:"Cerâmica & criação",desc:"Artesã carolinense com talento em cerâmica e criação, dando forma a peças que unem cultura, memória e expressão artística.",image:"/assets/evagal.jpeg"},
    {name:"Mariane",tech:"Cerâmica & criação",desc:"Artesã cujo olhar criativo e a habilidade na cerâmica revelam uma prática singular, marcada pela sensibilidade e pelo cuidado nas formas.",image:"/assets/mariane.jpeg"},
    {name:"Valéria",tech:"Cerâmica & criação",desc:"Artesã de Carolina que transforma a argila em peças com personalidade, resgatando a beleza dos saberes tradicionais e o valor do fazer artesanal.",image:"/assets/valeria.jpeg"},
    {name:"Zeila Noleto",tech:"Cerâmica & criação",desc:"Artesã de grande tradição em cerâmica e criação, cujas mãos despertam beleza, cultura e continuidade de um ofício cheio de memória.",image:"/assets/zeila.jpeg"}
  ],

  gallery:[
    "/assets/ima2.jpeg",
    "/assets/ima5.jpeg",
    "/assets/ima1.jpeg",
    "/assets/ima3.jpeg",
    "/assets/ima4.jpeg"

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
