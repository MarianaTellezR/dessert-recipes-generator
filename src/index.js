function generateRecipe(event) {
    event.preventDefault();
    
    new Typewriter("#recipe", {
      strings: "Recipe",
      autoStart: true,
      delay: 56,
      cursor: "",
    });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);