import { useEffect } from "react";
import { useStore } from "./Store";

function Meals() {
  const { meals, searchQuery, setMeals, setSearchQuery } = useStore();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMeals();
  }, [setMeals]);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=" max-w-[70%] m-auto ">
      <input
        type="text"
        className="border text-blue-700 font-bold bg-white placeholder:text-black w-full mb-4 rounded-2xl border-blue-700 p-3 border-solid"
        placeholder="Search for a meal..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-3 gap-4 text-black">
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <div className="rounded-2xl bg-white text-black" key={meal.idMeal}>
              <img width={300} className=" rounded-2xl object-cover w-full" src={meal.strMealThumb} alt={meal.strMeal} />
              <h2 className="p-3">{meal.strMeal}</h2>
            </div>
          ))
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  );
}

export default Meals;