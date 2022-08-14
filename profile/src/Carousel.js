import React from 'react'
import './Carousel.css'
import {images} from './CarouseImageData'
import {useState} from 'react'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function Carousel() {
    const [curimage,setcurimage] = useState(0)
  return (
    <div className="carousel">
        <div className="carouselInner" style={{ backgroundImage: `url(${images[curimage].img})`}}>
          <div className="left" onClick={()=>{
            curimage >0 && setcurimage( curimage -1)
          }}>
            <ArrowCircleLeftOutlinedIcon/></div>  
          <div className="center">
            <h1>{images[curimage].titlle}</h1>
            <br></br> 
            
             <p> Lorem <br></br>ipsum dolor sitamet consectetur adipisicing elit. Eos dolore, veritatis nulla ex corporis quia molestiae ut officiis dicta cum. Numquam, incidunt ad atque voluptates perferendis exercitationem eligendi facere alias.</p>
            
            </div>  
          <div className="right" onClick={() =>{
            curimage < 1 && setcurimage(curimage +1)
          }}>
            <ArrowCircleRightOutlinedIcon></ArrowCircleRightOutlinedIcon></div>  
        </div>
    </div>
  )
}

export default Carousel