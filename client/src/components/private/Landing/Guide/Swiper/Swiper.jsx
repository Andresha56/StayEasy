import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import Container from '@mui/material/Container'
import { ExploreData } from '../../../../../assets/data/Explore/Explore';
import FilterByPrice from '../../FilterByPrice/FilterByPrice';
import { useHotelDatasContext } from '../../../../utils/Context/GetHotelData';
import 'swiper/css';
import "./Swiper.css"
import { Box, Stack } from '@mui/material';

function Swipe() {
    const { hotelsData,setSelecteadHotels} = useHotelDatasContext();
    const handleSelectedDestination = (event) => {
        const location = event.target.innerText || event.target.alt;
        // filter the data besed on selected location
        const filteredHotels = hotelsData.filter(data => data.LocationType && data.LocationType.includes(location));
        setSelecteadHotels(filteredHotels);
    }
    return (
        <Container>
            <Stack flexDirection={'row'} alignItems={'center'} mb={4} mt={3} px={3}>
                <Box width={'85%'}>
                    <Swiper
                        spaceBetween={'10'}
                        speed={500}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        breakpoints={{
                            340: {
                                width: 340,
                                slidesPerView: 2,
                            },
                            640: {
                                width: 640,
                                slidesPerView: 4,
                            },
                            768: {
                                width: 768,
                                slidesPerView: 5,
                            },
                        }}
                    >
                        {
                            ExploreData.map((data, indx) =>
                                <SwiperSlide>
                                    <Stack flexDirection={'column'} className='swiper-content-container' justifyContent={'center'} alignItems={'center'} gap={0}>
                                        <img onClick={handleSelectedDestination} src={data.image} alt={data.destination} />
                                        <span onClick={handleSelectedDestination}>{data.destination}</span>
                                    </Stack>
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