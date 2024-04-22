import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  name: yup.string().trim().min(2, "Too Short!").max(20, "Too Long!"),
  number: yup.string().trim().min(2, "Too Short!").max(20, "Too Long!"),
});

function NewModal({ isOpen, onClose, contact }) {
  const values = {
    name: contact.name,
    number: contact.number,
  };

  const dispatch = useDispatch();

  function submit(data, actions) {
    if (data.name === "" && data.number === "") {
      onClose();
    } else {
      dispatch(editContact({ data, id: contact.id }));
      actions.resetForm();
      onClose();
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      className={css.modal}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      overlayClassName={css.overlay}
      preventScroll={true}
    >
      <div className={css.box}>
        <Formik
          initialValues={values}
          onSubmit={submit}
          validationSchema={SignupSchema}
        >
          <Form className={css.form}>
            <div className={css.inputBlock}>
              <label htmlFor="name" className={css.label}>
                name
              </label>
              <Field
                className={css.input}
                id="name"
                name="name"
                placeholder="Please enter a name"
              />
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </div>

            <div className={css.inputBlock}>
              <label htmlFor="number" className={css.label}>
                number
              </label>
              <Field
                className={css.input}
                id="number"
                name="number"
                placeholder="Please enter a phone number"
                type="text"
              />
              <ErrorMessage
                className={css.error}
                name="number"
                component="span"
              />
            </div>

            <button type="submit" className={css.btn}>
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
}

export default NewModal;