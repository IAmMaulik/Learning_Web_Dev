const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const jokeAPI = "https://icanhazdadjoke.com";

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch(jokeAPI, config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}
