import { useEffect, useState } from "react";
import WalletItem from "../../../Components/WalletItem/WalletItem";

const Wallet = () => {
    const [wallets, setWallets] = useState([]);
    useEffect(() => {
        fetch('wallet.json')
            .then(res => res.json())
            .then(data => setWallets(data))
    }, [])
    return (
        <div className="container py-16">
            <div className="w-full max-w-3xl mx-auto">
                <h2 className="text-center font-bold text-[50px]">
                    Start on Solid Ground With Our Online Crypto Wallet
                </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-7 justify-center items-center my-10">
                {
                    wallets?.map(wallet => <WalletItem key={wallet?.id} wallet={wallet}></WalletItem>)
                }
                
            </div>
            <div className="flex justify-center pt-8">
                <button className="py-[15px] px-[50px] bg-primaryColor rounded-full">Wallet Infrastructure</button>
            </div>
        </div>
    );
};

export default Wallet;