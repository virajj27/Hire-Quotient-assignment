import React from "react";
import { Box, Typography, styled } from "@mui/material";
const CustomCard = styled(Box)(({ theme }) => ({
  ".imgContainer": {
    width: "100%",
    height: "45%",
    borderRadius: "10px",
    overflow: "hidden",
    img: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      borderRadius: "10px",
    },
  },
  ".textContainer": {
    padding: "1rem",
    ".heading": {
      fontSize: "24px",
      fontWeight: "600",
      marginBottom:"10px"
    },
    ".desc": {
      fontSize: "18px",
    },
  },
}));
const Card = ({imgUrl, heading, desc}) => {
  return (
    <CustomCard>
      <Box className="imgContainer">
        <img
          src={imgUrl}
          alt="tp"
        />
      </Box>
      <Box className="textContainer">
        <Typography className="heading">{heading}</Typography>
        <Typography className="desc">
          {desc}
        </Typography>
      </Box>
    </CustomCard>
  );
};

export const MemoizedCard = React.memo(Card);
