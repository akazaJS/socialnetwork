import {TypedUseSelectorHook, useSelector,useDispatch} from "react-redux";
import {RootState,AppDispatch} from "../components/peopleStore/peopleStore";

export const useAppDispatch =()=> useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector