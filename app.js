const defaultData = {
  title:"Mapeando saberes, valorizando mulheres: As artesãs e o patrimônio de Carolina MA.",
  project:"O projeto visa trazer visibilidade para as artesãs de Carolina, mostrando a cultura, diversidade e memória de cada mulher junto com as suas histórias.",
  quote:"Cada peça carrega um pouco de quem cria, do lugar onde nasceu e da história que continua.",
  heroImage:"/assets/hero.jpeg",
  artisans:[
    {name:"Viviane",tech:"Decoração & artesanato",desc:"Artesã com saberes em decoração e artesanato, criando peças que encantam com criatividade, beleza e um toque acolhedor para o lar.",image:"/assets/viviane.jpeg"},
    {name:"Fátima Matos",tech:"Licor artesanal",desc:"Artesã dedicada à produção de licor artesanal, preservando receitas e sabores tradicionais com talento e cuidado em cada preparo.",image:"/assets/fatima.png"},
    {name:"Eva Galvão",tech:"Costura, bordado & crochê",desc:"Artesã que trabalha com costura, bordado e crochê, transformando fios e tecidos em peças delicadas, funcionais e cheias de identidade.",image:"/assets/evagal.jpeg"},
    {name:"Mariane",tech:"Costura, bordado & crochê",desc:"Artesã com saberes em costura, bordado e crochê, criando peças que unem técnica, delicadeza e uma estética handmade acolhedora.",image:"/assets/mariane.jpeg"},
    {name:"Valéria",tech:"Costura, bordado & crochê",desc:"Artesã que desenvolve trabalhos em costura, bordado e crochê, com atenção aos detalhes e ao valor dos ofícios tradicionais.",image:"/assets/valeria.jpeg"},
    {name:"Zeila Noleto",tech:"Crochê & artesanato",desc:"Artesã conhecida por peças em crochê, incluindo guarda-chuvas e outros artesanatos, mostrando habilidade, criatividade e tradição no ofício.",image:"/assets/zeila.jpeg"}
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
