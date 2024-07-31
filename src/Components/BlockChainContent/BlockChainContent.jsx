import { Link } from 'react-router-dom';
import './BlockChainContent.css'
import { IoMdArrowRoundForward } from 'react-icons/io';
import swap from '../../assets/icon/swap.png'
import bridge from '../../assets/icon/bridge.png'
import cripto from '../../assets/icon/cripto.png'
import links from '../../assets/icon/link.png'
import BlockChainSide from '../BlockChainSide/BlockChainSide';
const BlockChainContent = () => {
    return (
        <div className='blockLayer md:p-7 p-4 border mt-16'>
            <div className="layerOver "></div>
            <div className='w-full h-auto bg-gradient-to-b border from-[#fff2] to-transparent md:p-6 p-4 rounded-[30px]'>
                <div className='w-full h-auto bg-gradient-to-b  from-[#080417a8] to-[#020106] md:p-12 p-2 rounded-[30px] z-40 blockLayerContent flex flex-col md:flex-row justify-center items-start '>
                    <div className='w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 md:gap-y-20 md:gap-x-12 gap-6'>
                        <div className='w-full p-2'>
                            <img src={swap} alt="" className='mb-3' />
                            <h5 className='font-bold'>Swap</h5>
                            <p className='text-slate-200'>
                                Save yourself some clicks - buy or sell any crypto quick and cheap.
                            </p>
                            <Link to={'/'} className='text-[#714EFF] flex justify-start items-center gap-1 mt-6'>
                                Learn More
                                <IoMdArrowRoundForward className='-rotate-45' />
                            </Link>
                        </div>
                        <div className='w-full p-2'>
                            <img src={bridge} alt="" className='mb-3' />
                            <h5 className='font-bold'>Bridge</h5>
                            <p className='text-slate-200'>
                                Stay where you are - bridge between chains directly inside a wallet.
                            </p>
                            <Link to={'/'} className='text-[#714EFF] flex justify-start items-center gap-1 mt-6'>
                                Learn More
                                <IoMdArrowRoundForward className='-rotate-45' />
                            </Link>
                        </div>
                        <div className='w-full p-2'>
                            <img src={cripto} alt="" className='mb-3' />
                            <h5 className='font-bold'>Buy Crypto</h5>
                            <p className='text-slate-200'>
                                Experience the simplicity of investing. Buy your desired tokens using your card.
                            </p>
                            <Link to={'/'} className='text-[#714EFF] flex justify-start items-center gap-1 mt-6'>
                                Learn More
                                <IoMdArrowRoundForward className='-rotate-45' />
                            </Link>
                        </div>
                        <div className='w-full p-2'>
                            <img src={links} alt="" className='mb-3' />
                            <h5 className='font-bold'>Add Chains</h5>
                            <p className='text-slate-200'>
                                Forget adding chains manually - use network finder to add them instantly.
                            </p>
                            <Link to={'/'} className='text-[#714EFF] flex justify-start items-center gap-1 mt-6'>
                                Learn More
                                <IoMdArrowRoundForward className='-rotate-45' />
                            </Link>
                        </div>


                    </div>
                    <div className='w-full md:w-1/3'>
                        <BlockChainSide></BlockChainSide>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlockChainContent;