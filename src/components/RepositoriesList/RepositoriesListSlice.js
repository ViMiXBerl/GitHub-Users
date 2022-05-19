import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL, API_REPO } from "../../api/api";

const initialState = {
	repos: [],
	loading: false,
	error: null,
};

export const getAsyncRepos = createAsyncThunk(
	"repositoriesList/getAsyncRepos",
	async ({ userNameValue, per_page, page }, { dispatch, rejectWithValue }) => {
		try {
			const response = await axios.get(
				`${API_URL}${userNameValue}${API_REPO}?per_page=${per_page ?? 4}&page=${
					page ?? 1
				}`
			);
			dispatch(setRepos(response.data));
		} catch (error) {
			return rejectWithValue(error.response);
		}
	}
);

export const RepositoriesListSlice = createSlice({
	name: "repositoriesList",
	initialState,
	reducers: {
		setRepos: (state, action) => {
			state.repos = action.payload;
			state.loading = false;
		},
		setPage: (state, action) => {
			state.page = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAsyncRepos.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getAsyncRepos.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const selectRepos = (state) => state.repositoriesList.repos;
export const selectLoading = (state) => state.repositoriesList.loading;
export const selectError = (state) => state.repositoriesList.error;

export const { setRepos } = RepositoriesListSlice.actions;
export default RepositoriesListSlice.reducer;
