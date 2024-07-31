import img from '../../assets/icon/w-1.png'
import './WalletItem.css'
const WalletItem = ({wallet}) => {
    return (
        <div className="wallet-item p-8 rounded-3xl relative">
            <img className="" src={wallet?.pic} alt="" />
            <h4 className="text-[20px] py-3 font-bold">{wallet?.title}</h4>
            <p className='text-[#fff7]'>
                {wallet?.text}
            </p>
        </div>
    );
};

export default WalletItem;