import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tweets: [],
  isLoading: false,
  error: null,
};

export const getAllTweet = createAsyncThunk(
  'tweet/getAllTweet',
  async (userId) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${userId}/comments`
      );
      return response?.data;
    } catch (error) {
      return error?.message;
    }
  }
);

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTweet.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllTweet.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tweets = action.payload;
    });
    builder.addCase(getAllTweet.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default tweetSlice.reducer;
