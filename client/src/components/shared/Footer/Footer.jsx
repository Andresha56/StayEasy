import React from 'react'
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Container from '@mui/material/Container';
import { Stack, Typography, Box } from '@mui/material';
function Footer() {
  const support = ["Help Center", "Anti-discrimination", "Disability Support", "Cancellation Support"];
  const BookMyTrip = ["NewsLetter", "New features", "Careers", "Investors", "Emergency Stay"];
  return(
    <Box bgcolor={'#252529'} mt={5} pb={1}>
      <Container>
        <Stack flexDirection={'row'} gap={"10rem"} p={5}>
          <Stack>
            {
              support.map((support, indx) => <Typography key={indx} my={1}>{support}</Typography>)
            }
          </Stack>
          <Stack>
            {
              BookMyTrip.map((BookMyTrip, indx) => <Typography key={indx} my={1}>{BookMyTrip}</Typography>)
            }
          </Stack>
        </Stack>
          <Stack mb={5} ml={4} flexDirection={'row'} justifyContent={'space-between'}>
          <Box>
          <Typography>2024 BookMyTrip, Inc. privacy . Terms . Sitemap . Company deatils</Typography>
          </Box>
          <Stack flexDirection={'row'} gap={5}>
            <Typography>English(IN)</Typography>
            <Typography>INR </Typography>
            <Box>
            <ScrollToTop/>
          </Box>
          </Stack>
          </Stack>
      </Container>
    </Box>
  )
}

export default Footer