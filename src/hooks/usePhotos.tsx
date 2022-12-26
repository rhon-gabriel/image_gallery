import { useState, useEffect } from "react";
import { getPhotos } from "../helpers/api";
import { Photos } from "../types";

const usePhotos = (page = 1) => {
  const [results, setResults] = useState<Photos[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    getPhotos(page)
      .then((res) => {
        setResults((prev: Photos[]) => prev.concat(res.photo));
        setHasNextPage(Boolean(res.photo.length));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setError(err.message);
      });
  }, [page]);

  return { isLoading, isError, error, results, hasNextPage };
};

export default usePhotos;
