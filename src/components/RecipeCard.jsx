import { Link } from "react-router-dom";

export default function RecipeCard({ meal }) {
  if (!meal.strMealThumb) {
    return (
      <Link to={`/recipe/${meal.idMeal}`}>
        <p>View Recipe</p>
      </Link>
    );
  }

  return (
    <div>
      <Link to={`/recipe/${meal.idMeal}`}>
        <img src={meal.strMealThumb} width="200" />
        <h4>{meal.strMeal}</h4>
      </Link>
    </div>
  );
}