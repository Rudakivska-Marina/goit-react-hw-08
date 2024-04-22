import { createAsyncThunk } from "@reduxjs/toolkit";
import { LogIn, clearToken, setToken } from "../../config/API";

export const register = createAsyncThunk(
  "auth/register",
  async (credentionals, thunkAPI) => {
    try {
      const data = await LogIn.post("/users/signup", credentionals);
      setToken(data.data.token);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(alert(error.message));
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentionals, thunkAPI) => {
    try {
      const data = await LogIn.post("/users/login", credentionals);
      setToken(data.data.token);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(alert(error.message));
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (thunkAPI) => {
  try {
    await LogIn.post("/users/logout");

    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(alert(error.message));
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    setToken(savedToken);
    try {
      const data = await LogIn.get("/users/current");
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(alert(error.message));
    }
  }
);