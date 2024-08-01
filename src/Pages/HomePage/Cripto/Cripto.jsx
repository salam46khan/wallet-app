import CriptoTable from "../../../Components/CriptoTable/CriptoTable";

const Cripto = () => {
    return (
        <div className="relative">
            <div className="bg-blur h-16 -rotate-[30deg] w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
            <div className="container py-16">
                <div className="w-full max-w-4xl mx-auto">
                    <h2 className="text-center font-bold text-[50px]">
                        Compare Self-Custody Crypto Wallet
                    </h2>
                </div>
                <div className="py-10">
                    <CriptoTable></CriptoTable>
                </div>
            </div>
        </div>
    );
};

export default Cripto;