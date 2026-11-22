import { AboutUs } from "./components/AboutUs/AboutUs"
import { DownloadSection } from "./components/DownloadSection"
import { ExperienceSection } from "./components/ExperienceSection"
import { FooterSection } from "./components/FooterSection"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { PopularDeals } from "./components/PopularDeals/PopularDeals"
import { Swiper } from "./components/SwiperSlider/Swiper"


function App() {

  return (
    <>

    
      <Header />

      <main className="main">
      <HeroSection />
      <Swiper /> 

      <ExperienceSection />

      <PopularDeals />

      <AboutUs />

      <DownloadSection />
      
      </main>

      <footer>

      <FooterSection />
      
      </footer>









    </>
  )
}

export default App
