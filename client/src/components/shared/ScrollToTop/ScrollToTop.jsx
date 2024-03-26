import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {Box } from '@mui/material';

function ScrollToTop() {
    const scrollToTop=()=>{
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth',
          }); 
    }
  return (
    <Box>
        <ArrowCircleUpIcon  sx={{color:"#f73972",cursor:"pointer"}} onClick={scrollToTop}/>
    </Box>
  )
}

export default ScrollToTop