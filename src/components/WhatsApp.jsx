
import { FaWhatsapp } from "react-icons/fa";
import "../WhatsApp.css";
export default function WhatsApp(){
    const number = "0112478220";
    const message = "Hello, I have a question about your services.";
    return(
        <div className="link">
            <a href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}>
                <FaWhatsapp/>
            </a>
        </div>
    );
}