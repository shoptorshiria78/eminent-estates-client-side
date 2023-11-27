
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';

export default function MakeAnnouncement() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data)

    }

    return (


        <div>
            <Typography variant="h4" color="secondary" align="center" sx={{fontWeight:600, my:4}}>Make Announcement</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Title"
                    autoFocus
                    {...register("title", { required: true })}
                    defaultValue="Write Title"
                />
                {errors.title && <span>Title field is required</span>}
                <TextField
                    required
                    autoFocus
                    fullWidth
                    sx={{ mt: 3 }}
                    id="outlined-required"
                    label="Description"
                    {...register("description", { required: true })}
                    defaultValue="Write Description"
                />
                {errors.description && <span>Description field is required</span>}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
            </Box>
        </div>


    );
}