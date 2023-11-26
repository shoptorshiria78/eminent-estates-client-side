import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../AxiosInterfaces/useAxiosPublic";


const useApartment = () => {

    const axiosPublic = useAxiosPublic()

const {data:apartments=[], refetch} = useQuery({
    queryKey:['apartment'],
    queryFn: async()=>{
        const res = await axiosPublic.get('/apartments')
        return res.data
    }
})
    return [apartments, refetch]
};

export default useApartment;