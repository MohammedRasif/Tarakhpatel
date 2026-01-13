import Footer from "../Footer/Footer";
import Banner from "../Page.jsx/Banner";
import Cadensa from "../Page.jsx/Cadensa";
import Faq from "../Page.jsx/Faq";
import FounderStory from "../Page.jsx/FounderStory";
import FristBanner from "../Page.jsx/FristBanner";
import Healthspan from "../Page.jsx/Healthspan";
import JoinUs from "../Page.jsx/JoinUs";
import Longevity from "../Page.jsx/Longevity";
import Marque from "../Page.jsx/Marque";
import SecondSection from "../Page.jsx/SecondSection";
import Trusted from "../Page.jsx/Trusted";
import WhyChoice from "../Page.jsx/WhyChoice";

const Home = () => {
  return (
    <div className="bg-black">
      <FristBanner></FristBanner>
      <Banner />
      <SecondSection></SecondSection>
      {/* <Healthspan></Healthspan> */}
      <Cadensa></Cadensa>
      {/* <Longevity></Longevity> */}
      {/* <WhyChoice></WhyChoice> */}
      {/* <Trusted></Trusted> */}
      <Marque></Marque>
      {/* <FounderStory></FounderStory> */}
      <Faq></Faq>
      <JoinUs></JoinUs>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
