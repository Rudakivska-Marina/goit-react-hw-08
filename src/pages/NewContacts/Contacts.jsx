import { useState, useEffect } from "react";
import "./App.css";

import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { Loader } from "../../components/Loader/Loader";

function NewContacts() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="main">
      <div className="forms">
        <h1 className="phonebook">Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && <Loader className="loader" />}
      <ContactList />
    </div>
  );
}

export default NewContacts;