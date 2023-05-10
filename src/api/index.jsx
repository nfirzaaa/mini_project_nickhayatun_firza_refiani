import { uploaderAPI } from "../config/apiService";

export const api = {
    uploader: (body) => {
        return uploaderAPI.post("/du74ckjlh/image/upload", body);
    },
};
