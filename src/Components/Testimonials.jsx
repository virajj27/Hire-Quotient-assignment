import React from "react";
import "../Testimonials.css";
import { Avatar, Box, Stack, Typography } from "@mui/material";

const Testimonials = () => {
  // List of partner images
  const partnerImages = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  ];

  // Duplicate the partner images for the "double" section
  const doubledPartnerImages = [...partnerImages, ...partnerImages];

  return (
    <section id="partnersSection">
      <div id="partnersBody">
        <div className="partnerSlider">
          <div className="partnerSlideS">
            {doubledPartnerImages.map((image, index) => (
              <Stack className="partnerSlide" key={index}>
                <Typography variant="p" style={{fontSize:"20px"}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  dolore.
                </Typography>
                <Box style={{display:"flex", justifyContent:"flex-start", gap:"1rem",width:"100%", marginTop:"1rem"}}>
                  <Avatar src={image} alt={`partner_${index + 1}`} />
                  <Box>
                    <Typography>Viraj</Typography>
                    <Typography>Developer</Typography>
                  </Box>
                </Box>
              </Stack>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
