import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosInterfaces/useAxiosSecure";


const useAgreement = () => {

    const axiosSecure = useAxiosSecure()
    
    const { data: agreement=[], refetch} = useQuery({
        queryKey:['agreement'],
        queryFn: async()=>{
            const res = await axiosSecure('/getAgreement')
            return res.data;
        }
    })

    return [ agreement, refetch]
};

export default useAgreement;