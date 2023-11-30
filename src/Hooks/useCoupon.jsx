import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../AxiosInterfaces/useAxiosPublic";


const useCoupon = () => {

    const axiosPublic = useAxiosPublic()

    const {data: coupon=[], refetch} = useQuery({
        queryKey:['coupon'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/allCoupon')
            return res.data;
        }
    });
    
    return [coupon, refetch];
};


export default useCoupon;