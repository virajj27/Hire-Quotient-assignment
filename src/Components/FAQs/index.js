import { Box, Grid, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FAQsData } from "../../Constants/Faqs";
import FAQComponent from "../SDK/Button/FAQs/FaqComponent";
import FeaturesComponent2 from "../HeroSection/FeaturesComponent2";
import ScrollReveal from "scrollreveal";
const CustomFAQ = styled(Box)(({ theme }) => ({
  marginTop: "2rem",
  padding:"2rem 0",
  ".section-container": {
    width: "80%",
    margin: "auto",
  },
}));
const FAQs = () => {
  useEffect(() => {
    const sr2 = ScrollReveal({
      origin: "bottom",
      duration: 2000,
      distance: "80px",
      reset: false,
    });
    sr2.reveal(` .FAQCOntainer`, { opacity: 0, interval: 300 });
  }, []);
  const [view, setView] = useState(0);

  return (
    <CustomFAQ>
      <Grid container className="section-container">
        <Grid item xs={12} md={6} style={{maxWidth:"45%"}}>
            <FeaturesComponent2  title={{text:"Need Answers?",size:"3.5rem",width: "80%",} }
        highlighted={2}
        heading={{text:"🙋‍♀️ FAQ", size:"12px"}}
        desc={{
          text: "Check out our most commonly asked questions below to find the information you need.", size:"1rem"
        }}/>
        </Grid>
        <Grid item xs={12} md={6} className="FAQCOntainer">
          {FAQsData?.map((faq, id) => {
            return (
              <FAQComponent
                FAQCounts={FAQsData.length}
                key={id}
                question={faq.question}
                answer={faq.answer}
                id={id}
                view={view}
                setView={setView}
              />
            );
          })}
        </Grid>
      </Grid>
    </CustomFAQ>
  );
};

export default FAQs;
