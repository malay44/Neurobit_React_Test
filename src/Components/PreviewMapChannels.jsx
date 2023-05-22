import { Box, Typography } from "@mui/material";
import React from "react";

export default function PreviewMapChannels() {
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
        <Typography variant="p" sx={{...customTypography, textAlign: "center"}}>
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
      <Box
        sx={{
          borderRadius: "5px",
          alignItems: "center",
          justifyContent: "space-around",
          display: "grid",
          gridTemplateColumns: "69.297079% 30.702921%",
          gap: "2px",
          mt: 2,
        }}
      >
        <div>
        <Box
          sx={{
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "space-around",
            display: "grid",
            gridTemplateColumns: "32.2488051769% 32.3444946359% 35.4067001872%",
            gap: "2px",
          }}
        >
        <div  className="dataPreviewBlock">elo</div>
        <div  className="dataPreviewBlock">elo</div>
        <div  className="dataPreviewBlock" style={{ marginRight:"2px" }}>elo</div>
        </Box>
        <Box
          sx={{
            borderRadius: "5px",
            alignItems: "center",
            my: "2px",
            justifyContent: "space-around",
            display: "grid",
            gridTemplateColumns: "32.2488051769% 67.7511948231%",
            transform: "translateX(-1px)",
            gap: "2px",
          }}
        >
        <div  className="dataPreviewBlock" style={{ height: "calc(100% - 2px)" }}>elo</div>
        <Box
          sx={{
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "space-around",
            display: "grid",
            gridTemplateColumns: "48.14010956% 51.85989044%",
            transform: "translateX(-1px)",
            gap: "2px",
          }}
        >
        <div  className="dataPreviewBlock" style={{ marginLeft: "2px" }}>elo</div>
        <div  className="dataPreviewBlock" >elo</div>
        <div  className="dataPreviewBlock" style={{ marginLeft: "2px" }}>elo</div>
        <div  className="dataPreviewBlock" >elo</div>
        </Box>
        </Box>
        </div>
        <div  className="dataPreviewBlock" style={{ height: "100%" }}>elo</div>
      </Box>
    </div>
  );
}
