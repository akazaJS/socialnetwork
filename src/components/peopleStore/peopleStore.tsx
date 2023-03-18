import {configureStore} from "@reduxjs/toolkit";
import usersReducer from './peopleSlices'
import indexReducer from './indexSlice'
import {useAppSelector} from "../../hooks/hooks";



 export const peopleStore = configureStore({

    reducer:{
        counter: usersReducer,
        index: indexReducer,

    },
})


export type RootState = ReturnType<typeof peopleStore.getState>
export type AppDispatch = typeof peopleStore.dispatch


