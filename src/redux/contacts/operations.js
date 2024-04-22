import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LogIn, setToken } from "../../config/API";
import { useDispatch, useSelector } from "react-redux";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await LogIn.get("contacts");

      return data.data;
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(alert(error.message));
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const data = await LogIn.delete(`contacts/${id}`);
      return data.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(alert(error.message));
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const data = await LogIn.post("contacts", contact);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(alert(error.message));
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ id, ...contact }, thunkAPI) => {
    try {
      const data = await LogIn.patch(`contacts/${id}`, contact.data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);