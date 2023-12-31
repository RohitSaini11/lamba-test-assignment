import styles from '../styles.module.css';
import { Box, TextInput, Tooltip } from "@primer/react";
import { ThreeBarsIcon,SearchIcon,BellIcon,DeviceCameraVideoIcon,FeedPersonIcon} from '@primer/octicons-react';
import { FaMicrophone} from "react-icons/fa";

const Navbar = () => {


return(
        <>
        <Box sx={{display: 'flex', justifyContent:'space-between',height:'60px',padding: '0 1vh'}}>
                
                <Box sx={{display: 'flex', alignItems: 'center',width:'10%'}}>
                      <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px',borderRadius: '50px',':hover':{ backgroundColor:'#272727',cursor:'pointer' }}}>
                        <ThreeBarsIcon size={20} />
                      </Box>
                      <Box >
                        <img className={styles.logo} src={require('../assets/logo-removebg-preview.png')}  alt='yt-logo' />
                      </Box>
                </Box>
                
                <Box sx={{display: 'flex', alignItems: 'center', height:'60px',padding:'0px 2vmin',width: '40%'}}>
                      <TextInput
                            aria-label="Search"
                            name="zipcode"
                            placeholder="Search"
                            sx={{
                                width: '100%',
                                backgroundColor: 'inherit',
                                color:'white',
                                fontSize: 'medium',
                                borderRadius: '20px 0 0 20px',
                                padding:'5px',
                                border:'1px solid #222222',
                            }}
                      />
                      <Tooltip aria-label="Search" direction='s' noDelay>
                        <Box sx={{display: 'flex', alignItems: 'center', padding: '5px 20px',border:'1px solid #222222',borderLeft:'none',borderRadius: '0px 20px 20px 0px', height:'32px', backgroundColor:'#222222'}}>
                          <SearchIcon size={20} />
                        </Box>
                      </Tooltip>
                      
                      <Tooltip aria-label="Search with your voice" direction='s' noDelay>
                        <Box sx={{marginLeft: '20px',display: 'flex', alignItems: 'center',backgroundColor:'#272727',padding: ' 10px',borderRadius: '50px',':hover':{ backgroundColor:'#3D3D3D' }}}>
                          <FaMicrophone size="18px" />
                        </Box>
                      </Tooltip>

                </Box>
                <Box sx={{display: 'flex', alignItems: 'center',justifyContent: 'space-between', height:'60px',width: '10%',padding:'0px 2vmin'}}>
                  <Tooltip aria-label="Create" direction='s' noDelay>
                    <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px',borderRadius: '50px',':hover':{ backgroundColor:'#272727' }}}>
                        <DeviceCameraVideoIcon size={20} />
                    </Box>
                  </Tooltip>
                  <Tooltip aria-label="Notification" direction='s' noDelay>  
                    <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px',borderRadius: '50px',':hover':{ backgroundColor:'#272727' }}}>
                        <BellIcon size={20} />
                    </Box>
                  </Tooltip>
                    <FeedPersonIcon size={20} />
                </Box>
          </Box>
        
        </>
);


}

export default Navbar;