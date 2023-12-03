import { Add } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';

import { Box, Divider, Stack, styled, Typography } from "@mui/material";
import React from "react";

import { primary } from "../../../../Constants/theme";
const CustomFAQComponent = styled(Box)(({ theme }) => ({
  ".faq": {
    ".question-main": {
      gap: "11px",
      width: "100%",
      marginBottom: "8px",
      cursor: "pointer",
      backgroundColor:"#f7f8fd",
      padding:"1rem",
      borderRadius:"10px",
      ".question": {
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "20px",
        lineHeight: "32xpx",
        color: "#333333",
        width: "88%",
        transition:"all 3ms ease-in",
        "&.active":{
          color:primary.btnMain
        }
      },
      ".arrow-faq": {
        width: "5%",
        cursor: "pointer",
        color:primary.btnMain,
        fontWeight:"600"
      },
    },
    ".answer": {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "30px",
      color: "#333333",
      width: "88%",
      marginTop: "20px",
      backgroundColor:"#f7f8fd",

    },
  },
  [theme.breakpoints.down("md")]: {
    ".faq": {
      ".question-main": {
        ".question": {
          fontSize: "16px",
          lineHeight: "24px",
        },
      },
      ".answer": {
        fontSize: "14px",
        lineHeight: "20px",
      },
    },
  },
}));

const FAQComponent = ({
  question,
  answer,
  id,
  view,
  setView,
}) => {
  return (
    <CustomFAQComponent>
      <Box
        className={`faq`}
        id={id}
        onClick={() => {
          if (view === id) {
            setView(-1);
          } else {
            setView(id);
          }
        }}
      >
        <Box className="question-main">
          <Box style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <Stack className={ view !== id ?  "question" : "question active"}>{`${question}`}</Stack>
          <Stack className="arrow-faq">
            {view !== id ? <Add /> : <CloseIcon />}
          </Stack>
          </Box>
          
        {view === id && (
          <Typography className="answer">{`${answer}`}</Typography>
        )}
        </Box>
      </Box>
    </CustomFAQComponent>
  );
};

export default FAQComponent;