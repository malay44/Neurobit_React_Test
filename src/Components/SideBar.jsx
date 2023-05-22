import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import * as RxIcon from "react-icons/rx";
import * as GIIcon from "react-icons/gi";

const drawerWidth = 220;

function SideBar(props) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        "MuiPaper-root": {
        },
        ".MuiDrawer-paper":{
          // apply this style to the drawer background: linear-gradient(180deg, #04273A 0%, rgba(3, 23, 35, 0.96) 100%);
          background: "linear-gradient(180deg, #04273A 0%, rgba(3, 23, 35, 0.96) 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          width: drawerWidth,
          height: "100%",
        },
      }}
      open
    >
      <Box sx={{ color: "white" }}>
        <Typography
          variant="h5"
          align="center"
          fontWeight="700"
          fontSize="28px"
          sx={{ my: 4 }}
        >
          React Test
        </Typography>
        <Divider
          sx={{
            width: "80%",
            margin: "auto",
            height: "2px",
            backgroundColor: "#4F4F4F",
          }}
        />
        <ListItem disablePadding sx={{ my: 1 }}>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <RxIcon.RxDashboard width="20px" style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="p" align="center" fontWeight="400">
                Dashboard
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ my: 1 }}>
          <ListItemButton sx={{ backgroundColor: "#0F4662" }}>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <NoteAddOutlinedIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="p" align="center" fontWeight="400">
                Montages
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ my: 1 }}>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 32 }}>
              <GIIcon.GiTwoCoins style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="p" align="center" fontWeight="400">
                calls
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </Box>
      <Box
        sx={{
          backgroundColor: "#02354F",
          width: "80%",
          height: 110,
          mx: "auto",
          mb: 4,
          // right: "40px",
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // bottom: "100px",
          // position: "absolute",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "21px",
            fontWeight: "500",
          }}
        >
          1,650
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "11px",
            fontWeight: "500",
          }}
        >
          Total Credits Available
        </Typography>
      </Box>
    </Drawer>
  );
}

export default SideBar;
