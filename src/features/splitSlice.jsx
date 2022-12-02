import { createSlice } from '@reduxjs/toolkit'

const initialState = {total: 0, tipAmount: 0}

export const splitSlice = createSlice({
  name: 'split',
  initialState,
  reducers: {
    userUpdate(state, action) {
      const {bill, users, tipAmount} = action.payload
      if(bill === '') return
      if(!tipAmount) {
        state.total = +bill / +users;
        return;
      }
      state.tipAmount = +tipAmount / +users
      state.total = (+bill / +users) + state.tipAmount
    },
    billUpdate(state, action) {
      const {bills, user, tipAmount} = action.payload
      if(user === '') return
      if(!tipAmount) {
        state.total = +bills / +user;
        return;
      }
      state.tipAmount = +tipAmount / +user
      state.total = (+bills / +user) + (+tipAmount / +user)
    },
    tipUpdate(state, action) {
      const {bill, user, tipAmounts} = action.payload
      if(user === '') return
      state.tipAmount = +tipAmounts / +user
      state.total = (+bill / +user) + state.tipAmount
    }
  }
})

// Action creators are generated for each case reducer function
export const { userUpdate, billUpdate, tipUpdate } = splitSlice.actions

export default splitSlice.reducer