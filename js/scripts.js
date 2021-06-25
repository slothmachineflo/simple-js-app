//IIFE function
let pokemonRepository = (function() {
  let pokemonList = [];
  let modalContainer = document.querySelector('#modal-container');
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
        
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

//   function showModal ()
//   let modalContainer = document.querySelector('#modal-container');
//   modalContainer.classList.add('is-visible');
// }

// document.querySelector('#show-modal').addEventListener('click') => {
//   showModal();
// });


  function showDetails(pokemon){
    console.log(pokemon)
 
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon.name, pokemon.imageUrl, pokemon.height);
    });
  }
  function getAll(){
    return pokemonList;
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        const pokemonList = json.results
        
        pokemonList.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

	return {
   addListItem: addListItem,
	 getAll: getAll,
   loadList: loadList,
   // loadDetails: loadDetails,
	};

  // modal functions
  
  function showModal(title, text, height) {
    
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;


    let heightElement = document.createElement("p");
    heightElement.innerText = "Height:"+height;
    let contentElement = document.createElement('img');
    contentElement.src = text;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(heightElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);


    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  document.querySelector('#show-modal').addEventListener('click', () => {
    alert("1");
    showModal('Modal title', 'This is the modal content!');
  });
})();
      
let myhtml = '';
var largest =0;
var bightml ='';
let PokemonHeight = '';

pokemonRepository.loadList().then(function() {
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
})

document.getElementById("mypokemon").innerHTML = myhtml;
document.getElementById("mybig").innerHTML = bightml;


// IIFE _ Immediately Invoked Function Expression
(function () {})();

// Normal function
function normalFun() {}

function waitTwoSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}
