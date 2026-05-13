import Hero from "../components/ui/Hero"
import Client  from "../components/ui/clientlogo"
import Yotubeclient  from "../components/ui/youtuberclient"
import Videoportfolio from "../components/ui/PortfolioYT"
import Thumbnailslider from "../components/ui/thumnailslider"
import WebSliderf from "../components/ui/webslider"
import Casestudy from "../components/ui/Case-study"
import Workflow from "../components/ui/workflow"
import Reviews from "../components/ui/testimonial-section"
import Service from "../components/ui/servicemaz"
import Benefit from "../components/ui/features-section"
import Faqs from "../components/ui/faq-section"
import Booking from "../components/ui/booking"
import Footer from "../components/ui/footer"
import Pricing from "../components/ui/service"
// import Short  from "../components/ui/ShortP"


export default function Home() {
  return (
    <div>
      <Hero />
      <Client/>
      <Yotubeclient/>     
      <Service/>
      <Videoportfolio/>
      <Thumbnailslider/>
      <WebSliderf/>
      <Workflow/>
      <Casestudy/>
      <Reviews/>
      <Benefit/>
      <Faqs />
      <Pricing/>
      <Booking/>
      <Footer/>
    </div>
  )
}
// Artwork about
// Pricing