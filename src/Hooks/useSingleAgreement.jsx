import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosInterfaces/useAxiosSecure";


const useSingleAgreement = (user) => {
    const axiosSecure = useAxiosSecure();
    
    const {data: singleAgreement, refetch} = useQuery({
        queryKey:['singleAgreement'],
        queryFn: async()=>{
          const res =  axiosSecure.get(`/getAgreement/${user.email}`);
          return (await res).data;
           
        }
    })
    return [singleAgreement, refetch]
};

export default useSingleAgreement;