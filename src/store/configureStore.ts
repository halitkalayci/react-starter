import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./auth/authSlice";
import {loadingReducer} from "./loading/loadingSlice";

const rootReducer = combineReducers({
	auth: authReducer,
	loading: loadingReducer,
});

export const store = configureStore({reducer: rootReducer});
