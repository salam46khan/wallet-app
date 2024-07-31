import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import trans from '../../../assets/pic/image 36.png'
import security from '../../../assets/pic/image 37.png'
import './Custody.css'

const Custody = () => {
    return (
        <div className="container py-10">
            <div className="flex flex-col gap-10 md:flex-row justify-center items-stretch">
                <div className="w-full md:w-1/2 bg-[#ffffff10] flex flex-col md:flex-row justify-between md:items-end px-10 py-8 relative rounded-lg overflow-hidden">
                    <div className="Trans-bg-shadow"></div>
                    <div className="w-full md:w-2/3 relative z-10">
                        <h4 className="font-bold text-[30px]">Right to Transparency</h4>
                        <h5 className="text-[18px] font-semibold text-primaryColor py-3">Open Source</h5>
                        <p className="text-[#fff7]">
                            Wallet source code is publicly available for review to ensure no hidden backdoors or malicious functions.
                        </p>
                        <h5 className="text-[18px] font-semibold text-primaryColor py-3">Regular Audits</h5>
                        <p className="text-[#fff7]">
                            Wallet regularly undergoes audits by top-tier security firms to review the source code. Reports are available publicly.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <img className="grayscale" src={trans} alt="" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-2">
                    <h2 className="font-[800] text-[50px] ">Self-custody is your right. You got more.</h2>
                    <p className="text-[16px] text-[#fff8]">
                        Empower yourself with a Web3 wallet that embraces true self-custody. Experience the freedom of managing your digital assets independently, knowing that your ownership and control are paramount. With our wallet, you can securely interact with decentralized applications.
                    </p>
                    <Link to={'/'} className='text-[#714EFF] flex justify-start items-center gap-1 mt-6'>
                        Learn More
                        <IoMdArrowRoundForward className='-rotate-45' />
                    </Link>
                </div>
            </div>


            <div className="w-full mt-6 bg-[#ffffff10] flex flex-col md:flex-row justify-between md:items-end px-10 py-8 relative gap-4 rounded-lg overflow-hidden">
                <div className="Security-bg-shadow md:bottom-[50%]"></div>
                <div className="w-full md:w-2/3 md:pr-12">
                    <h4 className="font-bold text-[30px]">Right to Security</h4>
                    <h5 className="text-[18px] font-semibold text-primaryColor py-3">
                        Protecting From Hacks
                    </h5>
                    <p className="text-[#fff7]">
                        Wallet does not collect or track personal data, not even your public address. Your personal data stays with you, where it belongs. Wallet lets you easily manage token allowances to reduce the risk of losing funds to DApp hacks and exploits.
                    </p>
                    <h5 className="text-[18px] font-semibold text-primaryColor py-3">
                        Supporting Hardware Wallets
                    </h5>
                    <p className="text-[#fff7]">
                        Wallet protects your privacy by removing sensitive details and relaying only necessary data for transactions. Combining hardware and software wallets brings the best of two worlds with optimal security and Web3 compatibility.
                    </p>
                </div>
                <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                    <img className="grayscale" src={security} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Custody;