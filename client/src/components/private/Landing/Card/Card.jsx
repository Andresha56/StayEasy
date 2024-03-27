import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Box, Stack, Typography } from '@mui/material'
import './Card.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import rupee from "../../../../assets/images/card/rupee.svg"
import Trim from '../../../utils/TrimLength/Trim'
import { useHotelDatasContext } from '../../../utils/Context/GetHotelData'

function Card() {
  const [hotels, setHotels] = useState([])
  const { hotelsData, selectedHotels } = useHotelDatasContext();
  //show all hotels 
  useEffect(() => {
    if (hotelsData.length > 0)  setHotels(hotelsData);
  }, [hotelsData]);
  //show based on selected hotels only  
  useEffect(()=>{
    if(selectedHotels) setHotels(selectedHotels);
  },[selectedHotels]);
  //handel favourite hotels 
  const handleFavourite = (hotelId) => {
    const updatedHotels = hotels.map(hotel => {
      if (hotel._id === hotelId) {
        return { ...hotel, IsFavourite: !(hotel.IsFavourite) };
      }
      return hotel;
    });
    setHotels(updatedHotels);
  };
  return (
    <Container>
      <Stack flexDirection={'row'} justifyContent={'center'} flexWrap={'wrap'} gap={3} className='card-Content-Container'>
        {hotels.map((hotel) => {
          return (
            <Stack key={hotel._id} width={'270px'} mb={4}>
              <Box height={'250px'} width={'100%'} className="card-img-con" position={'relative'}>
                <img src={hotel?.featuredImage} alt={hotel?.LocationType} />
                {
                  hotel?.IsFavourite ?
                    <FavoriteIcon onClick={()=>{handleFavourite(hotel._id)}} sx={{ position: "absolute", top: "10px", right: "20px", color: "#f73972", cursor: "pointer" }} />
                    :
                    <FavoriteBorderIcon onClick={()=>{handleFavourite(hotel._id)}} sx={{ position: "absolute", top: "10px", right: "20px", cursor: "pointer" }} />
                }


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