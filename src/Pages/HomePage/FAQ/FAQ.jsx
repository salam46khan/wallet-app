import FAQItem from "../../../Components/FAQItem/FAQItem";

const FAQ = () => {
    return (
        <div className="container my-12 z-20 relative">
            <div className="w-full max-w-3xl mx-auto">
                <h2 className="text-center font-bold text-2xl md:text-[50px]">
                    Frequently Asked Questions
                </h2>
            </div>
            <div className="py-10 pt-16 p-4">
                <div className="border border-[#fff5] rounded-2xl overflow-hidden">
                    <FAQItem
                        title={'What is Wallet?'}
                        text={"Public nodes are clogged and sluggish. Wallet nodes are exclusive, fast and carefully maintained for optimal performance and speed, only available to Wallet users."}
                    ></FAQItem>

                    <FAQItem
                        title={"What is a non custodial wallet?"}
                        text={"Join the upcoming NoBS talk’s 2nd edition. Julian of wallet delvs into staking , APY, milestones, and upcoming features Discover what’s next!"}
                    ></FAQItem>

                    <FAQItem
                        title={"Why Self-Custody In Crypto Wallets Are Important?"}
                        text={"Empower yourself with a Web3 wallet that embraces true self-custody. Experience the freedom of managing your digital assets independently, knowing that your ownership and control are paramount. With our wallet, you can securely interact with decentralized applications."}
                    ></FAQItem>


                    <FAQItem
                        title={"Is Wallet Self custodial wallet?"}
                        text={"Empower yourself with a Web3 wallet that embraces true self-custody. Experience the freedom of managing your digital assets independently, knowing that your ownership and control are paramount. With our wallet."}
                    ></FAQItem>
                </div>
            </div>
        </div>
    );
};

export default FAQ;