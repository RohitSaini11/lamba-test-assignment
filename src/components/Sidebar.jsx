import { Box } from "@primer/react";
import styles from '../styles.module.css';
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { GiHanger } from "react-icons/gi";
import { MdOutlineSubscriptions, MdMovieFilter, MdOutlinePodcasts, MdOutlineFlag    } from "react-icons/md";
import { BsHandbag,BsMusicNote,BsNewspaper   } from "react-icons/bs";
import { HiSignal } from "react-icons/hi2";
import { ChevronRightIcon, ClockIcon, FlameIcon, GearIcon, HistoryIcon, HomeFillIcon, LightBulbIcon, PersonAddIcon, PersonIcon, QuestionIcon, ReportIcon, ThumbsupIcon, TrophyIcon, VideoIcon } from "@primer/octicons-react";

const Sidebar = ()=>{


    return(
        <>
        <Box sx={{ padding:'0px 1vh', }}>

            <ul className={styles.sideBarList}>
                <li>
                    <HomeFillIcon size={24} />
                    Home
                </li>
                <li>
                    <SiYoutubeshorts size={24} />
                    Shorts
                </li>
                <li>
                    <MdOutlineSubscriptions size={24} />
                    Subscriptions
                </li>
            </ul>

            <ul className={styles.sideBarList}>
                <li className={styles.you}>
                    You 
                    <ChevronRightIcon size={24} />
                </li>
                <li>
                    <PersonIcon size={24} />
                    Your Channel
                </li>
                <li>
                    <HistoryIcon size={24} />
                    History
                </li>
                <li>
                    <VideoIcon size={24} />
                    Your videos
                </li>
                <li>
                    <ClockIcon size={24} />
                    Watch later
                </li>
                <li>
                    <ThumbsupIcon size={24} />
                    Liked Videos
                </li>
            </ul>
            <ul className={styles.sideBarList} >
                <p className={styles.heading}>Subscriptions</p>
                <li>
                    <PersonAddIcon  size={24} />
                    Channel Name
                </li>
                <li>
                    <PersonAddIcon  size={24} />
                    Channel Name
                </li>
                <li>
                    <PersonAddIcon  size={24} />
                    Channel Name
                </li>
                <li>
                    <PersonAddIcon  size={24} />
                    Channel Name
                </li>
                <li>
                    <PersonAddIcon  size={24} />
                    Channel Name
                </li>
            </ul>

            <ul className={styles.sideBarList} >
                <p className={styles.heading}>Explore</p>
                <li>
                    <FlameIcon size={24} />
                    Trending
                </li>
                <li>
                    <BsHandbag size={24}/>
                    Shopping
                </li>
                <li>
                    <BsMusicNote  size={24} />
                    Music
                </li>
                <li>
                    <MdMovieFilter   size={24} />
                    Movies
                </li>
                <li>
                    <HiSignal   size={24} />
                    Live
                </li>
                <li>
                    <SiYoutubegaming   size={24} />
                    Gaming
                </li>
                <li>
                    <BsNewspaper   size={24} />
                    News
                </li>
                <li>
                    <TrophyIcon   size={24} />
                    Sports
                </li>
                <li>
                    <LightBulbIcon   size={24} />
                    Learning
                </li>
                <li>
                    <GiHanger  size={24} />
                    Fashion & Beauty
                </li>
                <li>
                    <MdOutlinePodcasts   size={24} />
                    Podcasts
                </li>
            </ul>
            <ul className={styles.sideBarList} >
                <p className={styles.heading}>More From Youtube</p>
                <li>
                    <img className={styles.yt_imgs} src={require('../assets/youtube-141.png')} alt="yt_p" />
                    YouTube Premium
                </li>
                <li>
                    <img className={styles.yt_imgs} src={require('../assets/yt_studio_icon.png')} alt="yt_p" />
                    YouTube Studio
                </li>
                <li>
                    <img className={styles.yt_imgs} src={require('../assets/yt_music_icon.png')} alt="yt_p" />
                    YouTube Music
                </li>
                <li>
                    <img className={styles.yt_imgs} src={require('../assets/yt_kids_icon.png')} alt="yt_p" />
                    YouTube Kids
                </li>
            </ul>
            <ul className={styles.sideBarList}>
                <li>
                    <GearIcon  size={24} />
                    Settings
                </li>
                <li>
                    <MdOutlineFlag size={24} />
                    Report History
                </li>
                <li>
                    <QuestionIcon  size={24} />
                    Help
                </li>
                <li>
                    <ReportIcon  size={24} />
                    Send feedback
                </li>
                
            </ul>

            <Box>
                <Box 
                    sx={{
                        color:'#9f9a9a',
                        fontSize: '0.85em',
                        padding:'18px 16px 0 16px',
                    }}
                >
                    <p className={styles.sideBar_footer_p} >About</p>
                    <p className={styles.sideBar_footer_p}>Press</p>
                    <p className={styles.sideBar_footer_p}>Copyright</p>
                    <p className={styles.sideBar_footer_p}>Contact us</p>
                    <p className={styles.sideBar_footer_p}>Creators</p>
                    <p className={styles.sideBar_footer_p}>Advertise</p>
                    <p className={styles.sideBar_footer_p}>Developers</p>
                </Box>
                <Box 
                    sx={{
                        color:'#9f9a9a',
                        fontSize: '0.85em',
                        padding:'18px 16px 0 16px',
                    }}
                >
                    <p className={styles.sideBar_footer_p} >Terms</p>
                    <p className={styles.sideBar_footer_p}>Privacy</p>
                    <p className={styles.sideBar_footer_p}>Policy & Safety</p>
                    <p className={styles.sideBar_footer_p}>How YouTube Works</p>
                    <p className={styles.sideBar_footer_p}>Test new features</p>
                </Box>
                <p className={styles.sideBar_footer_mark}>© 2023 Google LLC</p>
            </Box>


        </Box>
        </>
    )
}

export default Sidebar;