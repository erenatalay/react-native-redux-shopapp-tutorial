import axios from "axios";
import { useEffect,useState } from "react"

const useFetch = (url) => {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    const fetchData = () => {

        axios.get(url).then(res => {
            setData(res.data)
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            setError(err.message)
        })



    }
    useEffect(() => {
      fetchData();
    },[])

    return { error , loading , data};
}

export default useFetch;