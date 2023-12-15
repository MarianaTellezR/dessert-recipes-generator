function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}
function generateRecipe(event) {
  event.preventDefault();

  let apiKey = "8f6148bf7t4049b3979ae80dba7bo608";
  let prompt = "";
  let context = "";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
