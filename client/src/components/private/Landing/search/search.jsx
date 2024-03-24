import {Stack, Button} from '@mui/material';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import './search.css';
import { getData } from '../../../utils/Api';
import { useEffect, useState, useRef } from 'react';
import { RemoveDuplicates } from '../../../utils/RemoveDuplicate/RemoveDuplicates';
export const SearchInput = () => {
  const [destination, setDestination] = useState("");
  const [HotelData, setHotelData] = useState([]);
  const inputRef = useRef(null);
  const handleOutsideClick = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setHotelData([]);
      setDestination("")
    }
  };

  useEffect(() => {
    ///remove white spaces and then check
    if (destination.trim().length > 0) {
      getData("/get/all/data").then((response) => {
        const filteredHotel = RemoveDuplicates(response);
        setHotelData(filteredHotel);

      })
    }
  }, [destination]);

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <Container>
      <Stack position={'relative'}>
        <Stack flexDirection={'row'} justifyContent={'center'} margin={'auto'} width={'70%'} position={'relative'} alignItems={'center'} className='searchInputCon'>
          <input type="text" placeholder='search destination' ref={inputRef} value={destination} onChange={e => setDestination(e.target.value)} />
          <Button className='active' sx={{ borderRadius: "24px", marginLeft: "-70px" }}><SearchIcon /></Button>
        </Stack>
        {/* ---show---api---results----- */}

        {
          destination.length > 0 && (
            <Stack className='nav-search-values' width={'50%'} margin={'auto'} bgcolor={'#F5F5F5'} borderRadius={'10px'}>
              {
                HotelData
                  .filter((hotel) => hotel.location.toLowerCase().includes(destination.toLocaleLowerCase()))
                  .map((hotel, index) => destination.length > 0 ? (
                    <a href="/" key={index}>{hotel.location}</a>
                  ) : null)
              }
            </Stack>
          )
        }
      </Stack>
    </Container>
  )
}