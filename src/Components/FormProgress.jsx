import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const steps = ["Upload EDFs", "Map Channels", "Save & Preview"];

const theme = createTheme({
  palette: {
    primary: {
      main: "#10A44B",
    },
  },
  typography: {
    fontWeightRegular: 400,
    fontWeightMedium: 600,
  },
  components: {
    MuiStepLabel: {
      styleOverrides: {
        root: {
          color: '#10A44B',
          '& .Mui-completed': {
            color: '#10A44B',
          },
          '& .Mui-active': {
            fill: '#10A44B',
          },
        },
        label: {
          '&.Mui-completed': {
            fontWeight: 500,
            color: '#10A44B',
          },
          '&.Mui-active': {
            fontWeight: 400,
            color: '#10A44B',
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-active": {
            "& .MuiStepIcon-text": {
              fill: "#10A44B",
            },
            fill: "transparent",
            border: "1px solid #10A44B",
          },
          "&.Mui-completed": {
            fill: "#10A44B",
            // backgroundColor: "#10A44B",
            border: "1px solid #10A44B",
          },
          color: "transparent",
          borderRadius: "50%",
          border: "1px solid #C4C4C4",
          padding: "2px",
          position: "relative",
          bottom: "2px",
        },
        text: {
          fill: "#c4c4c4",
          // fontSize: "1rem",
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          "&.Mui-active": {
            backgroundColor: "#10A44B",
          },
          "&.Mui-completed": {
            backgroundColor: "#10A44B",
          },
          backgroundColor: "#C4C4C4",
        },
        line: {
          borderColor: "transparent",
        },
        alternativeLabel: {
          left: "calc(-50% + 15px)",
          right: "calc(50% + 15px)",
        },
      },
    },
  },
});

export default function FormProgress() {
  // const montageCount = useSelector((state) => state.montage.currentStep);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          borderRadius: "5px",
          my: 4,
          p: 2,
          backgroundColor: "white",
        }}
      >
        <Stepper
          activeStep={0}
          sx={{
            ".MuiSvgIcon-root": {},
            ".MuiSvgIcon-root.Mui-active": {},
          }}
          // activeStep={montageCount}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </ThemeProvider>
  );
}
