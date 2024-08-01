import FAQItem from "../../../Components/FAQItem/FAQItem";

const FAQ = () => {
    return (
        <div className="container my-12 z-20 relative">
            <div className="w-full max-w-3xl mx-auto">
                <h2 className="text-center font-bold text-[50px]">
                    Frequently Asked Questions
                </h2>
            </div>
            <div className="py-10">
                <FAQItem></FAQItem>
            </div>
        </div>
    );
};

export default FAQ;