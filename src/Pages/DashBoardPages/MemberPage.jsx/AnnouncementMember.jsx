import AnnouncementCard from "../../../Component/AnnouncementCard";
import useAnnouncement from "../../../Hooks/useAnnouncement";


const AnnouncementMember = () => {

    const [announcement] = useAnnouncement();
    return (
        <div>
            {
                announcement.map(singleAnnouncement => <AnnouncementCard key={singleAnnouncement._id} singleAnnouncement={singleAnnouncement}></AnnouncementCard>)
            }

        </div>
    );
};

export default AnnouncementMember;