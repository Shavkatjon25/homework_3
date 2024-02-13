import { configureStore } from "@reduxjs/toolkit";
import Omborchi from "./bir";



const Ombor=configureStore({
    reducer: Omborchi.reducer
})

export default Ombor