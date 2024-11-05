import axios from "axios";

export const fetchData = async (url) => {
    try {
        const res = await axios.get(url);
        const data = res.data;
        if(res.data.status =='failed'){
            throw new Error(data.message)   
         }
        return data 
    } catch (error) {
        console.log(error.message)
    }    
}

export const postData = async (url, data) => {
    try {
        const res = await axios.post(url, data);
        const data = res.data;
        if(res.data.status =='failed'){
            throw new Error(data.message)   
         }
        return data
    } catch (error) {
        console.log(error.message)
    }
}
