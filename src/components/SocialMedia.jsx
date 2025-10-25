import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa";
import '../index.css'

function Social(){
    return(
        <div class="social">
            <a href=""><FaFacebook/></a>
            <a href=""><FaLinkedinIn/></a>
            <a href=""><FaTwitter/></a>
            <a href=""><FaInstagram/></a>
        </div>
    )

}
export default Social;