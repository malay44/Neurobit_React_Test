import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";

export default function BottomNav() {

  const [value, setValue] = React.useState(0);

  return (
    <Box
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        display: "flex",
        height: "80px",
        width: "100%",
        marginTop: "2rem",
        backgroundColor: "white",
        // position: 'fixed',
        // bottom: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ ml: 5 }}>
          <Button
            variant="outlined"
            component="span"
            sx={{
              backgroundColor: "white",
              color: "#959595",
              px: "55px",
              py: "15px",
              mt: "20px",
              border: "1px solid #959595",
            }}
          >
            <Typography
              variant="p"
              sx={{
                color: "#959595",
                fontSize: "14px",
                fontWeight: "400",
                textTransform: "capitalize",
              }}
            >
              Back
            </Typography>
          </Button>
          <Button
            variant="text"
            component="span"
            sx={{ color: "#959595", px: "35px", mt: "20px" }}
          >
            <Typography
              variant="p"
              sx={{
                color: "#959595",
                fontSize: "14px",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              Cancle Montage
            </Typography>
          </Button>
        </Box>

        <Box sx={{ mr: 5 }}>
          <Button
            variant="contained"
            component="span"
            // disabled={true}
            sx={{
              backgroundColor: "#2F7EC7",
              color: "white",
              alignItems: "end",
              justifyItems: "end",
              px: "55px",
              py: "15px",
              mt: "20px",
              "&.Mui-disabled": {
                background: "#9BC4EA",
              },
            }}
          >
            <Typography
              variant="p"
              sx={{
                color: "white",
                fontSize: "14px",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              Next
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
