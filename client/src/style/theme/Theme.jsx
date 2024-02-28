import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f73972",
    },
  },
  typography: {
    fontFamily: {
      "Quicksand": 'sans-serif',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      variants: [
        {
          props: { variant: 'text' },
          style: {
            textTransform: 'none',
            fontFamily: '"Quicksand", sans-serif',
            color:"rgb(46, 46, 46)",
            fontSize:"1rem",
            '&:hover': {
              backgroundColor: "transparent",
            }
          },
        },
      ],
    },
  },

});
