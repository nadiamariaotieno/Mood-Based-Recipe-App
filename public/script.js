async function getRecipe() {
    const mood = document.getElementById("moodSelect").value;
    const recipeCard = document.getElementById("recipeCard");
    const errorMsg = document.getElementById("errorMsg");
  
    if (!mood) {
      errorMsg.textContent = "Please select a mood first.";
      return;
    }
  
    errorMsg.textContent = "";
  
    try {
      const response = await fetch(`http://localhost:3000/recipe/${mood}`);
      
      if (!response.ok) {
        throw new Error("No recipe found.");
      }
  
      const data = await response.json();
  
      document.getElementById("recipeName").textContent = data.name;
      document.getElementById("ingredients").textContent = data.ingredients;
      document.getElementById("instructions").textContent = data.instructions;
  
      recipeCard.classList.remove("hidden");
  
    } catch (error) {
      recipeCard.classList.add("hidden");
      errorMsg.textContent = "No recipe found for this mood.";
    }
  }
  