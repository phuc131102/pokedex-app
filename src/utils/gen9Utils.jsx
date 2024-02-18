import { useState, useEffect } from "react";
import { allGen9 } from "../services/pokeAPI";

export const useGen9 = () => {
  const [gen9, setGen9] = useState([]);
  const [loadingGen9, setLoadingGen9] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedJobs = await allGen9();
        setGen9(fetchedJobs);
        setTimeout(() => {
          setLoadingGen9(false);
        }, 3000);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchData();
  }, []);

  return { gen9, loadingGen9 };
};

export default useGen9;
