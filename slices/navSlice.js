import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
    travelCharge: null,
    bookedCab: false,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrgin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
        setTravelCharge: (state, action) => {
            state.travelCharge = action.payload;
        },
        setBookedTaxi: (state, action) => {
            state.bookedCab = action.payload;
        }
    }
});


export const { setOrgin, setDestination, setTravelTimeInformation, setTravelCharge, setBookedTaxi } = navSlice.actions


export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectTravelCharge = (state) => state.nav.travelCharge;
export const selectBookedCab = (state) => state.nav.bookedCab;

export default navSlice.reducer;