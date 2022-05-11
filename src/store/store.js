import { configureStore } from "@reduxjs/toolkit";
import searchFormReducer from "../components/SearchForm/SearchFormSlice";
import repositoriesListReducer from "../components/RepositoriesList/RepositoriesListSlice";

export const store = configureStore({
	reducer: {
		searchForm: searchFormReducer,
		repositoriesList: repositoriesListReducer,
	},
});
