import { createSlice } from '@reduxjs/toolkit'

const initialState = {total: 0, tipAmount: 0}

export const splitSlice = createSlice({
  name: 'split',
  initialState,
  reducers: {
    userUpdate(state, action) {
      const {bill, users, tipAmount, tipPercent} = action.payload;
      if(bill === '') return;
      if(users === '') return;
      if(tipPercent) {
        state.tipAmount = ((+bill * tipPercent) / 100) / +users;
        state.total = (+bill / +users) + state.tipAmount;
        return;
      }
      if(!tipAmount && !tipPercent) {
        state.total = +bill / +users;
        return;
      }
      state.tipAmount = +tipAmount / +users;
      state.total = (+bill / +users) + state.tipAmount;
    },
    billUpdate(state, action) {
      const {bills, user, tipAmount, tipPercent} = action.payload;
      if(user === '') return;
      if(tipPercent) {
        state.tipAmount = ((+bills * tipPercent) / 100) / +user;
        state.total = (+bills / +user) + state.tipAmount;
        return;
      }
      if(!tipAmount) {              
        state.total = +bills / +user;
        return;
      }
      if(tipAmount) {
        state.tipAmount = ((+bills * tipPercent) / 100) / +user;
        state.total = (+bills / +user) + state.tipAmount;
        return;
      }
      state.tipAmount = +tipAmount / +user;                    // here is error code 
      state.total = (+bills / +user) + state.tipAmount;
    },
    tipUpdate(state, action) {
      const {bill, user, tipAmounts} = action.payload;
      if(user === '') return;
      state.tipAmount = +tipAmounts / +user;
      state.total = (+bill / +user) + state.tipAmount;
    },
    reset(state) {
      state.tipAmount = 0
      state.total = 0
    }
  }
})

// Action creators are generated for each case reducer function
export const { userUpdate, billUpdate, tipUpdate, reset } = splitSlice.actions

export default splitSlice.reducer