import { Box, Typography } from "@mui/material";
import React from "react";
import PreviewChannel from "./PreviewChannel.jsx";

export default function PreviewMapChannels() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
    </div>
  );
}
