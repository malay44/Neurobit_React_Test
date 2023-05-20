import { Box, Button, Collapse, Typography } from "@mui/material";
import { useState } from "react";
import * as RiIConn from "react-icons/ri";
const names = ["Fp1", "Fp2", "F3", "F4", "C3", "C4", "P3", "T3", "T4", "Cz"];



export default function Channels({item, selectedOption, handleChangePrimary, handleChangeRefrence,handleChangeBackupPrimary,handleChangeBackupRefrence, handle2ndAddBackupChannels}) {
    
    const [showBackupChannels, setShowBackupChannels] = useState(false);

    const handleAddBackupChannels = () => {
        setShowBackupChannels(!showBackupChannels);
    };

    const BackupChannel = ({BackupID}) => {
      return (
        <Box
          sx={{
            height: "100px",
            backgroundColor: "#F6F6F6",
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "center",
            display: "grid",
            gridTemplateColumns: "25% 25% 25% 25%",
          }}
        >
          <div style={{ color: "#F6F6F6" }}>elo</div>
          <select
            style={{
              padding: "12px",
              borderRadius: "5px",
              border: "1px solid #E5E5E5",
              width: "70%",
              fontSize: "16px",
              fontWeight: "400",
              color: "#959595",
            }}
            required={true}
            id={item}
            className="md:mx-0 mx-5 border-2 p-2 rounded-md mt-8"
            type="string"
            value={selectedOption[item.split("-")[1] ][item]?.backupPrimary || "null"}
            onChange={handleChangeBackupPrimary}
          >
            <option value="null">Select Channel</option>
            {names.map((name) => {
              return <option value={name}>{name}</option>;
            })}
          </select>

          <select
            style={{
              padding: "12px",
              borderRadius: "5px",
              border: "1px solid #E5E5E5",
              width: "70%",
              fontSize: "16px",
              fontWeight: "400",
              color: "#959595",
            }}
            required={true}
            id={item}
            type="string"
            value={selectedOption[item.split("-")[1] - 1][item]?.backupRefrence || "null"}
            onChange={handleChangeBackupRefrence}
          >
            <option value="null">Select Channel</option>
            {names.map((name) => {
              return <option value={name}>{name}</option>;
            })}
          </select>

          <Button variant="text" component="span" sx={{ color: "#959595" }}>
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
      <>
        <Box
          sx={{
            height: "100px",
            backgroundColor: "white",
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "space-around",
            display: "grid",
            gridTemplateColumns: "25% 25% 25% 25%",
            mt: 2,
          }}
        >
          <Typography
            variant="p"
            sx={{
              color: "#0F0F0F",
              fontSize: "18px",
              fontWeight: "400",
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            {item}
          </Typography>

          <select
            style={{
              padding: "12px",
              borderRadius: "5px",
              border: "1px solid #E5E5E5",
              width: "70%",
              fontSize: "16px",
              fontWeight: "400",
              color: "#959595",
            }}
            required={true}
            id={item}
            className="md:mx-0 mx-5 border-2 p-2 rounded-md mt-8"
            type="string"
            value={selectedOption[item.split("-")[1] - 1][item]?.primary || "null"}
            onChange={(e) => {
              handleChangePrimary(e);
            }}
          >
            <option value="null">Select Channel</option>
            {names.map((name) => {
              return <option value={name}>{name}</option>;
            })}
          </select>

          <select
            style={{
              padding: "12px",
              borderRadius: "5px",
              border: "1px solid #E5E5E5",
              width: "70%",
              fontSize: "16px",
              fontWeight: "400",
              color: "#959595",
            }}
            required={true}
            id={item}
            type="string"
            value={selectedOption[item.split("-")[1] - 1][item]?.refrence || "null"}
            onChange={handleChangeRefrence}
          >
            <option value="null">Select Channel</option>
            {names.map((name) => {
              return <option value={name}>{name}</option>;
            })}
          </select>

          <Button
            onClick={handleAddBackupChannels}
            variant={
              showBackupChannels
                ? "text"
                : selectedOption[item.split("-")[1] - 1][item]?.backupPrimary ||
                  selectedOption[item.split("-")[1] - 1][item]?.backupRefrence
                ? "text"
                : "outlined"
            }
            component="span"
            sx={{
              color: "#2F7EC7",
              width: "70%",
              height: "60px",
              borderRadius: "7px",
            }}
          >
            <Typography
              variant="p"
              sx={{
                color: "#2F7EC7",
                fontSize: "14px",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              {showBackupChannels
                ? "Hide backup channels"
                : selectedOption[item.split("-")[1] - 1][item]?.backupPrimary ||
                  selectedOption[item.split("-")[1] - 1][item]?.backupRefrence
                ? "View backup channels"
                : "+ Add Backup Channles"}
            </Typography>
          </Button>
        </Box>

        <Collapse in={showBackupChannels} timeout="auto" unmountOnExit>
            <BackupChannel BackupID={0}/>
          {(selectedOption[item.split("-")[1] - 1][item]?.backupPrimary || [] ).map((item, index) => {
            return <BackupChannel BackupID={index+1} />;
          })}
          <Box
            sx={{
              height: "10px",
              backgroundColor: "#F6F6F6",
              paddingBottom: "30px",
              borderRadius: "5px",
              alignItems: "center",
              justifyContent: "center",
              display: "grid",
              gridTemplateColumns: "25% 25% 25% 25%",
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
              onClick={handle2ndAddBackupChannels}
            >
              <Typography
                variant="p"
                sx={{
                  color: "#2CA9E3",
                  fontSize: "14px",
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
      </>
    );
}
