import Banner from "../Page.jsx/Banner";
import Cadensa from "../Page.jsx/Cadensa";
import Longevity from "../Page.jsx/Longevity";
import SecondSection from "../Page.jsx/SecondSection";

const Home = () => {
    return (
        <div className="bg-black">
            <Banner />
            <SecondSection></SecondSection>
            <Cadensa></Cadensa>
            <Longevity></Longevity>
        </div>
    );
}

export default Home;
