import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Box, Stack, Typography } from '@mui/material'
import { getData } from '../utils/Api'
import './Card.css'
import rupee from "../../assets/images/card/rupee.svg"
import Trim from '../utils/TrimLength/Trim'
function Card() {
  const [hotels, setHotels] = useState([])
  useEffect(() => {
    getData("/get/all/data").then((response) => {
      setHotels(response);
    })
  }, [])
  return (
    <Container>
      <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} className='card-Content-Container'>
        {hotels.map((hotel, index) => {
          return (
            <Stack key={index} width={'270px'} mb={4}>
              <Box height={'250px'} width={'100%'} className="card-img-con">
                <img src={hotel?.featuredImage} alt={hotel?.LocationType} />
              </Box>
              <Stack>
                <Stack flexDirection={'row'} alignItems={'center'}>
                  <a href='/'><Trim str={hotel?.name} maxLength={15} />,</a>
                  <Typography> {hotel?.location}</Typography>
                </Stack>
                <Typography className='hotel-summary'><Trim str={hotel?.summary} maxLength={25} /></Typography>
                <Stack flexDirection={'row'} alignItems={'center'} className='card-hotels-price'>
                  <a href="/">
                    <img src={rupee} alt="rupee" />
                  </a>
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