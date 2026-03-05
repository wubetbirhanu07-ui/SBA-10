import { useFavorites } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p>No favorites yet. Go add some!</p>;
  }

  return (
    <div>
      {favorites.map((id) => (
        <RecipeCard key={id} meal={{ idMeal: id }} />
      ))}
    </div>
  );
}