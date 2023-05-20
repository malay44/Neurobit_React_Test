import { createSlice } from '@reduxjs/toolkit'

export const MontageSlice = createSlice({

  name: 'montage',
  initialState: {
    data: {
      edf: null,
    },
    currentStep: 0,
    selectedOption:[
      {"channel-1": {primary: null, backupPrimary: [], refrence: null, backupRefrence: [], }},
      {"channel-2": {primary: null, backupPrimary: [],  refrence: null, backupRefrence: [],}},
      {"channel-3": {primary: null, backupPrimary: [],  refrence: null, backupRefrence: [],}},
      {"channel-4": {primary: null, backupPrimary: [], refrence: null, backupRefrence: [], }},
      {"channel-5": {primary: null, backupPrimary: [], refrence: null, backupRefrence: [], }},
      {"channel-6": {primary: null, backupPrimary: [],  refrence: null, backupRefrence: [],}},
      {"channel-7": {primary: null, backupPrimary: [],  refrence: null, backupRefrence: [],}},
      {"channel-8": {primary: null, backupPrimary: [],  refrence: null, backupRefrence: [],}},
      {"channel-9": {primary: null, backupPrimary: [],  refrence: null, backupRefrence: [],}},
      {"channel-10": {primary: null, backupPrimary: [],  refrence: null, backupRefrence: [],}},
    ],
    loading: false,
    error: null,
  },
  reducers: {
    edfUploadReq: (state, action) => {
      console.log(action.payload)
      state.data.edf = action.payload
    },
    incrementCount: (state) => {
      console.log("Called incrementCount");
      if (state.currentStep <= 2) {
        state.currentStep += 1;
      }
    },
    decrementCount: (state) => {
      console.log("Called decrementCount");
      if(state.currentStep > 0){
      state.currentStep -= 1;}
    },
    clearData: (state) => {
      console.log("Called clearData");
      state.data.edf = null
      state.selectedOption = []
      localStorage.clear()
      state.currentStep = 0;
    },
    setOptions: (state, action) => {
      console.log("Called setOptions");
      state.selectedOption = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { edfUploadReq, incrementCount, decrementCount, clearData,setOptions } = MontageSlice.actions

export default MontageSlice.reducer