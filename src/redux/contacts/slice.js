import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit";
import {
  fetchContacts,
  deleteContact,
  addContact,
  editContact,
} from "./operations";
import toast, { Toaster } from "react-hot-toast";
import { logout } from "../auth/operations";

const initialContacts = {
  contacts: { items: [], loading: false, error: null, edit: false },
};

export const slice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  extraReducers: (builder) => {
    builder
      .addCase(logout.pending, (state) => {
        state.contacts.items = [];
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.loading = false;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.loading = true;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.error = payload;
      })

      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== payload
        );
        state.contacts.loading = false;
        toast.success("Contact successfully deleted!");
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.loading = true;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.error = payload;
      })

      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
        state.contacts.loading = false;
        toast.success("Contact successfully created!");
      })
      .addCase(addContact.pending, (state) => {
        state.contacts.loading = true;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.error = payload;
      })

      .addCase(editContact.fulfilled, (state, { payload }) => {
        const editer = state.contacts.items.find(
          (contact) => contact.id === payload.id
        );
        editer.name = payload.name;
        editer.number = payload.number;
        state.contacts.edit = false;
        state.contacts.loading = false;
        toast.success("Contact successfully edited!");
      })
      .addCase(editContact.pending, (state) => {
        state.contacts.loading = true;
        state.contacts.edit = true;
      })
      .addCase(editContact.rejected, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.error = payload;
      });
  },
});

export const contactsReducer = slice.reducer;