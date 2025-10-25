//import Nav from "./components/Navbar";
import Home from "./pages/HomeSection";
import About from "./pages/AboutSection";
import WhatsApp from "./components/WhatsApp";
import Service from "./pages/ServiceSection";
import Price from "./pages/PriceSection";
function App(){
  return(
    <>  
    <section className="app">
    </section>
    <main>
      <Home/> 
      <About/>
      <Service/>
      <Price/>
    </main><WhatsApp/>
    </>
  )
}
export default App