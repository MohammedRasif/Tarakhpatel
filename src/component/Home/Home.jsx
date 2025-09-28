import Banner from "../Page.jsx/Banner";
import Cadensa from "../Page.jsx/Cadensa";
import Faq from "../Page.jsx/Faq";
import Longevity from "../Page.jsx/Longevity";
import Marque from "../Page.jsx/Marque";
import SecondSection from "../Page.jsx/SecondSection";
import Trusted from "../Page.jsx/Trusted";
import WhyChoice from "../Page.jsx/WhyChoice";

const Home = () => {
    return (
        <div className="bg-black">
            <Banner />
            <SecondSection></SecondSection>
            <Cadensa></Cadensa>
            <Longevity></Longevity>
            <Trusted></Trusted>
            <Marque></Marque>
            <WhyChoice></WhyChoice>
            <Faq></Faq>
        </div>
    );
}

export default Home;
