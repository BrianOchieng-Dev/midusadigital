import { FaArrowRight } from "react-icons/fa"
import '../Service.css'

function ServiceCard({icon, text, describe, link}){
    return(
        <div className="s-card">
            <h3>{icon}</h3>
            <h2>{text}</h2>
            <p>{describe}</p>
             <div className='cta-btn'><a href="">{link} <FaArrowRight/></a></div>
        </div>
    )
}
export default ServiceCard