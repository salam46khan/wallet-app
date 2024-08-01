import { GoCheck, GoX } from 'react-icons/go';
import './CriptoTable.css'
import t2 from '../../assets/icon/t-2.png'
import t3 from '../../assets/icon/t-3.png'
import t4 from '../../assets/icon/t-4.png'
import t5 from '../../assets/icon/t-5.png'
import t6 from '../../assets/icon/t-6.png'
import t7 from '../../assets/icon/t-7.png'
const CriptoTable = () => {
    return (
        <table className='table-content'>
            <thead >
                <tr>
                    <th className="feature-name"><span className='font-bold text-xl !text-white !py-[15px]'>Features</span></th>
                    <th>
                        <span className='top-table-data flex justify-center items-center'>
                            <div className='border h-10 w-10 flex justify-center items-center rounded-full bg-[#fff7] mx-auto'>
                                <div className='h-5 w-5 bg-black rounded'></div>
                            </div>
                        </span>
                    </th>
                    <th>
                        <span className='top-table-data flex justify-center items-center'>
                            <div className=' h-10 w-10 flex justify-center items-center rounded-full bg-[#fff7] mx-auto'>
                                <img className='w-1/2' src={t2} alt="" />
                            </div>
                        </span>
                    </th>
                    <th>
                        <span className='top-table-data flex justify-center items-center'>
                            <div className=' h-10 w-10 flex justify-center items-center rounded-full bg-[#fff7] mx-auto'>
                                <img className='w-1/2' src={t3} alt="" />
                            </div>
                        </span>
                    </th>
                    <th>
                        <span className='top-table-data flex justify-center items-center'>
                            <div className=' h-10 w-10 flex justify-center items-center rounded-full bg-[#fff7] mx-auto'>
                                <img className='w-1/2 grayscale' src={t4} alt="" />
                            </div>
                        </span>
                    </th>
                    <th>
                        <span className='top-table-data flex justify-center items-center'>
                            <div className=' h-10 w-10 flex justify-center items-center rounded-full bg-[#fff7] mx-auto'>
                                <img className='w-1/2' src={t5} alt="" />
                            </div>
                        </span>
                    </th>
                    <th>
                        <span className='top-table-data flex justify-center items-center'>
                            <div className='h-10 w-10 flex justify-center items-center rounded-full bg-[#fff7] mx-auto'>
                                <img className='w-1/2' src={t6} alt="" />
                            </div>
                        </span>
                    </th>
                    <th>
                        <span className='top-table-data flex justify-center items-center'>
                            <div className=' h-10 w-10 flex justify-center items-center rounded-full bg-[#fff7] mx-auto'>
                                <img className='w-1/2' src={t7} alt="" />
                            </div>
                        </span>
                    </th>


                </tr>
            </thead>
            <tbody>
                {/* fast row  */}
                <tr>
                    <td className="feature-name"><span>Self-Custodial</span></td>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                </tr>
                {/* second row  */}
                <tr>
                    <td className="feature-name"><span>Built-In Swaps</span></td>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                </tr>
                {/* third row  */}
                <tr>
                    <td className="feature-name"><span>Built-In Bridges</span></td>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                </tr>
                {/* four row  */}
                <tr>
                    <td className="feature-name"><span>Hardware Wallet Support</span></td>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                </tr>
                {/* five row  */}
                <tr>
                    <td className="feature-name"><span>Open Source</span></td>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                </tr>
                {/* six row  */}
                <tr>
                    <td className="feature-name"><span>Quick Network Finder</span></td>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                </tr>
                {/* seven row  */}
                <tr>
                    <td className="feature-name"><span>Failover System</span></td>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                </tr>
                {/* eight row  */}
                <tr>
                    <td className="feature-name"><span>No Tracking</span></td>
                    <th>
                        <span className='table-data'>
                            <GoCheck className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                    <th>
                        <span className='table-data'>
                            <GoX className='text-center text-2xl mx-auto' />
                        </span>
                    </th>
                </tr>


                {/* last row  */}
                <tr>
                    <td class="feature-name"><span className='font-bold text-xl !text-white'>Curious?</span></td>
                    <th>
                        <span className='bottom-table-data'>
                            <button className='text-[12px] p-[6px] px-8 font-thin bg-primaryColor rounded-3xl opacity-0 '>Compare</button>
                        </span>
                    </th>
                    <th>
                        <span className='bottom-table-data'>
                            <button className='text-[12px] p-[6px] px-8 font-thin bg-primaryColor rounded-3xl'>Compare</button>
                        </span>
                    </th>
                    <th>
                        <span className='bottom-table-data'>
                            <button className='text-[12px] p-[6px] px-8 font-thin bg-primaryColor rounded-3xl'>Compare</button>
                        </span>
                    </th>
                    <th>
                        <span className='bottom-table-data'>
                            <button className='text-[12px] p-[6px] px-8 font-thin bg-primaryColor rounded-3xl'>Compare</button>
                        </span>
                    </th>
                    <th>
                        <span className='bottom-table-data'>
                            <button className='text-[12px] p-[6px] px-8 font-thin bg-primaryColor rounded-3xl'>Compare</button>
                        </span>
                    </th>
                    <th>
                        <span className='bottom-table-data'>
                            <button className='text-[12px] p-[6px] px-8 font-thin bg-primaryColor rounded-3xl'>Compare</button>
                        </span>
                    </th>
                    <th>
                        <span className='bottom-table-data'>
                            <button className='text-[12px] p-[5px] px-8 font-thin bg-primaryColor rounded-3xl'>Compare</button>
                        </span>
                    </th>



                </tr>

            </tbody>
        </table>
    );
};

export default CriptoTable;