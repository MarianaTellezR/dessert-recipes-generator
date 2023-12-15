function displayRecipe(response) {
  console.log("Recipe Generated");

  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}
function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions").value;

  let apiKey = "8f6148bf7t4049b3979ae80dba7bo608";

  let context =
    "You are an expert chef on desserts and love to create delicious desserts and its recipes. Your mission is to create a recipe of a dessert, including ingredients and steps on how to make the dessert in basic HTML, with the ingredient that the user tells you. Make sure you follow the user instructions. Include a nice title with an h2 from html for the recipe.";

  let prompt = `User instructions: Generate a recipe of a dessert using the ingredient: ${instructionsInput}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating dessert recipe");
  console.log(`Prompt: ${prompt} `);
  console.log(`Context: ${context} `);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
