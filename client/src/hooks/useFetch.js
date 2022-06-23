import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error Cannot Fetch Data");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
}
