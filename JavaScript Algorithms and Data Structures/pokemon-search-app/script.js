const input = document.getElementById("search-input");
const btn = document.getElementById("search-button");
const container = document.getElementById("container");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const speed = document.getElementById("speed");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const types = document.getElementById("types");
const image = document.getElementById("image");

const pokeDb = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const fetchData = async () => {
  try {
    const res = await fetch(pokeDb);
    const data = await res.json();
    await logNames(data);
  } catch (err) {
    console.log(err);
  }
};

const fetchPokemon = async (name) => {
  try {
    const res = await fetch(name);
    const data = await res.json();
    fillData(data);
  } catch (err) {
    console.log(err);
  }
};

const logNames = async (data) => {
  const { results } = data;
  const name = results.find(
    (pokemon) =>
      pokemon.name === input.value.toLowerCase() ||
      pokemon.id.toString() === input.value.toLowerCase(),
    // pokemon.id.toString() === "1",
  );
  if (name) {
    await fetchPokemon(name.url);
  } else {
    alert("Pokémon not found");
  }
};

const fillData = (pokemon) => {
  let typesHTML = "";
  console.log(pokemon);

  pokemonName.textContent = pokemon.name;
  pokemonId.textContent = pokemon.id;
  weight.textContent = pokemon.weight;
  height.textContent = pokemon.height;
  hp.textContent = pokemon.stats[0].base_stat;
  attack.textContent = pokemon.stats[1].base_stat;
  defense.textContent = pokemon.stats[2].base_stat;
  specialAttack.textContent = pokemon.stats[3].base_stat;
  specialDefense.textContent = pokemon.stats[4].base_stat;
  speed.textContent = pokemon.stats[5].base_stat;
  pokemon.types.forEach((type) => {
    typesHTML += `<p class="type">${type.type.name}</p>`;
  });
  types.innerHTML = typesHTML;

  image.innerHTML = `<img id="sprite" src="${pokemon.sprites["front_default"]}"/>`;
};

btn.addEventListener("click", fetchData);
