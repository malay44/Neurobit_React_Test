import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOptions, setSpindle, setArtifacts } from "../features/MontagesSlice";
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import sampleData from "../data/sample.json";
import Channels from "./Channels";

const MapChannels = () => {
  const dispatch = useDispatch();
  const montage = useSelector((state) => state.montage.selectedOption);
  const spindle = useSelector((state) => state.montage.spindle);
  const artifacts = useSelector((state) => state.montage.artifacts);
  const [selectedOption, setSelectedOption] = useState(montage);
  const [spindleChecked, setSpindleChecked] = useState(spindle);
  const [artifactChecked, setArtifactChecked] = useState(artifacts);
  
  useEffect(() => {
    dispatch(setOptions(selectedOption));
    // console.log("selectedOption", selectedOption);
  }, [dispatch, selectedOption]);

  useEffect(() => {
    dispatch(setSpindle(spindleChecked));
    console.log("spindleChecked", spindleChecked);
  }, [dispatch, spindleChecked]);

  useEffect(() => {
    dispatch(setArtifacts(artifactChecked));
    console.log("artifactChecked", artifactChecked);
  }, [dispatch, artifactChecked]);

  // console.log("----------------------------------------------------");
  // console.log("selectedOption", selectedOption);
  // console.log("----------------------------------------------------");
  // console.log("montage", montage);

  const handleChangePrimary = (event, item) => {
    const channelName = item;
    const channelIndex = channelName.split("-")[1] - 1;
    const newValue = event.target.value;
    setSelectedOption((prevState) => {
      return {
        ...prevState,
        [channelIndex]: {
          ...prevState[channelIndex],
          [channelName]: {
            ...prevState[channelIndex]?.[channelName],
            primary: newValue,
          },
        },
      };
    });
  };

  //similarly for refrence

  const handleChangeRefrence = (event, item) => {
    const channelName = item;
    const channelIndex = channelName.split("-")[1] - 1;
    const newValue = event.target.value;
    setSelectedOption((prevState) => {
      return {
        ...prevState,
        [channelIndex]: {
          ...prevState[channelIndex],
          [channelName]: {
            ...prevState[channelIndex]?.[channelName],
            refrence: newValue,
          },
        },
      };
    });
  };

  // const handle2ndAddBackupChannels = (event) => {
  //   const channelName = event.target.id;
  //   console.log("channelName", channelName);
  //   setSelectedOption((prevState) => {
  //     const newState = { ...prevState };
  //     console.log("newState", newState);
  //     // newState[channelName].backupPrimary.push(null);
  //     return newState;
  //   });
  // };

  //same for backup primary and backup refrence

  const handleChangeBackupPrimary = (item, index, event) => {
    const channelName = item;
    const channelIndex = channelName.split("-")[1] - 1;
    const newValue = event.target.value;
    setSelectedOption((prevState) => {
      return {
        ...prevState,
        [channelIndex]: {
          ...prevState[channelIndex],
          [channelName]: {
            ...prevState[channelIndex]?.[channelName],
            backupPrimary: [
              //replace value at index 'index' with newvalue
              ...prevState[channelIndex]?.[channelName]?.backupPrimary?.slice(
                0,
                index
              ),
              newValue,
              ...prevState[channelIndex]?.[channelName]?.backupPrimary?.slice(
                index + 1
              ),
            ],
          },
        },
      };
    });
  };

  // similar for backup refrence

  const handleChangeBackupRefrence = (item, index, event) => {
    const channelName = item;
    const channelIndex = channelName.split("-")[1] - 1;
    const newValue = event.target.value;
    setSelectedOption((prevState) => {
      return {
        ...prevState,
        [channelIndex]: {
          ...prevState[channelIndex],
          [channelName]: {
            ...prevState[channelIndex]?.[channelName],
            backupRefrence: [
              //replace value at index 'index' with newvalue
              ...prevState[channelIndex]?.[channelName]?.backupRefrence?.slice(
                0,
                index
              ),
              newValue,
              ...prevState[channelIndex]?.[channelName]?.backupRefrence?.slice(
                index + 1
              ),
            ],
          },
        },
      };
    });
  };

  const handle2ndAddBackupChannels = (item) => {
    const channelName = item;
    const channelIndex = channelName.split("-")[1] - 1;
    setSelectedOption((prevState) => {
      return {
        ...prevState,
        [channelIndex]: {
          ...prevState[channelIndex],
          [channelName]: {
            ...prevState[channelIndex]?.[channelName],
            //append "." at end of backupPrimary array and BackupRefrence array
            backupPrimary: [
              ...prevState[channelIndex]?.[channelName]?.backupPrimary,
              null,
            ],
            backupRefrence: [
              ...prevState[channelIndex]?.[channelName]?.backupRefrence,
              null,
            ],
          },
        },
      };
    });
  };

  const deleteBackupChannel = (item, index) => {
    const channelName = item;
    const channelIndex = channelName.split("-")[1] - 1;
    setSelectedOption((prevState) => {
      return {
        ...prevState,
        [channelIndex]: {
          ...prevState[channelIndex],
          [channelName]: {
            ...prevState[channelIndex]?.[channelName],
            backupPrimary: [
              ...prevState[channelIndex]?.[channelName]?.backupPrimary?.slice(0,index),
              ...prevState[channelIndex]?.[channelName]?.backupPrimary?.slice(index + 1),
            ],
            backupRefrence: [
              ...prevState[channelIndex]?.[channelName]?.backupRefrence?.slice(0,index),
              ...prevState[channelIndex]?.[channelName]?.backupRefrence?.slice(index + 1),
            ],
          },
        },
      };
    });
  };

  const customTypography = {
    margin: " 0 0 0 13%",
    color: "#0F0F0F",
    fontSize: "0.9rem",
    fontWeight: "500",
    textTransform: "capitalize",
    textAlign: "left",
  };

  return (
    <div>
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
        <Typography variant="p" sx={customTypography}>
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
      {sampleData.channels.map((item, index) => {
        return (
          <Channels
            key={item.toString()}
            item={item}
            selectedOption={selectedOption}
            handleChangePrimary={handleChangePrimary}
            handleChangeRefrence={handleChangeRefrence}
            handleChangeBackupPrimary={handleChangeBackupPrimary}
            handleChangeBackupRefrence={handleChangeBackupRefrence}
            handle2ndAddBackupChannels={handle2ndAddBackupChannels}
            deleteBackupChannel={deleteBackupChannel}
          />
        );
      })}

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
            gridTemplateColumns:
              "22.347480% 76%",
            mt: 2,
          }}
        >
          <Typography
            variant="p"
            sx={{
              margin: " 0 0 0 13%",
              color: "#0F0F0F",
              fontSize: "0.9rem",
              fontWeight: "500",
              textTransform: "capitalize",
              textAlign: "left",
            }}
          >
            Additional settings
          </Typography>
          <FormGroup sx={{flexDirection: "row"}}>
  <FormControlLabel
    sx={{".MuiFormControlLabel-label":{fontSize: "0.9rem", textTransform: "capitalize"}}}
    control={<Checkbox checked={spindleChecked}/>}
    onChange={() => {setSpindleChecked(!spindleChecked)}}
    label="Spindle"
  />
  <FormControlLabel
    sx={{".MuiFormControlLabel-label":{fontSize: "0.9rem", textTransform: "capitalize"}}}
    control={<Checkbox checked={artifactChecked}/>}
    onChange={() => {setArtifactChecked(!artifactChecked)}}
    label="Artifacts"
  />
</FormGroup>

        </Box>
      </Box>
    </div>
  );
};

export default MapChannels;
