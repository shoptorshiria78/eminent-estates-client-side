import { Grid, Typography } from '@mui/material';
import Map, { Marker } from 'react-map-gl';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const MapAddress = () => {
    return (
        <Grid >
            <Typography variant='h4' color='indigo' sx={{ my: 4, textAlign: 'center', fontWeight: 600 }}>Apartment Location</Typography>
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 4, overflow: 'hidden', mb: 6 }}>
                <Map
                    mapLib={import('mapbox-gl')}
                    initialViewState={{
                        longitude:88,
                        latitude:23,
                        zoom: 3.5
                    }}
                    style={{ width: 1000, height: 400 }}
                    mapboxAccessToken='pk.eyJ1Ijoicml6aXlhIiwiYSI6ImNscGtpZXB3NTBhM24ybG1lczZ4YTBmanYifQ.I1bTD489y3TGHgAxPAtoGA'
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                    <Marker longitude={88} latitude={23} anchor="center" >
                        <AddLocationAltIcon/>
                    </Marker>
                </Map>;
            </Grid>

        </Grid>
    );
};

export default MapAddress;