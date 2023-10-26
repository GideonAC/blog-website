import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();


    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data from the End point");
          }
          // console.log(res);
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
            if (err.name === 'AbortError'){
                console.log('fetch aborted')
            } else {
                setIsPending(false)
                setError(err.message);
            }
        });
    }, 500);

    return () => abortCont.abort()
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
