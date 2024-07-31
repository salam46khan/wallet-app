import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <p className="h-screen">footer</p>
        </div>
    );
};

export default Main;