
import { Typography } from "@mui/material";
import AnnouncementCard from "../../../Component/AnnouncementCard";
import useAnnouncement from "../../../Hooks/useAnnouncement";


const AnnouncementUser = () => {

    const [announcement] = useAnnouncement();
    return (
        <div >
             <Typography variant="h4" color="secondary" align="center" sx={{ fontWeight: 600, my: 4 }}>Announcement</Typography>
            {
                announcement.map(singleAnnouncement => <AnnouncementCard key={singleAnnouncement._id} singleAnnouncement={singleAnnouncement}></AnnouncementCard>)
            }

        </div>
    );
};

export default AnnouncementUser;