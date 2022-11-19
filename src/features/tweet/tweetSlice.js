import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tweets: [],
  isLoading: false,
  error: null,
  tweet: []
};

export const getAllTweet = createAsyncThunk(
  'tweet/getAllTweet',
  async (userId) => {
    try {
      const response = await axios.get(
        // `https://jsonplaceholder.typicode.com/posts?/${userId}`
        'https://jsonplaceholder.typicode.com/comments'
      );
      return response?.data;
    } catch (error) {
      return error?.message;
    }
  }
);



export const getTweet = createAsyncThunk(
    'tweet/getTweet',
    async (albumId) => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
        );
        return response?.data;
      } catch (error) {
        return error?.message;
      }
    }
  );


export const TweetsSlice = createSlice({
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

    builder.addCase(getTweet.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getTweet.fulfilled, (state, action) => {
          state.isLoading = false;
        state.tweet = action.payload;
      });
      builder.addCase(getTweet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default TweetsSlice.reducer;