import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useFavorites } from "../context/FavoritesContext";

export default function RecipeDetail() {
  const { id } = useParams();
  const { data, loading } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading) return <p>Loading...</p>;

  const meal = data.meals[0];
  const favorite = isFavorite(id);

  return (
    <div>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} width="300" />
      <p>{meal.strInstructions}</p>

      <button
        onClick={() =>
          favorite ? removeFavorite(id) : addFavorite(id)
        }
      >
        {favorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}