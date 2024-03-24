import React, { useState, useEffect } from 'react';
import { SearchInput } from '../search/search';
import './StickeyHeader.css';
import { Box } from '@mui/material';
import Swipe from '../Guide/Swiper/Swiper';
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
                <Swipe/>
            </Box>
    );
}

export default StickyHeader;
