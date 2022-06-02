import { styled, Accordion } from "@mui/material";

export const CustomAccordion = styled(Accordion)(() => ({
    '& .MuiPaper-root': {
      borderRadius: '0px !important',
      boxShadow: 'none'
    },
    borderBottom: '1px solid #DADADA',
    boxShadow: 'none'
  }));
  