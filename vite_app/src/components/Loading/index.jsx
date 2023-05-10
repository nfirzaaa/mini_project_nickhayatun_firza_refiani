import "./loading.css";
import { Spin } from "antd";

const Loading = () => {
    return (
        <div className="loading-container">
            <Spin size="large" tip="Loading . . ." />
        </div>
    );
};

export default Loading;
