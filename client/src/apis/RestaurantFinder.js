import axios from "axios";

const baseURL =
    process.env.NODE_ENV === "production"
        ? "api/v1/restaurants"
        : "http://localhost:3000/api/v1/restaurants";

export default axios.create({
    baseURL,
});
