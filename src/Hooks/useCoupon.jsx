import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../AxiosInterfaces/useAxiosSecure";


const useCoupon = () => {

    const axiosSecure = useAxiosSecure()

    const {data: coupon=[], refetch} = useQuery({
        queryKey:['coupon'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/allCoupon')
            return res.data;
        }
    });
    return [coupon, refetch];
};

export default useCoupon;