
import {  Typography } from "@mui/material";


const About = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
           <Typography variant='h4' color='indigo' sx={{ my: 4, textAlign: 'center', fontWeight: 600 }}>About Eminent Estates</Typography>

            <div className="flex flex-col lg:flex-row ">
                <div className="flex-1" >
                    <img className="h-[530px] w-full" src="https://i.ibb.co/8PZW4r4/aboutPic.jpg"></img>
                </div>
                <div className="flex-1 ml-5" >
                    <Typography sx={{ color: '#7752FE', textAlign: 'left', fontWeight :'500',my:1 }} variant="h5">Welcome to Eminent Estates</Typography>
                    <Typography sx={{ color: '#8E8FFA', textAlign: 'left', fontWeight :'300' }} variant="h6">At the heart of Dhaka, Eminent Estates stands as a testament to architectural excellence and timeless design. Enveloped in a vibrant urban landscape, our building seamlessly blends modern aesthetics with a rich historical context.</Typography>
                    <Typography sx={{ color: '#7752FE', textAlign: 'left', fontWeight :'500',my:1 }} variant="h5">Our Story</Typography>
                    <Typography sx={{ color: '#8E8FFA', textAlign: 'left', fontWeight :'300' }} variant="h6">Eminent Estates was conceived with a vision to redefine urban living. From the moment you step into our meticulously designed spaces, you are greeted by an atmosphere of sophistication and comfort.</Typography>
                    <Typography sx={{ color: '#7752FE', textAlign: 'left', fontWeight :'500',my:1 }} variant="h5">Architectural Marvel</Typography>
                    <Typography sx={{ color: '#8E8FFA', textAlign: 'left', fontWeight :'300' }} variant="h6">Designed by world-renowned architects, the structure harmoniously integrates into the cityscape while making a bold statement of its own. The seamless fusion of glass, steel, and natural elements creates an awe-inspiring visual spectacle.</Typography>

                </div>
            </div>
        </div>
    );
};

export default About;