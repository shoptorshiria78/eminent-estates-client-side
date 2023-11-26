import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
 import useAxiosPublic from '../../AxiosInterfaces/useAxiosPublic';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignUp() {

  const { registration, updateUser, logOut } = useAuth()
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    console.log(data, data.name)
    registration(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        updateUser(data.name, data.photo)
          .then(() => {
            console.log('User profile Updated')
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User updated successfully",
              showConfirmButton: false,
              timer: 1500
            });
            logOut()
            .then()
            .catch()
            navigate('/login')
          })
        const userInfo ={
            name:data.name,
            email:data.email,
            role:'user',
        }
        axiosPublic.post(`/users`,userInfo)
        .then(res=>{
            if(res.data.insertedId){        
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                reset();
            }
        })              
      })

  }

  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Name"
                name="Name"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                {...register("name", { required: true })}
              />
              {errors.name && <Typography> Name field is required</Typography>}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="Photo URL"
                label="Photo URL"
                name="Photo URL"
                autoComplete="Photo URL"
                {...register("photo", { required: true })}
              />
              {errors.photo && <Typography> Photo URL Field is required</Typography>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                {...register("email", { required: true })}
              />
              {errors.email && <Typography> Email Field is required</Typography>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 25,
                  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])/
                })}
              />
              {errors.password?.type === "required" && (
                <Typography>Password is required </Typography>
              )}
              {errors.password?.type === "minLength" && (
                <Typography>Password must be 6 characters </Typography>
              )}
              {errors.password?.type === "maxLength" && (
                <Typography> Password can not be more than 20 characters</Typography>
              )}
              {errors.password?.type === "pattern" && (
                <Typography>Password must have one uppercase character, one lowercase character, one digit, one special character</Typography>
              )}
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>

  );
}