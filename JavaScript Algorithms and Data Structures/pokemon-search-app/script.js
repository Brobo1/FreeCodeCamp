const input = document.getElementById("search-input");
const btn = document.getElementById("search-button");
const container = document.getElementById("container");
const fetchData = async () => {
  try {
    const res = await fetch(
      "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon",
    );
    const data = await res.json();
    console.log(data);
    logNames(data);
  } catch (err) {
    console.log(err);
  }
};
const logNames = (data) => {
  const { results } = data;
  const name = results.find(
    (pokemon) =>
      pokemon.name === input.value.toLowerCase() ||
      pokemon.id.toString() === input.value.toLowerCase(),
  );
  if (name) {
    return fillData(name);
  } else {
    alert("Pokémon not found");
  }
};

const fillData = (pokemon) => {
  container.innerHTML = `
    <p class="pokemon-name">${pokemon.name}</p>
    <p class="pokemon-id">${pokemon.id}</p>
    <p class="weight">${pokemon.weight}</p>
    <p class="height">${pokemon.height}</p>
    <p class="types">${pokemon.type}</p>
    <p class="hp">${pokemon}</p>
    <p class="attack">${pokemon}</p>
    <p class="defense">${pokemon}</p>
    <p class="special-attack">${pokemon}</p>
    <p class="special-defense">${pokemon}</p>
    <p class="speed">${pokemon}</p>
  `;
};

btn.addEventListener("click", fetchData);
