const input = document.getElementById("search-input");
const btn = document.getElementById("search-button");
const pName = document.getElementById("pokemon-name");
const pId = document.getElementById("pokemon-id");

const fetchData = async () => {
  try {
    const res = await fetch(
      "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon",
    );
    const data = await res.json();
    logNames(data);
  } catch (err) {
    console.log(err);
  }
};
const logNames = (data) => {
  const { count, results } = data;
  const name = results.find(
    (pokemon) =>
      pokemon.name === input.value.toLowerCase() ||
      pokemon.id.toString() === input.value.toLowerCase(),
  );
  if (name) {
    console.log(name);
  } else {
    alert("Pokémon not found");
  }
};

btn.addEventListener("click", fetchData);
