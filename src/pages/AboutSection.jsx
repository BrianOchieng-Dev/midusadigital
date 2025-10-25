
import illustration from "../assets/illus.svg"
import '../About.css'
import { FaArrowRight } from "react-icons/fa"
import Social from "../components/SocialMedia"
function About(){

    return(
        <section id="about">
            <h1>About Us</h1>
            <div className="ab-content">
                <div className="ab-item">
                    <p>
Every design starts with a story.
I take time to understand your brand, your audience, and 
the emotion you want your visuals to spark. Then I translate 
that into clean, eye-catching designs that sell.
From posters and flyers to business cards and social-media posts, 
each project blends strategy, creativity, and simplicity.
My goal is to craft visuals that not only look stunning but also 
communicate value - clearly and confidently.
Less clutter. More clarity. Designs that speak before you do.
                    </p>
                    <Social/>
                     <div className='cta-btn'>
                                        <a href=''>Learn More <FaArrowRight/></a>
                                        
                    </div>
                </div>
                <div className="ab-item">
                    <img src={illustration} alt="Designer illustration"  className="ill-logo"/>
                </div>
            </div>
        </section>
    )
    
}
export default About