
import { FaArrowRight, FaIdCard, FaRegNewspaper, FaFilePdf, FaShareAlt } from 'react-icons/fa'
import '../Service.css'
import illus1 from '../assets/illus1.svg'
import ServiceCard from '../components/ServiceCard'
function Service(){
    return(
        <>
        <section id="service">
            <div className="s-hero">
                   <div className='s-item'>
                <img src={illus1} alt="illustration" className="s-logo" />
              </div>
            <div className='s-item'>
             <h1>My Creative Suite</h1>
             <p>With over a 2+ years of creative experience, 
                I help brands and businesses bring their ideas 
                to life through designs that inspire and perform.</p>
                <div className='hero-span'>
                <span id="span">Design</span>
                <span id="span">Marketing</span></div>
             </div>
            </div>
            <div class="card-item">
                <div className='card-nth'>
                    <ServiceCard
                    icon= {<FaRegNewspaper/>}
                    text="Poster Design"
                    describe="Bold, eye-catching visuals that make your message impossible to ignore"
                    link= "Learn More"
                    />
                     <ServiceCard
                    icon= {<FaFilePdf/>}
                    text="Flyer Design"
                    describe="Clean, creative layouts that grab attention and spread your brand story fast"
                    link= "Learn More"
                    />
                </div>
                <div className='card-nth'>
                    <ServiceCard
                    icon= {<FaIdCard/>}
                    text="Business Cards Design"
                    describe="Sleek, memorable cards that leave a lasting first impression"
                    link= "Learn More"
                    />
                     <ServiceCard
                    icon= {<FaShareAlt/>}
                    text="Social Media Post Design"
                    describe="Engaging, on-brand content that turns scrolling into connection"
                    link= "Learn More"
                    />
                </div>
            </div>
        </section>
        </>
    )
}
export default Service