import { FaPlus } from "react-icons/fa6";

const FAQItem = () => {
    return (
        <div>
            <div className="collapse border border-[#fff5] bg-[#fff1]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl p-8 font-medium flex justify-between items-center">
                    <p className="text-[25px]">What is Wallet?</p>
                    <FaPlus className="text-3xl" />
                </div>
                <div className="collapse-content bg-[#fff1]">
                    <p className="p-5 text-[#fff7]">
                        Wallet does not collect or track personal data, not even your public address. Your personal data stays with you, where it belongs. Wallet lets you easily manage token allowances to reduce the risk of losing funds to DApp hacks and exploits.
                    </p>
                </div>
            </div>
            <div className="collapse border border-[#fff5] bg-[#fff1]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl p-8 font-medium flex justify-between items-center">
                    <p className="text-[25px]">What is a non custodial wallet?</p>
                    <FaPlus className="text-3xl" />
                </div>
                <div className="collapse-content bg-[#fff1]">
                    <p className="p-5 text-[#fff7]">
                        Node providers receive your IP and other personal data. Wallet protects your identity by intercepting requests, removing sensitive details, and relaying only necessary data for transactions.
                    </p>
                </div>
            </div>
            <div className="collapse border border-[#fff5] bg-[#fff1]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl  p-8 font-medium flex justify-between items-center">
                    <p className="text-[25px]">Why Self-Custody In Crypto Wallets Are Important?</p>
                    <FaPlus className="text-3xl" />
                </div>
                <div className="collapse-content bg-[#fff1]">
                    <p className="p-5 text-[#fff7]">
                        Node providers receive your IP and other personal data. Wallet protects your identity by intercepting requests, removing sensitive details, and relaying only necessary data for transactions.
                    </p>
                </div>
            </div>
            <div className="collapse border border-[#fff5] bg-[#fff1]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title  p-8 font-medium flex justify-between items-center">
                    <p className="text-[25px]">Is Wallet Self custodial wallet?</p>
                    <FaPlus className="text-3xl" />
                </div>
                <div className="collapse-content bg-[#fff1]">
                    <p className="p-5 text-[#fff7]">
                        Wallet does not collect or track personal data, not even your public address. Your personal data stays with you, where it belongs. Wallet lets you easily manage token allowances to reduce the risk of losing funds to DApp hacks and exploits.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default FAQItem;