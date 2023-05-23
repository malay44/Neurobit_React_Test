import { Box, Typography } from "@mui/material";
import React from "react";
import PreviewChannel from "./PreviewChannel.jsx";
import { useSelector } from "react-redux";

export default function PreviewMapChannels() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const spindle = useSelector((state) => state.montage.spindle);
  const artifacts = useSelector((state) => state.montage.artifacts);
  const currentStep = useSelector((state) => state.montage.currentStep);
  const channelNames = numbers.map((number) => `channel-${number}`);
  const customTypography = {
    margin: " 0 0 0 0",
    color: "#0F0F0F",
    fontSize: "0.9rem",
    fontWeight: "500",
    textTransform: "capitalize",
    textAlign: "left",
  };
  return (
    <div>
      {/* header */}
      <Box
        sx={{
          height: "3.2rem",
          backgroundColor: "#E5F3FF",
          borderRadius: "5px",
          alignItems: "center",
          justifyContent: "space-around",
          display: "grid",
          gridTemplateColumns: "22.34748011% 22.4137931% 52.5198939%",
          my: 2,
        }}
      >
        <Typography
          variant="p"
          sx={{ ...customTypography, textAlign: "center" }}
        >
          Channel
        </Typography>
        <Typography variant="p" sx={{ ...customTypography, margin: 0 }}>
          {" "}
          Primary Channel (default select)
        </Typography>
        <Typography variant="p" sx={{ ...customTypography, margin: 0 }}>
          Reference Channel (default N/A)
        </Typography>
      </Box>
      {/* preview */}
      {channelNames.map((item, index) => {
        return <PreviewChannel key={index} item={item} />;
      })}
      {/* additional settings preview */}
      <Box
        sx={{
          boxShadow: "0px 3px 20px 4px rgba(0, 0, 0, 0.04)",
          borderRadius: 2,
          display: currentStep === 2 ? "none" : "block",
        }}
      >
        <Box
          sx={{
            height: "4.7rem",
            backgroundColor: "white",
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "space-around",
            display: "grid",
            gridTemplateColumns: "22.347480% 77.65252%",
            mt: 2,
          }}
        >
          <Typography
            variant="p"
            sx={{
              color: "#000000",
              fontSize: "0.9rem",
              fontWeight: "500",
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            Additional settings:
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#000000",
              fontSize: "0.9rem",
              fontWeight: "500",
              textTransform: "capitalize",
              textAlign: "left",
              transform: "translateX(-3%)",
            }}
          >
            {artifacts&&"Artifacts"}{artifacts&&spindle&&" ,"}{spindle&&"Spindle"}
          </Typography>
        </Box>
      </Box>
      {/* output format preview */}
      <Box
        sx={{
          boxShadow: "0px 3px 20px 4px rgba(0, 0, 0, 0.04)",
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            height: "4.7rem",
            backgroundColor: "white",
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "space-around",
            display: "grid",
            gridTemplateColumns: "22.347480% 77.65252%",
            mt: 2,
          }}
        >
          <Typography
            variant="p"
            sx={{
              color: "#8A8A8A",
              fontSize: "1rem",
              fontWeight: "700",
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            Output Format:
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#0f0f0f",
              fontSize: "1rem",
              fontWeight: "700",
              textAlign: "left",
              transform: "translateX(-3%)",
            }}
          >
            Wanombi.xml
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
