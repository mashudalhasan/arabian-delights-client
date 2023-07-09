import { useEffect, useState } from "react";

const useChef = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://chef-recipe-hunter-server-mashudalhasan.vercel.app/chefsInfo"
    )
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setLoading(false);
      });
  }, []);

  return [chefs, setChefs, loading];
};

export default useChef;
