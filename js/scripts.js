
//IIFE function
let pokemonRepository = (function(){
        let pokemonList = [
          {name: "Blastoise", height: 5, types: ["Water"]},
          
          {name: "Metapod", height: 2, types: ["Bug"]},
          
          {name: "Venusaur", height: 6, types:["Grass","Poison"]},
        ];
        
      function add(pokemon) {
       pokemonList.push(pokemon);
        }
        
        function getAll(){
        return pokemonList;
        }
        
	return {
	add: add,
	getAll: getAll
	};
     
     })();
      
let myhtml = '';
var largest =0;
var bightml ='';
let PokemonHeight = '';
pokemonRepository.getAll().forEach(function(pokemon, index) {

  console.log(pokemon.name, pokemon.height, pokemon.types);
  myhtml += "Name:"+pokemon.name+" <br/>";
  myhtml += "Height: "+pokemon.height+"<br/>";
  myhtml += "Types: "+pokemon.types+"<br/>";
  myhtml += "<hr/>";
  if(largest< pokemon.height) {
  largest = pokemon.height;
  bightml =  "<h1>Wow this is big</h1>";
  bightml += "Name:"+pokemon.name+" <br/>";
  bightml += "Height: "+pokemon.height+"<br/>";
  bightml += "Types: "+pokemon.types+"<br/>";
  bightml += "<hr/>";
  pokemonHeight =pokemon.name + " " + pokemon.height + " wow thats big";
  
  }
 // document.write(pokemon.name , pokemon.height, pokemon.types);
  //document.write('<br>');
});
console.log(myhtml);
console.log(pokemonHeight);
document.getElementById("mypokemon").innerHTML = myhtml;
document.getElementById("mybig").innerHTML = bightml;




// length of the above array is the number of items in it = 3
// But an array starts at index 0 i.e. the first item in an array is at index 0
// the highest index in the above array is 2
// Since length = 3 is greater than the highest index, the for loop condition has to the be less than the length

//let biggest = 0;

//for (let i = 0; i < pokemonList.length; i++) {
       // let item = pokemonList[i];
      //  let biggestPokemon = pokemonList[biggest];
        
      //  if (item.height > biggestPokemon.height) {
              //  biggest = i;
  //      }
//}

//for (let i = 0; i < pokemonList.length; i++) {
  //   let item = pokemonList[i];
        
 //   if (i === biggest) {
 //     document.write(item.name + " (height: " + item.height + ")" + " - //Wow, that's big!" + "<br/>");   
 //   } else {
 //              document.write(item.name + " (height: " + item.height + ")" + "<br/>");
 //    }

