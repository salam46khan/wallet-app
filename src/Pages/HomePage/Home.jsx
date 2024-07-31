import BlockChain from "./BlockChain/BlockChain";
import Custody from "./Custody/Custody";
import Hero from "./Hero/Hero";
import Wallet from "./Wallet/Wallet";

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero></Hero>
            <BlockChain></BlockChain>
            <Custody></Custody>
            <Wallet></Wallet>
        </div>
    );
};

export default Home;