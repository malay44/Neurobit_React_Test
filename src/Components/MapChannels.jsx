import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOptions } from "../features/MontagesSlice";
import { Box, Typography } from "@mui/material";
import sampleData from "../data/sample.json";
import Channels from "./Channels";


const MapChannels = () => {
  const dispatch = useDispatch();
  const montage = useSelector((state) => state.montage.selectedOption);
  const [selectedOption, setSelectedOption] = useState({});

  useEffect(() => {
    console.log("montage", montage);
    setSelectedOption(montage);
  }, []);

    useEffect(() => {
        dispatch(setOptions(selectedOption));
        console.log("selectedOption", selectedOption);
    }, [dispatch, selectedOption]);

  const handleChangePrimary = (event) => {
    const channelName = event.target.id;
    const newValue = event.target.value;
    setSelectedOption((prevState) => {
      return {
        ...prevState,
        [channelName]: {
          ...prevState[channelName],
          primary: newValue,
        },
      };
    });
  };

  const handleChangeRefrence = (event) => {
    const channelName = event.target.id;
    const newValue = event.target.value;
    setSelectedOption((prevState) => {
      return {
        ...prevState,
        [channelName]: {
          ...prevState[channelName],
          refrence: newValue,
        },
      };
    });
  };

  //same for backup primary and backup refrence

    const handleChangeBackupPrimary = (event) => {
        const channelName = event.target.id;
        const newValue = event.target.value;
        setSelectedOption((prevState) => {
            return {
                ...prevState,
                [channelName]: {
                    ...prevState[channelName],
                    backupPrimary: newValue,
                },
            };
        });
    };

    const handleChangeBackupRefrence = (event) => {
        const channelName = event.target.id;
        const newValue = event.target.value;
        setSelectedOption((prevState) => {
            return {
                ...prevState,
                [channelName]: {
                    ...prevState[channelName],
                    backupRefrence: newValue,
                },
            };
        });
    };

  return (
    <div>
      <Box
        sx={{
          height: "63px",
          backgroundColor: "#E5F3FF",
          borderRadius: "5px",
          alignItems: "center",
          justifyContent: "space-around",
          display: "grid",
          gridTemplateColumns: "25% 25% 50%",
          my: 2,
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
          Channel
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "#0F0F0F",
            fontSize: "18px",
            fontWeight: "400",
            textTransform: "capitalize",
          }}
        >
          {" "}
          Primary Channel (default select)
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "#0F0F0F",
            fontSize: "18px",
            fontWeight: "400",
            textTransform: "capitalize",
          }}
        >
          Reference Channel (default N/A)
        </Typography>
      </Box>

      {sampleData.channels.map((item) => {
        return (
            <Channels 
            item={item}
            selectedOption={selectedOption}
            handleChangePrimary={handleChangePrimary}
            handleChangeRefrence={handleChangeRefrence}
            handleChangeBackupPrimary={handleChangeBackupPrimary}
            handleChangeBackupRefrence={handleChangeBackupRefrence}
             />
        );
      })}
    </div>
  );
};

export default MapChannels;
