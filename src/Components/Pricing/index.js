import React from "react";
import { primary } from "../../Constants/theme";
import { Box, styled } from "@mui/material";
import FeaturesComponent from "../HeroSection/FeaturesComponent";
const CustomHeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  background: primary.mainBg,
}));

const Pricing = () => {
  return (
    <CustomHeroSection>
      <Box>
        <FeaturesComponent
          title={{
            text: "Select your ideal Pricing plan",
            size: "2.8rem",
            width: "100%",
          }}
          highlighted={4}
          heading={{ text: "💲PRICING", size: "12px" }}
          desc={{
            text: "At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.",
            size: "1rem",
          }}
        />
      </Box>
    </CustomHeroSection>
  );
};

export default Pricing;
