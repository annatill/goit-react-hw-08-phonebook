import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contacts => contacts.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, handleRejected);
  },

  // extraReducers: {
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.isLoading = false;
  //     state.error = null;
  //   },
  //   [fetchContacts.rejected]: handleRejected,
  //   [addContact.pending]: handlePending,
  //   [addContact.fulfilled]: (state, action) => {
  //     state.items = [...state.items, action.payload];
  //     state.isLoading = false;
  //     state.error = null;
  //   },
  //   [addContact.rejected]: handleRejected,
  //   [deleteContact.pending]: handlePending,
  //   [deleteContact.fulfilled]: (state, action) => {
  //     const index = state.items.findIndex(
  //       contacts => contacts.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //     state.isLoading = false;
  //     state.error = null;
  //   },
  //   [deleteContact.rejected]: handleRejected,
  // },
});

export const contactsReducer = contactsSlice.reducer;
