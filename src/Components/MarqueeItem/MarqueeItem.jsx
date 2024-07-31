import { DiVim } from 'react-icons/di';
import './MarqueeItem.css'
import { useEffect, useState } from 'react';
const MarqueeItem = () => {
    const [marq, setMarq] = useState([]);
    useEffect(() => {
        fetch('marqueeItem.json')
            .then(res => res.json())
            .then(data => setMarq(data))
    }, [])
    return (
        <marquee className="flex " behavior="" direction="">
            {
                marq.map(marq => <p key={marq?.id} className='marquee-content'>{marq.content}</p>)
            }
        </marquee>
    );
};

export default MarqueeItem;