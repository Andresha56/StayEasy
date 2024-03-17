import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Stack } from '@mui/material';
import filter from "../../../assets/images/Filter/filter.svg"
export default function FilterByPrice() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack justifyContent={'flex-end'} flexDirection={'row'} alignItems={'center'}>
      <img src={filter} alt="" />
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Filters
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>{">=800"}</MenuItem>
        <MenuItem onClick={handleClose}>{"1500-2000"}</MenuItem>
        <MenuItem onClick={handleClose}>{">2000"}</MenuItem>
      </Menu>
    </Stack>
  );
}