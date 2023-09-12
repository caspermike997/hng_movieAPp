import axios from "axios";

export default axios.create({
    baseURL: "",
    headers: {
        Accept: " "
    },
    params: {
        api_key: ""
    }
})