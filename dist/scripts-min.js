let pokemonRepository=function(){let t=[],e=document.querySelector("#modal-container");function n(e){t.push(e)}return window.addEventListener("keydown",(t=>{"Escape"===t.key&&e.classList.contains("is-visible")&&e.classList.remove("is-visible")})),{addListItem:function(t){const e=document.querySelector(".pokemon-list"),n=document.createElement("li");n.classList.add("list-group-item");let o=document.createElement("button");o.innerText=t.name,o.classList.add("btn"),o.classList.add("btn-outline-warning"),o.classList.add("btn-block"),o.setAttribute("data-toggle","modal"),o.setAttribute("data-target","#pokemonModal"),n.appendChild(o),function(t,e){t.addEventListener("click",(function(){!function(t){(function(t){let e=t.detailsUrl;return fetch(e).then((function(t){return t.json()})).then((function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.types=e.types})).catch((function(t){}))})(t).then((function(){var e,n,o;e=t.name,n=t.imageUrl,o=t.height,document.getElementById("pokemonName").innerText=e,document.getElementById("pokemonHeight").innerText=""+o,document.getElementById("pokemonImage").src=n}))}(e)}))}(o,t),e.appendChild(n)},getAll:function(){return t},loadList:function(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then((function(t){return t.json()})).then((function(t){t.results.forEach((function(t){n({name:t.name,detailsUrl:t.url})}))})).catch((function(t){}))}}}(),myhtml="";var bightml="";pokemonRepository.loadList().then((function(){pokemonRepository.getAll().forEach((function(t){pokemonRepository.addListItem(t)}))})),document.getElementById("mypokemon").innerHTML=myhtml,document.getElementById("mybig").innerHTML=bightml;