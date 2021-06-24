
//IIFE function
let pokemonRepository = (function() {
  let pokemonList = [
    {name: "Blastoise", height: 5, types: ["Water"]},
    
    {name: "Metapod", height: 2, types: ["Bug"]},
    
    {name: "Venusaur", height: 6, types:["Grass","Poison"]},
  ];
        
  function add(pokemon) {
   pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    // Get the ul element created in the html
    const list = document.querySelector(".pokemon-list");
    // Create an li element
    const listItem = document.createElement("li");
    // Create a button element
    let button = document.createElement("button");
    // Set the button's inner text (display text)
    button.innerText = pokemon.name;
    // Add a class to the button
    button.classList.add("pokemon-btn");

    // Append button list item (li)
    listItem.appendChild(button);

    // Add a click event listener/handler
    addClickEventListener(button, pokemon);

    // Append list item (li) to list (ul)
    list.appendChild(listItem);
  }

  function addClickEventListener(element, pokemon) {
    // Add a click event listener/handler
    element.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon){
    console.log(pokemon.name);
  }

    
    
  function getAll(){
    return pokemonList;
  }
        
	return {
	 add: add,
   addListItem: addListItem,
	 getAll: getAll
	};
     
})();
      
let myhtml = '';
var largest =0;
var bightml ='';
let PokemonHeight = '';

pokemonRepository.getAll().forEach(function(pokemon, index) {
  pokemonRepository.addListItem(pokemon);

  // console.log(pokemon.name, pokemon.height, pokemon.types);
  // myhtml += "Name:"+pokemon.name+" <br/>";
  // myhtml += "Height: "+pokemon.height+"<br/>";
  // myhtml += "Types: "+pokemon.types+"<br/>";
  // myhtml += "<hr/>";
  // if(largest< pokemon.height) {
  // largest = pokemon.height;
  // bightml =  "<h1>Wow this is big</h1>";
  // bightml += "Name:"+pokemon.name+" <br/>";
  // bightml += "Height: "+pokemon.height+"<br/>";
  // bightml += "Types: "+pokemon.types+"<br/>";
  // bightml += "<hr/>";
  // pokemonHeight =pokemon.name + " " + pokemon.height + " wow thats big";
  // }
 
});

document.getElementById("mypokemon").innerHTML = myhtml;
document.getElementById("mybig").innerHTML = bightml;






// IIFE _ Immediately Invoked Function Expression
(function () {})();

// Normal function
function normalFun() {}
