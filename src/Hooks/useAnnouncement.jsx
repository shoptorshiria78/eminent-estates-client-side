import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosInterfaces/useAxiosSecure";

const useAnnouncement = () => {
   const axiosSecure = useAxiosSecure();

   const { data: announcement=[]} = useQuery({
    queryKey:['announcement'],
    queryFn: async ()=> {
        const res = await axiosSecure.get('/getAnnouncement');
        return res.data;
    }
    
   });
   return [announcement]
};

export default useAnnouncement;