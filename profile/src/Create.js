
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
const Create = () => {
    return ( 
        <div>
            <Typography variant="h1"
            color="primary">
                Hello,<br></br>
                I'm Suhaib<br></br>
                Full-Stack Developer
            </Typography>
            <ArrowCircleLeftOutlinedIcon fontSize="large" />
            <ArrowCircleRightOutlinedIcon fontSize="large" />
            
            <Button variant="contained">Hire me</Button>
        </div>
     );
}
 
export default Create;