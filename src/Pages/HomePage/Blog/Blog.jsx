import BlogItem from "../../../Components/BlogItem/BlogItem";

const Blog = () => {
    return (
        <div className="container py-10">
            <div className="flex justify-between items-center px-4">
                <h2 className="text-center font-bold md:text-5xl text-2xl">
                    Blog
                </h2>
                <button className="border border-[#fff6] py-3 px-12 rounded-full hover:bg-primaryColor duration-300">Go To Blog</button>
            </div>
            <div className="mt-10">
                <BlogItem></BlogItem>
            </div>
        </div>
    );
};

export default Blog;