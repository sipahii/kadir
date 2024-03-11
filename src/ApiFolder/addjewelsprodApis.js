import axios from "axios";

const token = window.localStorage.getItem('token');

const getData = async () => {
    try {
        const res = await axios.get(`https://onlineparttimejobs.in/api/language/admin`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`,
            },
        });
        return res?.data
    } catch (error) {
        return error
    }

};
export default getData;