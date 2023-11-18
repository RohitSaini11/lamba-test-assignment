import { Box } from "@primer/react";
import styles from '../styles.module.css';
import { DeviceCameraIcon } from "@primer/octicons-react";

const Card = () => {
    return(
        <>
            <Box
                sx={{
                    padding:'1vmax',
                    minWidth:'calc(100%/3 - 10px)',
                    minHeight:'40vh',
                    display:'flex',
                    flexDirection:'column',
                }}
            > 
            <Box sx={{width:'100%',height:'100%',borderRadius:'20px', backgroundColor:'grey',display:'flex',justifyContent:'center',alignItems:'center'}}>
                {/* insert a thumbail image here */}
                <DeviceCameraIcon size={52} />
            </Box>    
            <p className={styles.videoTitle} >Attractive Video Title</p>
            <p className={styles.VideoInfo} >Channel name</p>
            <p className={styles.VideoInfo} >XYZ views<span className={styles.videoTimeDecor}>Upload Time Duration</span></p>
               
            </Box>
        </>
    )
}

export default Card;