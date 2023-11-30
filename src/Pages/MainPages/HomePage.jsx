import Banner from "../../Component/Banner";
import MapAddress from "../../Component/MapAddress";
import About from "../../SharedComponent/About";
import Footer from "../../SharedComponent/Footer";
import MainNavBarNPM from "../../SharedComponent/MainNavBar";

const HomePage = () => {
    return (
        <div>
            <MainNavBarNPM></MainNavBarNPM>
            <Banner></Banner>
            <About></About>
            <MapAddress></MapAddress>
            <Footer></Footer>
            
        </div>
    );
};

export default HomePage;