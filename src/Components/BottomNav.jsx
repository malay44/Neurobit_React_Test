import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearData,
  decrementCount,
  incrementCount,
} from "../features/MontagesSlice.js";

export default function BottomNav() {
  const dispatch = useDispatch();

  const montage = useSelector((state) => state.montage.data);
  const currentStep = useSelector((state) => state.montage.currentStep);
  console.log(montage.edf === null);

  return (
    <Box sx={{ display: "flex", height: "80px", width: "100%", marginTop: "2rem", backgroundColor: "white"}} >
      <Box sx={{ display: "flex", mb: "1rem",flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
        <Box sx={{ ml: 5 }}>
          <Button onClick={() => {dispatch(decrementCount())}} variant="outlined" component="span" sx={{ backgroundColor: "white", color: "#959595", px: "55px", py: "15px", mt: "20px", border: "1px solid #959595" }}>
            <Typography variant="p" sx={{ color: "#959595", fontSize: "14px", fontWeight: "400", textTransform: "capitalize"}} >
              Back
            </Typography>
          </Button>
          <Button onClick={() => {dispatch(clearData())}}  variant="text" component="span" sx={{ color: "#959595", px: "35px", mt: "20px" }}>
            <Typography variant="p" sx={{ color: "#959595", fontSize: "14px", fontWeight: "500", textTransform: "capitalize" }} >
              Cancle Montage
            </Typography>
          </Button>
        </Box>

        <Box sx={{ mr: 5 }}>
          <Button onClick={() => {dispatch(incrementCount())}} background="success" variant="contained" component="span" sx={{ backgroundColor: "#2F7EC7", color: "white", alignItems: "end", justifyItems: "end", px: "55px", py: "15px", mt: "20px", background: currentStep === 2 ? "#10A44B" :"#2F7EC7", ":hover":{background: currentStep === 2 ? "#069a42" :"#1565c0"}, "&.Mui-disabled": { background: "#9BC4EA", }}}
            disabled={montage.edf === null}>
            <Typography variant="p" sx={{ color: "white", fontSize: "14px", fontWeight: "500", textTransform: "capitalize" }} >
              {currentStep === 2 ? "Save" : "Next"}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
