import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";

export default function Search() {
  const query = new URLSearchParams(useLocation().search).get("query");

  const { data, loading } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  if (loading) return <p>Loading...</p>;
  if (!data.meals) return <p>No results found.</p>;

  return (
    <div>
      {data.meals.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}