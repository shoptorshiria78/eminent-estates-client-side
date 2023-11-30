
import { Box, Button} from "@mui/material";
import ApartmentCard from "../../Component/ApartmentCard"

import MainNavBarNPM from "../../SharedComponent/MainNavBar";
import { useLoaderData } from "react-router-dom";
import {  useEffect, useState } from "react";
import useAxiosPublic from "../../AxiosInterfaces/useAxiosPublic";
import Footer from "../../SharedComponent/Footer";



const Apartment = () => {


   
    const { count } = useLoaderData();
   const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 6;
    const numberOfPage = Math.ceil(count / itemsPerPage)

    const pages = [...Array(numberOfPage).keys()]
    const axiosPublic = useAxiosPublic()
    const [apartments, setApartments] = useState();

    useEffect(()=>{
        axiosPublic.get(`/apartments?page=${currentPage}&size=${itemsPerPage}`)
        .then(res=>{
            setApartments(res.data)
        })
    },[currentPage,axiosPublic,itemsPerPage])
    console.log(apartments);

    const handlePrevious =()=>{
        if(currentPage>0){
            setCurrentPage(currentPage-1)
        }
    }
    const handleNext =()=>{
        if(currentPage < pages.length){
            setCurrentPage(currentPage+1)
        }
    }


    return (
        <div>
            <MainNavBarNPM></MainNavBarNPM>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 max-w-6xl mx-auto">
                {
                    apartments?.map(apartment => <ApartmentCard apartment={apartment} key={apartment._id}>
                    </ApartmentCard>)
                }

            </div>
          <Box sx={{ justifyContent:'center', alignItems:'center', display:'flex', my: 4}}>
            <Button sx={{mx:2}} variant="outlined" onClick={handlePrevious}>Previous</Button>
          {
            pages.map(page=><Button style={{
                backgroundColor: currentPage === page ? '#1976D2' : 'transparent',
                color: currentPage === page ? '#ffffff' : '#000000',
               ml:2
              }} onClick={()=>setCurrentPage(page)} key={page}>{page}</Button>)
           }
            <Button  sx={{mx:2}} variant="outlined" onClick={handleNext}>next</Button>
          </Box >
          <Footer></Footer>
        </div>
    );
};

export default Apartment;