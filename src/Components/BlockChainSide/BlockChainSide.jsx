import { FaArrowLeftLong } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import inputNum from '../../assets/icon/input-number.png'
import { RiArrowUpDownLine } from "react-icons/ri";

const BlockChainSide = () => {
    return (
        <div className="bg-[#ffffff15] border border-[#fff6] rounded-[20px] overflow-hidden">
            <div className="flex justify-between items-center py-2 px-4 bg-[#fff2] border-b border-[#fff4]">
                <div className="flex items-center gap-2 text-xl">
                    <button>
                        <FaArrowLeftLong className="text-xl" />
                    </button>
                    <span>Bridge</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="bg-[#fff2] p-1 rounded-md">
                        <img src={inputNum} alt="" />
                    </button>
                    <button>
                        <RxCross2 className="text-2xl" />
                    </button>
                </div>
            </div>
            <div className="px-4 py-6">
                <p className="mb-2 text-[#fff8]">Bridge Asset</p>
                <div className="flex justify-between items-center gap-3">
                    <div className="w-1/2 bg-[#fff2] p-3 rounded-xl border border-[#fff5]">
                        <h3 className="text-[20px] font-semibold">ETH</h3>
                        <p className="text-xs text-[#fff6]">0.44 ETH</p>
                    </div>
                    <div className="w-1/2 bg-[#fff2] p-3 rounded-xl border border-[#fff5]">
                        <h3 className="text-[20px] font-semibold">0.15 ETH</h3>
                        <p className="text-xs text-[#fff6]">279.69 USD</p>
                    </div>
                </div>
            </div>
            <div className="py-10 relative">
                <hr className="border-[#fff4]" />
                <div className="h-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] rounded-full border border-[#fff4] bg-[#1C1A23]">
                    <div className="h-full w-full flex justify-center items-center">
                        <RiArrowUpDownLine className="text-3xl"/>
                    </div>
                </div>
            </div>
            <div className="pt-6 pb-20 px-4">
                <p className="mb-2 text-[#fff8]">Bridge Asset</p>

                <select className="select select-bordered w-full bg-[#fff4] ">
                    <option disabled selected>Select Network</option>
                    <option className="bg-[#0006]">fast one</option>
                    <option className="bg-[#0006]">more one</option>
                </select>
            </div>
            <div className=" p-4">
                <button className="w-full p-4 rounded-lg bg-primaryColor">
                    Review
                </button>
            </div>
        </div>
    );
};

export default BlockChainSide;