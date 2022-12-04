import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../";

const initialState = {
	logoIsVisible: false,
};

export const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		toggleLogo: state => {
			state.logoIsVisible = !state.logoIsVisible;
		},
	},
});

export const { toggleLogo } = uiSlice.actions;
export const selectLogoIsVisible = (state: RootState) => state.ui.logoIsVisible;
