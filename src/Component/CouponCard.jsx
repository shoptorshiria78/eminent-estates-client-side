
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CouponCard = ({ item }) => {
    return (
        <div>
            <Card sx={{ minWidth: 275, backgroundImage:'linear-gradient(45deg, #7B66FF 30%, #C5FFF8 90%)' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                       {item.couponCode}
                    </Typography>
                    <Typography variant="h5" component="div">
                    {item.discountPercentage} % Discount
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.couponDescription}
                    </Typography>
                    
                </CardContent>
               
            </Card>

        </div>
    );
};

export default CouponCard;