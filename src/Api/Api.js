import axios from "axios";
export let getTrending = async (mediaType)=>{

    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f34edcc31d331c3dcc3fb0143bc97eff`)

    return data.results;
};
export let getDetails = async (id ,mediaType)=>{

    let {data}= await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=f34edcc31d331c3dcc3fb0143bc97eff`)

    return data;
}; 
// API methods FOR GET PEOPLE


// data from sign and sign up 
export let axiosPost = async (formData , endPoint)=>{

    let {data}= await axios.post(`https://route-movies-api.vercel.app/${endPoint}`, formData)

    return data;
}; 