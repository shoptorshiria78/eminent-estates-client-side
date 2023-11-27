

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


export default function AnnouncementCard({singleAnnouncement}) {
  return (
    <Card sx={{ minWidth: 275, mt: 10 }}>
     
        
        <Typography variant="h5" component="div">
            {
        singleAnnouncement.title

            }
        </Typography>
        
        <Typography variant="body2">
         {singleAnnouncement.description}
        </Typography>
     
    </Card>
  );
}