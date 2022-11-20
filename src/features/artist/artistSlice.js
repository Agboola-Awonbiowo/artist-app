import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  artists: [],
  isLoading: false,
  error: null,
};

export const getAllArtist = createAsyncThunk(
  'artist/getAllArtist',
  async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      return response?.data;
    } catch (error) {
      return error?.message;
    }
  }
);

export const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllArtist.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllArtist.fulfilled, (state, action) => {
      state.isLoading = false;
      state.artists = action.payload;
    });
    builder.addCase(getAllArtist.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default artistSlice.reducer;
