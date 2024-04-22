import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";
import { useSelector } from "react-redux";

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectIsLoading = (state) => state.contacts.contacts.loading;
export const selectIsError = (state) => state.contacts.contacts.error;

export const selectFilteredContactsMemo = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase()) ||
        contact.number.includes(filterName)
    );
  }
);