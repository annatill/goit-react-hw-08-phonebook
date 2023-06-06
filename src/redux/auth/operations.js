import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  showErrorToast,
  showSuccessToast,
} from '../../functionError/showErrorToast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      // if (response.status === 201) {
      //   showSuccessToast('User created.');
      // }
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          showErrorToast('User creation error.');
        } else if (status === 500) {
          showErrorToast('Server error');
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      // if (response.status === 201) {
      //   showSuccessToast('User is logged in.');
      // }
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          showErrorToast('User login error.');
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    if (thunkAPI.getState().auth.token) {
      showSuccessToast('User is logged out.');
    }
    clearAuthHeader();
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      if (status === 400) {
        showErrorToast('Missing header with authorization token.');
      } else if (status === 500) {
        showErrorToast('Server error');
      }
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      // if (response.status === 200) {
      //   showSuccessToast('Information found.');
      // }
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 401) {
          showErrorToast('Not authorized');
        }
      }
      return thunkAPI.rejectWithValue(showErrorToast(error.message));
    }
  }
);
