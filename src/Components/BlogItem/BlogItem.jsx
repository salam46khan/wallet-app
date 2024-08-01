import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import './BlogItem.css'

const BlogItem = () => {
    return (
        <div className="flex flex-col md:flex-row gap-3 md:gap-0">
            <div className="p-10 blogItem w-full md:w-1/3">
                <p className="text-primaryColor font-semibold">01 NEW</p>
                <h5 className="text-[20px] w-full max-w-[300px] py-5 font-bold">
                    Recap Of NOBS With Juli Chapter 2
                </h5>
                <p className="text-[#fff8]">
                    Dive into NoBS talk’s 2nd edition. Julian of wallet delvs into staking , APY, milestones, and upcoming features Discover what’s next!
                </p>
                <Link to={'/'} className='text-[#714EFF] flex justify-start items-center gap-1 mt-6'>
                    Learn More
                    <IoMdArrowRoundForward className='-rotate-45' />
                </Link>
            </div>
            <div className="p-10 blogItem  w-full md:w-1/3">
                <p className="text-primaryColor font-semibold">02 NEW</p>
                <h5 className="text-[20px] font-bold py-5">
                    Recap Of NOBS With Juli Chapter 2
                </h5>
                <p className="text-[#fff8]">
                    Dive into NoBS talk’s 2nd edition. Julian of wallet delvs into staking , APY, milestones, and upcoming features Discover what’s next!
                </p>
                <Link to={'/'} className='text-[#714EFF] flex justify-start items-center gap-1 mt-6'>
                    Learn More
                    <IoMdArrowRoundForward className='-rotate-45' />
                </Link>
            </div>
            <div className="p-10 blogItem w-full md:w-1/3">
                <p className="text-primaryColor font-semibold">03 NEW</p>
                <h5 className="text-[20px] font-bold py-5">
                    Recap Of NOBS With Juli Chapter 2
                </h5>
                <p className="text-[#fff8]">
                    Dive into NoBS talk’s 2nd edition. Julian of wallet delvs into staking , APY, milestones, and upcoming features Discover what’s next!
                </p>
                <Link to={'/'} className='text-[#714EFF] flex justify-start items-center gap-1 mt-6'>
                    Learn More
                    <IoMdArrowRoundForward className='-rotate-45' />
                </Link>
            </div>
            
        </div>
    );
};

export default BlogItem;