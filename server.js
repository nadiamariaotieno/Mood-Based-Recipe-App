const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const db = new Database("recipes.db");

// Create table
db.prepare(`
  CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    mood TEXT,
    ingredients TEXT,
    instructions TEXT
  )
`).run();

// Seed data if empty
const count = db.prepare("SELECT COUNT(*) as count FROM recipes").get();

if (count.count === 0) {
  const insert = db.prepare(`
    INSERT INTO recipes (name, mood, ingredients, instructions)
    VALUES (?, ?, ?, ?)
  `);

  insert.run(
    "Chocolate Brownies",
    "sad",
    "Chocolate, Flour, Sugar, Butter, Eggs",
    "Mix ingredients and bake at 180°C for 25 mins."
  );

  insert.run(
    "Spicy Tacos",
    "adventurous",
    "Tortillas, Beef, Chili, Cheese",
    "Cook beef with spices and assemble tacos."
  );

  insert.run(
    "Fruit Smoothie Bowl",
    "happy",
    "Banana, Berries, Yogurt, Honey",
    "Blend everything and top with fruits."
  );
}

// Route
app.get("/recipe/:mood", (req, res) => {
  const mood = req.params.mood;

  const recipe = db
    .prepare(
      `SELECT * FROM recipes
       WHERE mood = ?
       ORDER BY RANDOM()
       LIMIT 1`
    )
    .get(mood);

  if (!recipe) {
    return res.status(404).json({ message: "No recipe found" });
  }

  res.json(recipe);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});