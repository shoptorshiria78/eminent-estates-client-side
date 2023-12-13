import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import contactAnimation from "../../assets/Animation Contact.json"
import MainNavBarNPM from "../../SharedComponent/MainNavBar";


export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const message = {
            email_id: data.get('email'),
            from_name: data.get('firstName'),
            lastName: data.get('lastName'),
            message: data.get('multiline')
        };
        const serviceId = 'service_b7wimzl';
        const templateId = 'template_95ce6vy'
        emailjs.send(serviceId, templateId, message, 'RYCHj-C3nN_Thw4a0')
            .then((result) => {
                if (result.text) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your message has been sent",
                        showConfirmButton: false,
                        timer: 1500
                    });
                   
                }
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <div>
            <MainNavBarNPM></MainNavBarNPM>
            <Container component="main" maxWidth="md">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Paper elevation={10} sx={{ width: '210px', mx: 'auto', my: 4, background: '#CEDEBD' }}><Typography variant="h4" sx={{ px: '12px', py: '5px', color: '#0766AD' }}>Contact Us</Typography></Paper>
                    <Typography variant="h6" sx={{ px: '12px', py: '5px', color: '#0766AD' }}>If needed , feel free to Contact</Typography>
                    <Grid container spacing={8} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={12} md={6}>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} md={6}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="firstName"
                                            label="First Name"
                                            type="text"
                                            id="firstName"

                                        />
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="lastName"
                                            label="Last Name"
                                            type="text"
                                            id="lastName"

                                        />
                                    </Grid>
                                </Grid>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />

                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Write Your Message Here"
                                    name="multiline"
                                    required
                                    fullWidth
                                    multiline
                                    maxRows={6}
                                />


                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Send Me
                                </Button>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Lottie animationData={contactAnimation}></Lottie>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </div>

    );
}