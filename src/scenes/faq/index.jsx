import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions by Client" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Why do you need to redesign your website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The first steps when it comes to the web design process. 
          If they already have a website, 
          you need to know what bothers them with the existing setup.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What business goals is your current website not meeting?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Almost every business owner knows they need a web presence, 
          but they dont really consider what they want to accomplish with their site. 
          Ask them what needs the current version failed to meet, 
          is it the low conversion, or its failing to keep visitors attention, 
          or is it challenging to update.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Why does your brand need a website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Running a successful business nowadays would be pointless without a web presence. 
           Thats why a website needs to have a specific purpose of serving your brand properly.
           For example, is it to inform customers about products and services 
           you are offering or allow them to purchase online?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How is your website useful to visitors?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Here you can go through each section of the site with the client and 
          try to break down every feature if possible.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Who do you want to target?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Do you know who your ideal audience is? 
          How do you categorize them by personal goals, intent, 
          tech-savviness, or demographic location? 
          For you to develop a successful website, 
          your client needs to identify buyer personas.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;