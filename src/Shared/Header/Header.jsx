import { useEffect, useState } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '/WALLET.png'
import { FaBars, FaDownload } from 'react-icons/fa';

const Header = () => {
    const [scroll, setScroll] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const navlinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/features'}>Features</NavLink></li>
        <li><NavLink to={'/resource'}>Resource Library</NavLink></li>
        <li><NavLink to={'/compare'}>Compare</NavLink></li>
        <li><NavLink to={'/token'}>Token</NavLink></li>

    </>
    return (
        <div className={`${scroll ? 'bg-[#714EFF] sticky top-0 left-0  shadow-lg text-white ' : 'text-white'}  fixed w-full top-0 left-0  z-50 duration-150`}>
            <div className="container navbar header">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" lg:hidden">
                            <button className='p-[15px] rounded-full border border-[#fff5] mr-2'>
                                <FaBars />
                            </button>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-primaryColor bg-opacity-20 backdrop-blur-sm rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navlinks}
                        </ul>
                    </div>
                    <Link to={'/'} className="px-1">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu border-2 border-[#fff3] rounded-full menu-horizontal px-1">
                        {
                            navlinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='py-[15px] md:px-[50px] px-[15px] border rounded-full border-[#fff5] font-semibold hover:bg-primaryColor duration-300 text-slate-300'>
                        <span className='hidden md:block'>Download</span>
                        <FaDownload className='block md:hidden' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;