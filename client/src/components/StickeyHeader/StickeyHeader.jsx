import React, { useState, useEffect } from 'react';
import { SearchInput } from '../search/search';
import Explore from '../Explore/Explore';
import './StickeyHeader.css';
import { Box } from '@mui/material';
import Swipe from '../Explore/Swiper/Swiper';
function StickyHeader() {
    const [isFix, setIsFix] = useState(false);
    const setFixHeader = () => {
        if (window.scrollY >= 96) {
            setIsFix(true);
        } else {
            setIsFix(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', setFixHeader);
        return () => {
            window.removeEventListener('scroll', setFixHeader);
        };
    }, []);

    return (
            <Box className={isFix ? 'fixed-header' : 'static-header'}>
                <SearchInput />
                {/* <Explore /> */}
                <Swipe/>
            </Box>
    );
}

export default StickyHeader;
