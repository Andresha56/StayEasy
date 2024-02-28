import { Box, Stack,Button } from '@mui/material';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import './search.css';
export const SearchInput = () => {
    return (
        <Container>
            <Stack flexDirection={'row'} mt={4} justifyContent={'center'} alignItems={'center'}className='searchInputCon'>
                    <input type="text"/>
                <Button className='active' sx={{position:'absolute',right:'250px',borderRadius:"24px"}}><SearchIcon /></Button>
            </Stack>
        </Container>
    )
}