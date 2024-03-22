
    // navbar
    const navTog = document.querySelector('.nav-toggle');
    const links = document.querySelector('.links');

    navTog.addEventListener('click', () => {
        links.classList.toggle('show-links');
    });

    async function getAllPokemons() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1025');
        const data = await response.json();
        const pokemonList = document.getElementById("pokemonList");
        if (data.results.length > 0) {
            pokemonList.innerHTML = ""; // Clear previous Pokémon
            for (const pokemon of data.results) {
                await displayPokemon(pokemon.url);
            }
        } else {
            pokemonList.innerHTML = "<p>No Pokémon found.</p>";
        }
    }

    async function getPokemonsByType(type) {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await response.json();
        const pokemonList = document.getElementById("pokemonList");
        if (data.pokemon.length > 0) {
            pokemonList.innerHTML = ""; // Clear previous Pokémon
            for (const entry of data.pokemon) {
                await displayPokemon(entry.pokemon.url);
            }
        } else {
            pokemonList.innerHTML = `<p>No ${type} type Pokémon found.</p>`;
        }
    }

    async function displayPokemon(url) {
        const response = await fetch(url);
        const data = await response.json();
        const pokemonContainer = document.getElementById("pokemonList");
        const pokemonDiv = document.createElement("div");
        pokemonDiv.classList.add("pokemon");
        const pokemonName = capitalizeFirstLetter(data.name);
        pokemonDiv.innerHTML = `<img src="${data.sprites.front_default}" alt="${pokemonName}"><p>${pokemonName}</p>`;
        pokemonContainer.appendChild(pokemonDiv);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Load all Pokémon when the window loads
    window.onload = function() {
        getAllPokemons();
    };
    const questions = document.querySelectorAll('.question')
    questions.forEach((question) => {
        console.log(question)
        const btn = question.querySelector('.question-btn')
        // btn event
        btn.addEventListener('click', ()=>{
            questions.forEach((item) => {
                if(item !== question){
                    item.classList.remove('show-text')
                }
            })
            question.classList.toggle('show-text')
        })
    })