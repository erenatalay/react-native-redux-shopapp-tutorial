import {useState} from 'react'
 import axios from "axios"
const usePost = () => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const post = (url,apiData) => {
        setLoading(true)
        axios.post(url,apiData).then(res => {
            setData(res.data)
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            setError(err)
        })
    }
return {data,loading,error,post};

}

export default usePost;

