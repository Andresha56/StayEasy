import axios from "axios";
export const getData=async(endpoint)=>{
    const response=await axios.get(`http://localhost:5000/hotel${endpoint}`);
    return response.data;
}

