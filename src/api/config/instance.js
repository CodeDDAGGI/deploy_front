import axios from "axios";

const liveServerAddress = "https://loltochess.store";
const localServerAddress = "http://localhost:8080";

export const instance = axios.create({
    baseURL:liveServerAddress
});