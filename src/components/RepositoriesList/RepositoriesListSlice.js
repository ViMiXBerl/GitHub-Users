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
	async (userNameValue, { rejectWithValue, dispatch }) => {
		const response = await axios.get(`${API_URL}${userNameValue}${API_REPO}`);
		dispatch(setRepos(response.data));
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

export const { setRepos } = RepositoriesListSlice.actions;
export default RepositoriesListSlice.reducer;
