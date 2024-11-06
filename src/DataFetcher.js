import { useState, useEffect } from "react"

const DataFetcher = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data);
            setLoading(false)
        })
        .catch(error => console.error('Error Fetching Data: ', error));
    }, [])

    if (loading) return <p>Loading...</p>

    return(
        <div>
            <h1>Fetched Data</h1>
            <ul>
                {data.map(item => {
                    <li key={item.id}>{item.title}</li>
                })}
            </ul>
        </div>
    )
}

export default DataFetcher