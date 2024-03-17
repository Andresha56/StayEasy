import { Button, Container, Stack, Typography } from '@mui/material'
import { ExploreData } from '../../assets/data/Explore/Explore'
import React from 'react';
import "./Explore.css";
import FilterByPrice from './FilterByPrice/FilterByPrice'
function Explore() {
  return (
    <Container>
        <Stack mb={'2rem'} flexDirection={'row'} alignItems={'center'} mt={5} justifyContent={'space-between'}>
            <Stack flexDirection={'row'} width={'80%'} justifyContent={'space-between'} alignItems={'center'}>
            {
              ExploreData.map((data,index)=>{
              return (
                <Stack key={index}>
                  <img src={data.image} alt={data.destination} />
                  <a href={data.link}>{data.destination}</a>
                </Stack>
              )
              }
              )}
            </Stack>
            <Stack width={'20%'} justifyContent={'flex-end'}>
                <FilterByPrice/>
            </Stack>
        </Stack>
    </Container>
  )
}

export default Explore