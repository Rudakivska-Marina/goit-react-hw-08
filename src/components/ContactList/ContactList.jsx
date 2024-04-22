import { selectFilteredContactsMemo } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

function ContactList({ isOpen }) {
  const filteredContacts = useSelector(selectFilteredContactsMemo);

  return (
    <ul className={css.list}>
      {filteredContacts.map((el) => (
        <Contact isOpen={isOpen} key={el.id} {...el} />
      ))}
    </ul>
  );
}

export default ContactList;