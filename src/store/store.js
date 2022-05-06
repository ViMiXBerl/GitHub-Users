import { configureStore } from "@reduxjs/toolkit";
import searchFormReducer from "../components/SearchForm/SearchFormSlice";

export const store = configureStore({
	reducer: {
		searchForm: searchFormReducer,
	},
});
