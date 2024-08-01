import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const FAQItem = ({ title, text }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div>

            <div className=" border-b border-[#fff4] bg-[#fff1]">

                <button onClick={() => setAccordionOpen(!accordionOpen)} className="w-full flex justify-between items-center p-3 md:p-6 md:px-10">
                    <p className="text-xl md:text-[25px] text-start">{title}</p>

                    <div>
                        {
                            accordionOpen ? <FaMinus className="text-3xl" /> : <FaPlus className="text-3xl" />
                        }
                    </div>

                </button>
                <div className={`grid overflow-hidden bg-[#fff1] transition-all duration-200 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] p-3 md:p-5 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden md:px-5">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default FAQItem;