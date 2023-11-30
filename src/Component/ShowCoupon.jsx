import { Typography } from "@mui/material";
import useCoupon from "../Hooks/useCoupon";
import CouponCard from "./CouponCard";


const ShowCoupon = () => {

    const [coupon] = useCoupon()

    return (
        <div className="max-w-[1200px] mx-auto">
            <Typography variant="h4" color="secondary" align="center" sx={{ fontWeight: 600, my: 4 }}>Our Coupons</Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    coupon.map(item => <CouponCard key={item._id} item={item}></CouponCard>)
                }
            </div>

        </div>
    );
};

export default ShowCoupon;