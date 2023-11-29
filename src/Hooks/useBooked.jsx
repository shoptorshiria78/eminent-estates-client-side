import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../AxiosInterfaces/useAxiosPublic";


const useBooked = () => {
    const { data: booked=[], refetch} = useQuery({
        queryKey:['booked'],
        queryFn: async()=>{
          const res = await useAxiosPublic.get('/getBooked');
          return res.data;
        }
      })
      return [ booked, refetch];
};

export default useBooked;