import HeroSection from "./HeroSection";
import WhyWe from "../WhyWe";
// import ServicesData from "../ServicesData";
// import ImageCardsWithVerticalView from "../ImageCardsWithverticalView";

function HomePage() {
  return (
    <div>
        <HeroSection/>
        <WhyWe/>
        {/* <ServicesData/> */}
        {/* <ImageCardsWithVerticalView verticalCards={data.verticalCards} /> */}
    </div>
  );
}

export default HomePage;
