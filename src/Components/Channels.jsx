/* eslint-disable no-useless-concat */
import { Box, Button, Collapse, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import * as RiIConn from "react-icons/ri";
const names = ["Fp1", "Fp2", "F3", "F4", "C3", "C4", "P3", "T3", "T4", "Cz"];



export default function Channels({item, selectedOption, handleChangePrimary, handleChangeRefrence,handleChangeBackupPrimary,handleChangeBackupRefrence, handle2ndAddBackupChannels, deleteBackupChannel}) {
    
    const [showBackupChannels, setShowBackupChannels] = useState(false);

    const handleAddBackupChannels = () => {
        setShowBackupChannels(!showBackupChannels);
    };

    const value = selectedOption[item.split("-")[1] - 1]?.[item];

    const BackupChannel = ({index}) => {
      return (
        <Box
          sx={{
            height: "3.2rem",
            mt: 1.8,
            backgroundColor: "#F6F6F6",
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "space-around",
            display: "grid",
            gridTemplateColumns: "22.347480% 22.41379% 24.535809% 27.984084%",
          }}
        >
          <div style={{ color: "#F6F6F6" }}>elo</div>
          <FormControl size="small" sx={{textAlign: "left"}}>
          <Select
            style={{
              borderRadius: "5px",
              width: "70%",
              boxShadow: "none",
              fontSize: "0.8rem",
              fontWeight: "500",
              color: "#0F0F0F",
            }}
            required={true}
            id={item}
            type="string"
            value={value?.backupPrimary[index] || "null"}             
            onChange={(e)=>{handleChangeBackupPrimary(item,index,e)}}
          >
            <MenuItem sx={{fontSize: "0.8rem", color: "#6D6D6D", fontWeight: "500"}} value="null">Select Channel</MenuItem>
            {names.map((name) => {
              return <MenuItem sx={{fontSize: "0.8rem", color: "#6D6D6D", fontWeight: "500"}} value={name}>{name}</MenuItem>;
            })}
          </Select>
          </FormControl>
          <FormControl size="small" sx={{textAlign: "left"}}>
          <Select
            style={{
              borderRadius: "5px",
              width: "70%",
              boxShadow: "none",
              fontSize: "0.8rem",
              fontWeight: "500",
              color: "#0F0F0F",
            }}
            required={true}
            id={item}
            type="string"
            value={value?.backupRefrence[index] || "null"}
            onChange={(e)=>{handleChangeBackupRefrence(item,index,e)}}
          >
            <MenuItem sx={{fontSize: "0.8rem", color: "#6D6D6D", fontWeight: "500"}} value="null">Select Channel</MenuItem>
            {names.map((name) => {
              return <MenuItem sx={{fontSize: "0.8rem", color: "#6D6D6D", fontWeight: "500"}} value={name}>{name}</MenuItem>;
            })}
          </Select>
          </FormControl>

          <Button variant="text" component="span" sx={{ color: "#959595", justifyContent: "start", padding: 0}} 
          onClick={()=>{
            deleteBackupChannel(item,index);
            if(value?.backupPrimary.length===1) handle2ndAddBackupChannels(item);
            }}>
            <RiIConn.RiDeleteBinLine
              style={{ color: "#E03A3A", fontSize: "16px", margin: "10px" }}
            />
            <Typography
              variant="p"
              sx={{
                color: "#E03A3A",
                fontSize: "14px",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              {" "}
              Delete
            </Typography>
          </Button>
        </Box>
      );
    };

    return (
      <Box sx={{boxShadow:"0px 3px 20px 4px rgba(0, 0, 0, 0.04)", borderRadius: 2}}>
        <Box
          sx={{
            height: "4.7rem",
            backgroundColor: "white",
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "space-around",
            display: "grid",
            gridTemplateColumns: "22.347480% 22.41379% 24.535809% 27.984084%",
            mt: 2,
          }}
        >
          <Typography
            variant="p"
            sx={{
              margin:" 0 0 0 13%",
              color: "#0F0F0F",
              fontSize: "0.9rem",
              fontWeight: "500",
              textTransform: "capitalize",
              textAlign: "left",
            }}
          >
            {item}
          </Typography>

          <FormControl size="small" sx={{textAlign: "left"}}>
          <Select
            style={{
              borderRadius: "5px",
              width: "70%",
              boxShadow: "none",
              fontSize: "0.8rem",
              fontWeight: "500",
              color: "#0F0F0F",
            }}
            required={true}
            id={item}
            type="string"
            value={value?.primary || "null"}
            onChange={(e)=>{handleChangePrimary(e,item)}}
          >
            <MenuItem sx={{fontSize: "0.8rem", color: "#6D6D6D", fontWeight: "500"}} value="null">Select Channel</MenuItem>
            {names.map((name) => {
              return <MenuItem sx={{fontSize: "0.8rem", color: "#6D6D6D", fontWeight: "500"}} value={name}>{name}</MenuItem>;
            })}
          </Select>
          </FormControl>
          <FormControl size="small" sx={{textAlign: "left"}}>
          <Select
            style={{
              borderRadius: "5px",
              width: "70%",
              boxShadow: "none",
              fontSize: "0.8rem",
              fontWeight: "500",
              color: "#0F0F0F",
            }}
            required={true}
            id={item}
            type="string"
            value={value?.refrence || "null"}
            onChange={(e)=>{handleChangeRefrence(e,item)}}
          >
            <MenuItem sx={{fontSize: "0.8rem", color: "#6D6D6D", fontWeight: "500"}} value="null">Select Channel</MenuItem>
            {names.map((name) => {
              return <MenuItem sx={{fontSize: "0.8rem", color: "#6D6D6D", fontWeight: "500"}} value={name}>{name}</MenuItem>;
            })}
          </Select>
          </FormControl>
          <Button
            onClick={handleAddBackupChannels}
            variant={
              showBackupChannels
                ? "text"
                : value?.backupPrimary[0]!==null || value?.backupRefrence[0]!==null
                ? "text"
                : "outlined"
            }
            component="span"
            sx={{
              color: "#2F7EC7",
              justifyContent: "start",
              height: "60%",
              minWidth: 0,
              width: "max-content",
              borderRadius: "7px",
            }}
          >
            <Typography
              variant="p"
              sx={{
                color: "#2F7EC7",
                fontSize: "0.8rem",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              {showBackupChannels
                ? ("Hide backup channels" + " (" + value?.backupPrimary.length + ")")
                : value?.backupPrimary[0]!==null || value?.backupRefrence[0]!==null
                ? ("View backup channels" + " (" + value?.backupPrimary.length + ")")
                : "+ Add Backup Channles"}
            </Typography>
          </Button>
        </Box>

        <Collapse in={showBackupChannels} timeout="auto" unmountOnExit>
          {value?.backupPrimary.map((value, index) => (
            <BackupChannel key={index + item + value} index={index} />
          ))}

          {/* 2nd add Backup Channles */}
          <Box
            sx={{
              height: "1rem",
              backgroundColor: "#F6F6F6",
              my: 2,
              borderRadius: "5px",
              alignItems: "center",
              justifyContent: "space-around",
              display: "grid",
              gridTemplateColumns: "22.347480% 22.41379% 24.535809% 27.984084%",
            }}
          >
            <div style={{ color: "#F6F6F6" }}>elo</div>
            <Button
              id={item}
              variant="text"
              component="span"
              sx={{
                color: "#959595",
                width: "65%",
                padding: 0,
                height: "30px",
                borderRadius: "7px",
              }}
              onClick={()=>{handle2ndAddBackupChannels(item)}}
            >
              <Typography
                variant="p"
                sx={{
                  color: "#2CA9E3",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                + Add Backup Channles
              </Typography>
            </Button>
            <div style={{ color: "#F6F6F6" }}>elo</div>
            <div style={{ color: "#F6F6F6" }}>elo</div>
          </Box>
        </Collapse>
      </Box>
    );
}
