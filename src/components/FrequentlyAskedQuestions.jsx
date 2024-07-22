import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import React, { useState } from "react";

const EligibilityAccordion = () => {
  return (
    <div>
      <Accordion defaultExpanded className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            Do I need to have prior Product Management and Project Management
            experience to enroll in the program?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, the program is designed to be inclusive of all levels of
            experience. All topics will be covered from the basics, making it
            suitable for individuals from any field of work.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            What is the minimum system configuration required?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Minimum system configuration required for the program is a laptop or
            desktop
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
const HowToUseAccordion = () => {
  return (
    <div>
      <Accordion defaultExpanded className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            How do I refer friends and family to earn rewards?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Follow these steps: Go to Refer & Earn. Share your referral link via
            WhatsApp or any other platform. Alternatively, copy your referral
            code and share it with your contacts. Ensure that your referral code
            is entered correctly when your referee opens their link.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>When will I receive my reward?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You’ll get your referral reward within 7 days from your friend’s
            account opening.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
const TandCAccordion = () => {
  return (
    <div>
      <Accordion defaultExpanded className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            How many referrals do I need before I get something?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Great question! The magic number varies depending on our program.
            Usually, it’s a minimum of one successful referral. But hey, why
            stop there? The more, the merrier!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            What are the conditions for a successful referral?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A successful referral typically means that your friend has taken a
            specific action—like signing up, making a purchase, or joining our
            platform. Make sure your friend follows the steps outlined in the
            referral program guidelines.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

function FrequentlyAskedQuestions() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="faq mt-16">
      <h1 className="text-2xl font-bold text-center heading">
        What Are The <span className="text[#1A73E8]">Referral Benefits?</span>
      </h1>
      <div className="mx-48">
        <Box sx={{ flexGrow: 1, display: "flex", height: 300 }}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderColor: "divider",
              minWidth: 259,
              maxWidth: 400,
              width: "100%",
              display: "flex",
              gap: "20px",
              height: "100%",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tab
              label="Eligibility"
              className="faq-btn"
              sx={{
                textTransform: "none",
                backgroundColor: value === 0 ? "#303f9f" : "#3f51b5",
                color: "white",
                marginBottom: "8px",
                "&:hover": { backgroundColor: "#303f9f" },
              }}
            />
            <Tab
              label="How to Use?"
              className="faq-btn"
              sx={{
                textTransform: "none",
                backgroundColor: value === 1 ? "#303f9f" : "#3f51b5",
                color: "white",
                marginBottom: "8px",
                "&:hover": { backgroundColor: "#303f9f" },
              }}
            />
            <Tab
              label="Terms & Conditions"
              className="faq-btn"
              sx={{
                textTransform: "none",
                backgroundColor: value === 2 ? "#303f9f" : "#3f51b5",
                color: "white",
                marginBottom: "8px",
                "&:hover": { backgroundColor: "#303f9f" },
              }}
            />
          </Tabs>
          <Box sx={{ flexGrow: 1 }}>
            {value === 0 && (
              <Box>
                <EligibilityAccordion />
              </Box>
            )}
            {value === 1 && (
              <Box>
                <HowToUseAccordion />
              </Box>
            )}
            {value === 2 && (
              <Box>
                <TandCAccordion />
              </Box>
            )}
          </Box>
        </Box>
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;
