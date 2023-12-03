import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { primary } from "../../Constants/theme";
const CustomFeatures = styled(Box)(({ theme }) => ({
    padding:"1rem",
    ".heading": {
      background: "#fff",
      color: primary.btnMain,
      padding: "0.5rem",
      borderRadius: "4px",
      fontSize: "14px",
      letterSpacing: "1px",
      fontWeight: "600",
      marginBottom: "4rem",
    },
    ".title": {
      fontSize: "5rem",
      width: "75%",
      marginBottom: "1rem",
      marginTop:"2rem",
      fontWeight: "600",
    },
    ".desc": {
      fontSize: "1.1rem",
      color: "grey",
      maxWidth: "40%",
      marginBottom: "1rem",
      fontWeight: "550",
      letterSpacing: "1px",
    },
  }));
const FeaturesComponent2 = ({ heading, desc, title, highlighted }) => {
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
}

export default FeaturesComponent2