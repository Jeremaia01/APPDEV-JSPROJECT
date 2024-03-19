// Function to fetch all habitats and populate the dropdown
    function fetchAllHabitats() {
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon-habitat/';
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                populateHabitatDropdown(data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
                alert('Failed to fetch data. Please try again.');
            });
    }

    // Function to populate the habitat dropdown with options
    function populateHabitatDropdown(data) {
        const habitatDropdown = document.getElementById('habitat');

        // Add individual habitats
        data.results.forEach(habitat => {
            const option = document.createElement('option');
            option.value = habitat.name;
            option.textContent = habitat.name;
            habitatDropdown.appendChild(option);
        });
    }

    // Function to fetch Pokemon data based on selected habitat
    function fetchPokemonData() {
        const selectedHabitat = document.getElementById('habitat').value.trim().toLowerCase();

        // Construct the API URL based on the selected habitat
        let apiUrl = 'https://pokeapi.co/api/v2/pokemon-habitat/';
        if (selectedHabitat !== 'all') {
            apiUrl += selectedHabitat + '/';
        }

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayPokemonData(data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
                alert('Failed to fetch data. Please try again.');
            });
    }

    // Function to display Pokemon data in the list
    function displayPokemonData(data) {
        const pokemonListElement = document.getElementById('pokemonList');
        pokemonListElement.innerHTML = '';

        data.pokemon_species.forEach(pokemon => {
            const listItem = document.createElement('li');
            listItem.className = 'pokemon-item';
            listItem.textContent = pokemon.name;
            pokemonListElement.appendChild(listItem);
        });
    }

    // Load all habitats when the window loads
    window.onload = function() {
        fetchAllHabitats();
    };

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