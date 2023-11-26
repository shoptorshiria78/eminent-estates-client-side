import ApartmentCard from "../../Component/ApartmentCard";
import useApartment from "../../Hooks/useApartment";
import MainNavBarNPM from "../../SharedComponent/MainNavBar";


const Apartment = () => {

    const [apartments] = useApartment()
    return (
        <div>
            <MainNavBarNPM></MainNavBarNPM>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 max-w-6xl mx-auto">
            {
                apartments.map(apartment=><ApartmentCard apartment={apartment} key={apartment._id}>
                </ApartmentCard>)
            }
            
        </div>
        </div>
    );
};

export default Apartment;