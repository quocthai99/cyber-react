import { combineReducers } from "redux";
import BurgerReducer from "./reducer/BaiTapBurgerReducer";
import { QuanLySinhVienReducer } from "./reducer/QuanLySinhVienReducer";

const rootReducer = combineReducers({
    BurgerReducer,
    QuanLySinhVienReducer
})

export default rootReducer