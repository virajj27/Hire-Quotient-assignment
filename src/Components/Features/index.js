import React, { useEffect } from "react";
import { primary } from "../../Constants/theme";
import { Box, Grid, Typography, styled } from "@mui/material";
import FeaturesComponent from "../HeroSection/FeaturesComponent";
import { MemoizedCard } from "../SDK/Button/Card";
import ScrollReveal from "scrollreveal";
const CustomFeatures = styled(Box)(({ theme }) => ({
  background: "white",
  ".feature-grid-container": {
    padding:"2rem 0",
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    margin: "auto",
    ".featureDetails": {
      fontSize: "2rem",
      background: "#ededfa",
      maxWidth: "46%",
      padding: "4rem 3rem 2rem 2.5rem",
      borderRadius: "20px",
      ".detailText": {
        marginTop: "16px",
        fontWeight: "600",
        letterSpacing: "0.8px",
      },
    },
    ".image-card": {
      maxWidth: "48%",
      borderRadius: "10px",
      boxShadow:"-2px 3px 12px -2px rgba(117,112,117,1)"
    },
  },
  ".card":{
    maxWidth:"30%",
    boxShadow:" -2px 3px 6px -2px rgba(117,112,117,1)",
    borderRadius: "20px",

  }
}));

const Features = () => {
  useEffect(() => {
    const sr2 = ScrollReveal({
      origin: "bottom",
      duration: 2000,
      distance: "80px",
      reset: false,
    });
    sr2.reveal(` .card,.image-card, .featureDetails`, { opacity: 0, interval: 300 });
  }, []);
  return (
    <CustomFeatures>
      <FeaturesComponent
        title={{
          text: "Discover our product's Capabilities",
          size: "3.5rem",
          width: "80%",
        }}
        highlighted={4}
        heading={{
          text: "🔥 PREMIER FEATURES",
          size: "12px",
        }}
        desc={{
          text: "Don't settle for mediocrity - embrace the future of management with Manage Wise.",
          size: "1rem",
        }}
      />
      <Grid container className="feature-grid-container">
        <Grid item xs={12} md={6} className="featureDetails">
          <Typography
            variant="p"
            style={{
              background: "white",
              borderRadius: "10px",
              marginBottom: "8px",
            }}
          >
            ⭐️
          </Typography>
          <Typography variant="h4" className="detailText">
            Boost productivity and streamline workflow with us.Enjoy our
            intuitive interface and robust features.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="image-card">
          <MemoizedCard
            imgUrl={
              "https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024"
            }
            desc="Say goodbye to chaos with our smart task management system"
            heading="Smart Task Management"
          />
        </Grid>
      </Grid>
      <Grid container className="feature-grid-container">
        <Grid item xs={12} md={6} lg={4} className="card">
          <MemoizedCard
            imgUrl={
              "https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512"
            }
            desc="Stay productive with our flexible scheduling system"
            heading="Flexible Scheduling"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} className="card">
          <MemoizedCard
            imgUrl={
              "https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512"
            }
            desc="Collaborate seamlessly with your team in real-time"
            heading="Easy Communication"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} className="card">
          <MemoizedCard
            imgUrl={
              "https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512"
            }
            desc="Gain valuable insights with our advanced analytics feature"
            heading="Analytics"
          />
        </Grid>
      </Grid>
    </CustomFeatures>
  );
};

export default Features;
