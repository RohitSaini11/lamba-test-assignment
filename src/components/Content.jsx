import { Box } from "@primer/react";
import Card from "./Card";

const Content = () => {
    return(
        <>
            {/* <Box 
                sx={{
                    border:'1px solid red',
                    margin:'20px',
                    height:'100vh',
                    width:'calc(100% - 30px)',
                    display:'flex',
                    flexWrap:'wrap',
                    gap:'10px'
                }}
            >
                <Card />
                <Card />
                <Card />
                <Card />
            </Box> */}
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: 1,margin:'20px'}}>
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