import Banner from "../../Component/Banner";
import MapAddress from "../../Component/MapAddress";
import MainNavBarNPM from "../../SharedComponent/MainNavBar";

const HomePage = () => {
    return (
        <div>
            <MainNavBarNPM></MainNavBarNPM>
            <Banner></Banner>
            <MapAddress></MapAddress>
            
        </div>
    );
};

export default HomePage;