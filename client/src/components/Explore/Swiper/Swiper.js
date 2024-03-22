import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import Container from '@mui/material/Container'
import { ExploreData } from '../../../assets/data/Explore/Explore';
import FilterByPrice from '../FilterByPrice/FilterByPrice';
import 'swiper/css';
import { Box,Stack } from '@mui/material';
function Swipe() {
    return (
        <Container>
            <Stack flexDirection={'row'} alignItems={'center'} p={3}>
                <Box width={'90%'}>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={3}
                        speed={500}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                    >
                        {
                            ExploreData.map((data, indx) =>
                                <SwiperSlide>
                                    <a href='./'>{data.destination}</a>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </Box>
                <Stack flexDirection={'flex-end'}><FilterByPrice /></Stack>
            </Stack>
        </Container>
    )
}

export default Swipe