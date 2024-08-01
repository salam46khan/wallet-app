import { FaTelegramPlane } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import './FooterItem.css'
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

const FooterItem = () => {
    return (
        <div className="flex flex-col md:flex-row gap-3 md:gap-0">
            <div className="footerItem w-full md:w-1/3 rounded-3xl p-8">
                <FaTelegramPlane className="text-7xl" />
                <div className="py-10">
                    <p className="py-4 text-[#fff7]">News and updates</p>
                    <button className="flex justify-between border border-[#fff5] rounded-full items-center py-3 px-5 w-3/4">
                        TELEGRAM
                        <TbWorld />
                    </button>
                </div>
            </div>
            <div className="footerItem w-full md:w-1/3 rounded-3xl p-8">
                <FaXTwitter className="text-7xl" />
                <div className="py-10">
                    <p className="py-4 text-[#fff7]">Follow the conversation</p>
                    <button className="flex justify-between border border-[#fff5] rounded-full items-center py-3 px-5 w-3/4">
                        x.com
                        <TbWorld />
                    </button>
                </div>
            </div>
            <div className="footerItem w-full md:w-1/3 rounded-3xl p-8">
                <FaDiscord className="text-7xl" />
                <div className="py-10">
                    <p className="py-4 text-[#fff7]">Chat in real time</p>
                    <button className="flex justify-between border border-[#fff5] rounded-full items-center py-3 px-5 w-3/4">
                        DISCORD
                        <TbWorld />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default FooterItem;