function generateRecipe(event) {
    event.preventDefault();

    let apiKey = "8f6148bf7t4049b3979ae80dba7bo608";
    let prompt = "";
    let context = "";
    let apiUrl =
      `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    new Typewriter("#recipe", {
      strings: "Recipe",
      autoStart: true,
      delay: 5,
      cursor: "",
    });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);