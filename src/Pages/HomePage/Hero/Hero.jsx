import { FaChrome } from 'react-icons/fa';
import './Hero.css'
import MarqueeItem from '../../../Components/MarqueeItem/MarqueeItem';
const Hero = () => {
    return (
        <div className="heroSection relative">
            <div className="bg-line-effect"></div>
            <div className='container h-full flex justify-center items-center z-10 p-3'>
                <div className=' w-full max-w-[820px] text-center'>

                    <h3 className='text-3xl md:text-[56px] font-[600]'>Decentralized Web3</h3>
                    <h1 className='text-5xl mt-3 md:text-7xl font-bold '>Wallet For Self Custody</h1>
                    <p className='my-[30px] md:px-10 px-2'>
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