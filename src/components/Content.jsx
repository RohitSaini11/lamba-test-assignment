import { Box } from "@primer/react";
import Card from "./Card";
import { useEffect, useState } from "react";

const Content = () => {
    const[tabletWidth,SetTabletWidth] = useState(false);
    const[col,SetCol] = useState('1fr 1fr 1fr');

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            SetTabletWidth(true);
            SetCol('1fr 1fr');
          } else {
            SetTabletWidth(false);
            SetCol('1fr 1fr 1fr');
          }
        };
        
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        console.log(tabletWidth);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      },[]);


    return(
        <>
            <Box 
                sx={{display: 'grid', gridTemplateColumns:col, gridGap: 1,margin:'20px'}}
            >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Box>
        </>
    )
}

export default Content;