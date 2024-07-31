import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import './BlockChain.css'
import BlockChainContent from "../../../Components/BlockChainContent/BlockChainContent";
const BlockChain = () => {
    return (
        <div className="container py-16">
            <div className="text-center">
                <h2 className="text-[50px] font-bold">Get The Best Of Your Favoirite Blockchains</h2>
            </div>
            <div className="mt-10">
                <Tabs>
                    <TabList className={'react-tabs__tab-list  flex justify-center flex-wrap gap-3'}>
                        <Tab>Ethereum</Tab>
                        <Tab>zkSync</Tab>
                        <Tab>Polygon</Tab>
                        <Tab>Fantom</Tab>
                        <Tab>Optimism</Tab>
                        <Tab>Avalanche</Tab>
                        <Tab>Arbitrum</Tab>
                        <Tab>BNB</Tab>
                        <Tab>Gnosis</Tab>
                    </TabList>

                    <TabPanel>
                        <BlockChainContent></BlockChainContent>
                    </TabPanel>
                    <TabPanel>
                        <BlockChainContent></BlockChainContent>
                    </TabPanel>
                    <TabPanel>
                        <BlockChainContent></BlockChainContent>
                    </TabPanel>
                    <TabPanel>
                        <BlockChainContent></BlockChainContent>
                    </TabPanel>
                    <TabPanel>
                        <BlockChainContent></BlockChainContent>
                    </TabPanel>
                    <TabPanel>
                        <BlockChainContent></BlockChainContent>
                    </TabPanel>
                    <TabPanel>
                        <BlockChainContent></BlockChainContent>
                    </TabPanel>
                    <TabPanel>
                        <BlockChainContent></BlockChainContent>
                    </TabPanel>
                    <TabPanel>
                        <BlockChainContent></BlockChainContent>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default BlockChain;