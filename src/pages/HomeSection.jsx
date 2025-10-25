import '../index.css'
import {FaArrowRight} from 'react-icons/fa'
import Nav from '../components/Navbar'
//import WhatsApp from '../components/WhatsApp'
import Social from '../components/SocialMedia'

function Home(){
    return(<>
             <Nav/>
        <section className="hero" id="home">
    
            <div className="hero-nth">
                <div className='hero-span'>
                    <span id="span">Founded</span>
                    <span id="span">by</span>
                    <span id="span">Brian Midusa</span>
                </div>
                <div className='hero-m'>
                <h1>Midusa Digital</h1>
                <p>At Midusa Digital, we turn creative ideas into stunning, high-converting visuals.
From posters and flyers to pitch decks and business cards - every design speaks purpose.
We blend modern glassmorphism aesthetic with a premium iPhone-inspired feel.
Your brand deserves visuals that don’t just look good — they perform</p>
                <Social/>
                <div className='cta-btn'>
                    <a href=''>Learn More <FaArrowRight/></a>
                    <a href="">Get a Quote</a>
                </div></div>
            </div>
        </section>
        </>
    )
}
export default Home;