import { Box, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import { Routes } from '../../Constants/Routes';
import { MemoizedButton } from '../SDK/Button';
import { primary } from '../../Constants/theme';
const CustomNavbar = styled(Box)(({ theme }) => ({
  background: primary.mainBg,
  fontFamily: 'Poppins',
  padding:"1rem 1.5rem",
  ".grid-container":{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    ".logo":{
      width:"10rem",
      height:"3rem",
      img:{
        width:"100%",
        height:"100%",
        objectFit:"contain"
      }
    }
  },
  ".navlinks":{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    gap:"3rem",
    ".navlink":{
      color:primary.blackMain,
      fontWeight:"600",
      "&:hover":{
        color:primary.btnMain
      }
    }
  },
  ".button":{
    background:"#fff",
    color:primary.blackMain,
    fontWeight:"bold",
    letterSpacing:"1px",
    textTransform: 'capitalize',
    fontSize:"1rem",
    boxShadow:"none",
    "&:hover":{
      border:` 1px ${primary.blackMain}`
    }
  }
}));

const Navbar = () => {
  return (
    <CustomNavbar>
      <Grid container className='grid-container'>
        <Grid item className='grid-item logo'>
          <img src='https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512' alt='logo' />
        </Grid>
        <Grid item className='grid-item navlinks'>
          {Routes?.map((item) => (
            <Typography key={item.path} className='navlink'>{item?.name}</Typography>
          ))}
          <MemoizedButton className="button" content={`Buy Template`} variant="contained"/>
        </Grid>
      </Grid>
    </CustomNavbar>
  );
};

export default Navbar;
