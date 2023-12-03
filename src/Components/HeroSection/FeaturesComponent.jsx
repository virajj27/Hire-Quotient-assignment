import { Box, styled, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { primary } from "../../Constants/theme";
import ScrollReveal from "scrollreveal";
const CustomFeatures = styled(Box)(({ theme }) => ({
  background: primary.mainBg,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "6rem 1rem 1rem 1rem",
  ".heading": {
    background: "#fff",
    color: primary.btnMain,
    padding: "0.5rem",
    borderRadius: "4px",
    letterSpacing: "1px",
    fontWeight: "600",
    marginBottom: "1.4rem",
  },
  ".title": {
    marginBottom: "1rem",
    textAlign: "center",
    fontWeight: "600",
    width:"75%"
  },
  ".desc": {
    color: "grey",
    width: "50%",
    marginBottom: "1rem",
    textAlign: "center",
    fontWeight: "550",
    letterSpacing: "1px",
  },
}));
const FeaturesComponent = ({ heading, desc, title, highlighted }) => {
  useEffect(() => {
    const sr2 = ScrollReveal({
      origin: "bottom",
      duration: 4000,
      distance: "80px",
      reset: false,
    });
    sr2.reveal(` .title, .desc`, { opacity: 0, interval: 300 });
  }, []);
  const words = title?.text?.split(" ");

  return (
    <CustomFeatures>
      <Typography variant="p" className="heading" style={{fontSize:heading?.size}}>
        {heading?.text}
      </Typography>
      <Typography variant="h2" className="title" style={{fontSize:title?.size, w: title?.width}}>
        {words.map((word, index) => (
          <React.Fragment key={index}>
            {index !== 0 && " "} {/* Add space between words */}
            {index === highlighted - 1 ? (
              <span style={{ color: primary.secondary }}>{word}</span>
            ) : (
              word
            )}
          </React.Fragment>
        ))}
      </Typography>
      <Typography variant="p" className="desc" style={{fontSize:desc?.size}}>
        {desc?.text}
      </Typography>
    </CustomFeatures>
  );
};

export default FeaturesComponent;
