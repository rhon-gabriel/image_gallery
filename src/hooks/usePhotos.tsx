import { useState, useEffect } from "react";
import { getPhotos } from "../helpers/api";

interface Photos {
    farm: number
    id: string
    isfamily: number
    isfriend: number
    ispublic: number
    owner: string
    secret: string
    server: string
    title: string
  }

const usePhotos = (page = 1) => {
  const [results, setResults] = useState<Photos[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    getPhotos(page)
      .then((res) => {
        setResults((prev: Photos[]) => [...prev, ...res.photo]);
        setHasNextPage(Boolean(res.length));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        setError({ err });
      });
  }, [page]);

  return { isLoading, isError, error, results, hasNextPage };
};

export default usePhotos;
