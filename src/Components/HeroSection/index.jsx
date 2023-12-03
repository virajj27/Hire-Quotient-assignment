import { Box, Grid, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import { primary } from "../../Constants/theme";
import ScrollReveal from "scrollreveal";
import FeaturesComponent from "./FeaturesComponent";
import { MemoizedButton } from "../SDK/Button";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const CustomHeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  background: primary.mainBg,
  ".btn_Container": {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alighnItems: "center",
    padding: "0.2rem 1rem",
    gap: "1.2rem",
    ".btn": {
      padding: "0.8rem 1.8rem",
      borderRadius: "12px",
      textTransform: "capitalize",
      letterSpacing: "1px",
      fontSize: "18px",
      fontWeight: "600",
      boxShadow: "none",
      outline: "1px solid beige",
      tarnsition: "all 1s ease-in ",
      "&:hover": {
        background: "none",
        outline: "1px solid black",
      },

      "&.getStarted": {
        color: "white",
        "&:hover": {
          boxShadow: `-10px 12px 67px 19px ${primary.mainBg}`,
          background: primary.btnMain,
        },
      },
    },
  },
  ".graph_container":{
    width:"80%",
    margin:"3.2rem 0",
    boxShadow:"1px 36px 24px -4px rgba(188,180,180,0.75)",
    img:{
        width:"100%",
        height:"100%",
        objectFit:"contain"
    }
  }
}));
const HeroSection = () => {
  useEffect(() => {
    const sr2 = ScrollReveal({
      origin: "bottom",
      duration: 2000,
      distance: "80px",
      reset: false,
    });
    sr2.reveal(` .btn, .graph_container`, { opacity: 0, interval: 300 });
  }, []);

  return (
    <CustomHeroSection>
      <FeaturesComponent
        title={{text:"Empower your business with Strategic insights",size:"5rem",width:"75%"} }
        highlighted={5}
        heading={{text:"👋 WELCOME TO MANAGE WISE!", size:"14px"}}
        desc={{
          text:" Powerful management platform designed to streamline your business operations, boost productivity, and drive success", size:"1.2rem"
        }}
      />
      <Grid className="btn_Container">
        <Grid item xs={12} md={6}>
          <MemoizedButton
            content={`Get Started`}
            endIcon={<ArrowCircleRightIcon />}
            className="btn getStarted"
            sx={{ background: primary.btnMain }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {" "}
          <MemoizedButton
            content={`Watch Demo`}
            endIcon={<ArrowCircleRightIcon />}
            className="btn watchBtn"
            sx={{ background: "#fff", color: primary.blackMain }}
          />
        </Grid>
      </Grid>
      <Box className="graph_container">
        <img  src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048" alt="graph" className="graph"/>
      </Box>
    </CustomHeroSection>
  );
};

export default HeroSection;
