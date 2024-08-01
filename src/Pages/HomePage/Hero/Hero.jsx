import { FaChrome } from 'react-icons/fa';
import './Hero.css'
import MarqueeItem from '../../../Components/MarqueeItem/MarqueeItem';
import left from '../../../assets/pic/left.png'
import right from '../../../assets/pic/right.png'
import top1 from '../../../assets/pic/Star 1.png'
import top2 from '../../../assets/pic/Star 2.png'
const Hero = () => {
    return (
        <div className="heroSection relative">
            <div className=" hidden md:block absolute left-10 top-1/2 -translate-y-1/2 ">
                <img className='z-20 w-3/4' src={left} alt="" />
            </div>
            <div className=" hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
                <img className='z-20 w-3/4' src={right} alt="" />
            </div>
            <div className=" hidden md:block absolute left-1/2 top-0 w-full -translate-x-1/2">
                <img className='z-20 w-[42%] mx-auto' src={top1} alt="" />
            </div>
            <div className=" hidden md:block absolute left-1/2 top-0 w-full -translate-x-1/2">
                <img className='z-20 w-[38%] mx-auto' src={top2} alt="" />
            </div>

            <div className="bg-line-effect"></div>
            <div className='container h-full flex justify-center items-center z-10 p-3'>
                <div className='w-full max-w-[840px] text-center'>

                    <h3 className='text-2xl leading-tight md:text-[56px] font-[600]'>Decentralized Web3</h3>
                    <h1 className='text-4xl mt-3 md:text-7xl font-bold '>Wallet For Self Custody</h1>
                    <p className='my-[30px] md:px-[25px] p-1 font-NormalFont text-[#fff8]'>
                        Empower yourself with a Web3 wallet that embraces true self-custody. Experience the freedom of managing your digital assets independently, knowing that your ownership and control are paramount. With our wallet, you can securely interact with decentralized applications.
                    </p>
                    <div className='mt-[20px] flex justify-center'>
                        <button className=' rounded-full bg-[#714EFF] py-5 px-12 flex items-center justify-center gap-3 text-[16px] font-semibold hover:bg-[#603afa] duration-300 hover:text-slate-200'>
                            Download For Chrome
                            <FaChrome />
                        </button>
                    </div>
                </div>
            </div>
            <div className="animate-content absolute bottom-6 border-y-2 border-[#fff5] left-0 w-full -rotate-3">
                <MarqueeItem></MarqueeItem>
            </div>
        </div>
    );
};

export default Hero;