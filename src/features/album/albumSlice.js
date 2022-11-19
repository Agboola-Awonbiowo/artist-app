import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  albums: [],
  isLoading: false,
  error: null,
  album: [],
};

export const listAlbum = createAsyncThunk('album/listAlbum', async (userId) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}/albums`
    );
    return response?.data;
  } catch (error) {
    return error?.message;
  }
});

export const getAlbum = createAsyncThunk('album/getAlbum', async (albumId) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    );
    return response?.data;
  } catch (error) {
    return error?.message;
  }
});

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listAlbum.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(listAlbum.fulfilled, (state, action) => {
      state.albums = action.payload;
    });
    builder.addCase(listAlbum.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(getAlbum.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAlbum.fulfilled, (state, action) => {
      state.isLoading = false;
      state.album = action.payload;
    });
    builder.addCase(getAlbum.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default albumSlice.reducer;
