import { createSlice } from "@reduxjs/toolkit";



const Omborchi=createSlice({
    name:'malumot',
    initialState:{
        malumot:[],
        zakas:[],
    },
    reducers:{
        DaTa:(state, action)=>{
            state.malumot=action.payload
        },
        shop:(state, action)=>{
                if (state.zakas.length==0) {
                    state.zakas.push(action.payload)
                    console.log(action.payload);
                }else{
                    let tf=true;
                    state.zakas.forEach(m=>{
                            if (m.id==action.payload.id) {
                                tf=false
                              state.zakas=state.zakas.filter(k=>{
                                    return     k.id==m.id ? '':k;
                                })
                            }
                    })
                    if (tf) {
                        state.zakas.push(action.payload)
                    }
                }



            
            
        }
    }
})

export const {DaTa, shop}=Omborchi.actions;
export default Omborchi