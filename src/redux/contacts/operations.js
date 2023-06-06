import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  showErrorToast,
  showSuccessToast,
} from '../../functionError/showErrorToast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // if (response.status === 200) {
      //   showSuccessToast('Contacts found.');
      // }
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 401) {
          showErrorToast('Missing header with authorization token.');
        } else if (status === 404) {
          showErrorToast('There is no such user collection.');
        } else if (status === 500) {
          showErrorToast('Server error');
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      if (response.status === 201) {
        showSuccessToast('The contact was successfully created.');
      }
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          showErrorToast('Error creating contact');
        } else if (status === 401) {
          showErrorToast('Missing header with authorization token.');
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      if (response.status === 200) {
        showSuccessToast('The contact was successfully deleted.');
      }
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 401) {
          showErrorToast('Missing header with authorization token.');
        } else if (status === 404) {
          showErrorToast('There is no such user collection.');
        } else if (status === 500) {
          showErrorToast('Server error');
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, contact }, thunkAPI) => {
    console.log(id, contact);
    try {
      const response = await axios.patch(`/contacts/${id}`, contact);
      if (response.status === 200) {
        showSuccessToast('The contact was successfully updated.');
      }
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          showErrorToast('Error updating contact');
        } else if (status === 400) {
          showErrorToast('Contact update failed.');
        } else if (status === 401) {
          showErrorToast('Missing header with authorization token.');
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
