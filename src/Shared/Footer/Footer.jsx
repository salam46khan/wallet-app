import FooterItem from "../../Components/FooterItem/FooterItem";
import './Footer.css'
const Footer = () => {
    return (
        <div className="My-footer ">
            <div className="container py-10">
                <FooterItem></FooterItem>
            </div>
            <hr className="border-[#fff5]"/>
            <div className="text-center py-5">
                <p>@Copy Right project | All Rights reserves</p>
            </div>
        </div>
    );
};

export default Footer;