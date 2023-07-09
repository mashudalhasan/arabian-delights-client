import { useEffect, useState } from "react";

const useRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://chef-recipe-hunter-server-mashudalhasan.vercel.app/recipesInfo"
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      });
  }, []);

  return [recipes, setRecipes, loading];
};

export default useRecipe;
