import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Box, Stack, Typography } from '@mui/material'
import { getData } from '../../../utils/Api'
import heart from "../../../../assets/images/card/heart.svg"
import './Card.css'
import favourite from "../../../../assets/images/card/favourite.svg"

import rupee from "../../../../assets/images/card/rupee.svg"
import Trim from '../../../utils/TrimLength/Trim'
function Card() {
  const [hotels, setHotels] = useState([])
  useEffect(() => {
    getData("/get/all/data").then((response) => {
      setHotels(response);
    })
  }, [])
  return (
    <Container>
      <Stack flexDirection={'row'} justifyContent={'center'} flexWrap={'wrap'} gap={3} className='card-Content-Container'>
        {hotels.map((hotel, index) => {
          return (
            <Stack key={index} width={'270px'} mb={4}>
              <Box height={'250px'} width={'100%'} className="card-img-con" position={'relative'}>
                <img src={hotel?.featuredImage} alt={hotel?.LocationType} />
                {/* <img src={heart} alt="" className='svg-image'/> */}
                <img src={favourite} alt={hotel?.destination} className='svg-image'/>
              </Box>
              <Stack>
                <Stack flexDirection={'row'} alignItems={'center'}>
                  <a href='/'><Trim str={hotel?.name} maxLength={15} />,</a>
                  <Typography> {hotel?.location}</Typography>
                </Stack>
                <Typography className='hotel-summary'><Trim str={hotel?.summary} maxLength={25} /></Typography>
                <Stack flexDirection={'row'} alignItems={'center'} className='card-hotels-price'>
                  <img src={rupee} alt="rupee" />
                  <Typography>{hotel?.cheapestPrice} night</Typography>
                </Stack>
              </Stack>
            </Stack>
          )
        })}
      </Stack>
    </Container>
  )
}

export default Card