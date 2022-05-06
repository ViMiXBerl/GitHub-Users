import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../api/api";

const initialState = {
	user: [],
	loading: false,
	error: "",
};

export const getAsyncUser = createAsyncThunk(
	"userSearch/getAsyncUser",
	async (userNameValue, { rejectWithValue, dispatch }) => {
		const response = await axios.get(`${API_URL}${userNameValue}`);
		dispatch(setUser(response.data));
	}
);

export const searchFormSlice = createSlice({
	name: "userSearch",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAsyncUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(getAsyncUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(getAsyncUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const selectUser = (state) => state.searchForm.user;
export const selectLoading = (state) => state.searchForm.loading;

export const { setUser } = searchFormSlice.actions;
export default searchFormSlice.reducer;
