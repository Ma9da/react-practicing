import { useEffect, useState } from 'react';

function useFectch(url) {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController()
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error("couldn't fetch data for that resource")
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                if (err.name === "AbourtError") {
                    console.log("fetch abortef")
                } else {
                    setIsPending(false)
                    setError(err.message)
                }
            })
        return () => abortCont.abort()
    }, [url]);
    return {
        data, isPending, error
    }
}

export default useFectch