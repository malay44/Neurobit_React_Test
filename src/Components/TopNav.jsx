import { Box, Typography } from "@mui/material";
import * as FaIcon from "react-icons/fa";
import * as RiIcon from "react-icons/ri";

export default function TopNav() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", }} >
      <Typography variant="permanent" color="black" fontWeight="700" fontSize="28px" >
        Test_Study
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
        <FaIcon.FaUserCircle style={{ color: "#2CA9E3", fontSize: "28px", marginLeft:"10px", marginRight:"10px" }}/>
        <Typography fontWeight="400" fontSize="16px">
          Malay Patel
        </Typography>
        <RiIcon.RiArrowDropDownLine
          style={{ color: "black", fontSize: "28px" }}
        />
      </Box>
    </Box>
  );
}
