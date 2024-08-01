import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-svh w-full">
            <div className="container h-full w-full flex justify-center items-center">
                <div className="text-center">
                    <h2 className="font-bold text-[50px] py-6">Page Not Found</h2>
                    <Link className="p-3 px-14 rounded-full hover:bg-primaryColor duration-200 border border-[#fff4]" to={-1}>
                        Go Back
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;