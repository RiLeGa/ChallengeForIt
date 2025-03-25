
import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null)
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setData(responseJSON)
    } 
    useEffect(() => {
        fetchApi()
    }, [url])

    return {data}
}

export default useFetch