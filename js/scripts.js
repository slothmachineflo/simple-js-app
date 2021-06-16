let pokemonList = [
  {name: "Blastoise", height: 5, types: ["Water"]},
  
  {name: "Metapod", height: 2, types: ["Bug"]},
  
  {name: "Venusaur", height: 6, types:["Grass","Poison"]},
];  





pokemonList.forEach(function(pokemon) {
  console.log(pokemon.name, pokemon.height, pokemon.types);
  
});




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
  //      let item = pokemonList[i];
        
   //     if (i === biggest) {
        //     document.write(item.name + " (height: " + item.height + ")" + " - //Wow, that's big!" + "<br/>");   
     //   } else {
         //       document.write(item.name + " (height: " + item.height + ")" + "<br/>");
      //  }
//}
