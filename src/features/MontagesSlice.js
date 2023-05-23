import { createSlice } from "@reduxjs/toolkit";

export const MontageSlice = createSlice({
  name: "montage",
  initialState: {
    data: {
      edf: null,
    },
    currentStep: 0,
    selectedOption: [
      {
        "channel-1": {
          primary: null,
          backupPrimary: [null],
          refrence: null,
          backupRefrence: [null],
        },
      },
      {
        "channel-2": {
          primary: null,
          backupPrimary: [null],
          refrence: null,
          backupRefrence: [null],
        },
      },
      {
        "channel-3": {
          primary: null,
          backupPrimary: [null],
          refrence: null,
          backupRefrence: [null],
        },
      },
      {
        "channel-4": {
          primary: null,
          backupPrimary: [null],
          refrence: null,
          backupRefrence: [null],
        },
      },
      {
        "channel-5": {
          primary: null,
          backupPrimary: [null],
          refrence: null,
          backupRefrence: [null],
        },
      },
      {
        "channel-6": {
          primary: null,
          backupPrimary: [null],
          refrence: null,
          backupRefrence: [null],
        },
      },
      {
        "channel-7": {
          primary: null,
          backupPrimary: [null],
          refrence: null,
          backupRefrence: [null],
        },
      },
      {
        "channel-8": {
          primary: null,
          backupPrimary: [null],
          refrence: null,
          backupRefrence: [null],
        },
      },
      {
        "channel-9": {
          primary: null,
          backupPrimary: [null],
          refrence: null,
          backupRefrence: [null],
        },
      },
      {
        "channel-10": {
          primary: null,
          backupPrimary: [null],
          refrence: null,
          backupRefrence: [null],
        },
      },
    ],
    spindle: false,
    artifacts: false,
  },
  reducers: {
    edfUploadReq: (state, action) => {
      console.log(action.payload);
      state.data.edf = action.payload;
    },
    incrementCount: (state) => {
      console.log("Called incrementCount");
      if (state.currentStep <= 2) {
        state.currentStep += 1;
      }
    },
    decrementCount: (state) => {
      console.log("Called decrementCount");
      if (state.currentStep > 0) {
        state.currentStep -= 1;
      }
    },
    clearData: (state) => {
      console.log("Called clearData");
      state.data.edf = null;
      state.selectedOption = [
        {
          "channel-1": {
            primary: null,
            backupPrimary: [null],
            refrence: null,
            backupRefrence: [null],
          },
        },
        {
          "channel-2": {
            primary: null,
            backupPrimary: [null],
            refrence: null,
            backupRefrence: [null],
          },
        },
        {
          "channel-3": {
            primary: null,
            backupPrimary: [null],
            refrence: null,
            backupRefrence: [null],
          },
        },
        {
          "channel-4": {
            primary: null,
            backupPrimary: [null],
            refrence: null,
            backupRefrence: [null],
          },
        },
        {
          "channel-5": {
            primary: null,
            backupPrimary: [null],
            refrence: null,
            backupRefrence: [null],
          },
        },
        {
          "channel-6": {
            primary: null,
            backupPrimary: [null],
            refrence: null,
            backupRefrence: [null],
          },
        },
        {
          "channel-7": {
            primary: null,
            backupPrimary: [null],
            refrence: null,
            backupRefrence: [null],
          },
        },
        {
          "channel-8": {
            primary: null,
            backupPrimary: [null],
            refrence: null,
            backupRefrence: [null],
          },
        },
        {
          "channel-9": {
            primary: null,
            backupPrimary: [null],
            refrence: null,
            backupRefrence: [null],
          },
        },
        {
          "channel-10": {
            primary: null,
            backupPrimary: [null],
            refrence: null,
            backupRefrence: [null],
          },
        },
      ];
      state.currentStep = 0;
      state.spindle = false;
      state.artifacts = false;
      localStorage.setItem("persist:root", JSON.stringify(state));
    },
    setOptions: (state, action) => {
      console.log("Called setOptions");
      state.selectedOption = action.payload;
    },
    setSpindle: (state, action) => {
      console.log("Called setSpinle");
      state.spindle = action.payload;
    },
    setArtifacts: (state, action) => {
      console.log("Called setArtifacts");
      state.artifacts = action.payload;
    },
    setChannelPrimary: (state, action) => {
      console.log("Called setChannelPrimary");
      state.selectedOption[action.payload.channel].primary =
        action.payload.value;
    },
    setChannelBackupPrimary: (state, action) => {
      console.log("Called setChannelBackupPrimary");
      state.selectedOption[action.payload.channel].backupPrimary[
        action.payload.backupIndex
      ] = action.payload.value;
    },
    setChannelRefrence: (state, action) => {
      console.log("Called setChannelRefrence");
      state.selectedOption[action.payload.channel].refrence =
        action.payload.value;
    },
    setChannelBackupRefrence: (state, action) => {
      console.log("Called setChannelBackupRefrence");
      state.selectedOption[action.payload.channel].backupRefrence[
        action.payload.backupIndex
      ] = action.payload.value;
    },
    appendPrimaryBackup: (state, action) => {
      console.log("Called appendPrimaryBackup");
      state.selectedOption[action.payload.channel].backupPrimary.push(null);
    },
    appendRefrenceBackup: (state, action) => {
      console.log("Called appendRefrenceBackup");
      state.selectedOption[action.payload.channel].backupRefrence.push(null);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  edfUploadReq,
  incrementCount,
  decrementCount,
  clearData,
  setOptions,
  setSpindle,
  setArtifacts
} = MontageSlice.actions;

export default MontageSlice.reducer;
