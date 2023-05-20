import { Box, Button, Collapse, Typography } from "@mui/material";
import { useState } from "react";
import * as RiIConn from "react-icons/ri";
const names = ["Fp1", "Fp2", "F3", "F4", "C3", "C4", "P3", "T3", "T4", "Cz"];

export default function Channels({item, selectedOption, handleChangePrimary, handleChangeRefrence,handleChangeBackupPrimary,handleChangeBackupRefrence}) {
    
    const [showBackupChannels, setShowBackupChannels] = useState(false);

    const handleAddBackupChannels = () => {
        setShowBackupChannels(!showBackupChannels);
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
          value={selectedOption[item]?.primary || "null"}
          onChange={(e) => {
            handleChangePrimary(e);
          }}
        >
          <option value="null">Select Channel 323</option>
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
          value={selectedOption[item]?.refrence || "null"}
          onChange={handleChangeRefrence}
        >
          <option value="null">Select Channel 4</option>
          {names.map((name) => {
            return <option value={name}>{name}</option>;
          })}
        </select>

        <Button
          onClick={handleAddBackupChannels}
          variant="text"
          component="span"
          sx={{ color: "#959595" }}
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
            {" "}
            + Add Backup Channles
          </Typography>
        </Button>
      </Box>

      <Collapse in={showBackupChannels} timeout="auto" unmountOnExit>
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
          <div style={{ color: "#F6F6F6" }}>df</div>
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
            value={selectedOption[item]?.backupPrimary || "null"}
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
            value={selectedOption[item]?.backupRefrence || "null"}
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
      </Collapse>
    </>
  );
}
