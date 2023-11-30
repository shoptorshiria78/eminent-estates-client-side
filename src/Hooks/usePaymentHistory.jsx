import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosInterfaces/useAxiosSecure";
import useAuth from "./useAuth";


const usePaymentHistory = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const {data:paymentHistory=[], refetch} = useQuery({
            queryKey:['history'],
            queryFn: async()=>{
                const res = await axiosSecure.get(`/paymentHistory/${user.email}`)
                return res.data;
            }
    })
    return [paymentHistory, refetch]
};

export default usePaymentHistory;