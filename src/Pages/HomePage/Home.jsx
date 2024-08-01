import BlockChain from "./BlockChain/BlockChain";
import Blog from "./Blog/Blog";
import Cripto from "./Cripto/Cripto";
import Custody from "./Custody/Custody";
import FAQ from "./FAQ/FAQ";
import Hero from "./Hero/Hero";
import Wallet from "./Wallet/Wallet";

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero></Hero>
            <BlockChain></BlockChain>
            <Custody></Custody>
            <Wallet></Wallet>
            <Cripto></Cripto>
            <Blog></Blog>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;