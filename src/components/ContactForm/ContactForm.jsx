import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const schema = Yup.object({
  name: Yup.string().trim().min(3, 'Min 3 symbols').max(50, 'Max 50').required('Required'),
  number: Yup.string().trim().min(3, 'Min 3 symbols').max(50, 'Max 50').required('Required'),
});

export default function ContactForm({ onAdd }) {
  const initialValues = { name: '', number: '' };

  const handleSubmit = (values, actions) => {
    const ok = onAdd({ id: nanoid(), name: values.name.trim(), number: values.number.trim() });
    if (ok) actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field className={css.input} name="name" placeholder="Rosie Simpson" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>

        <label className={css.label}>
          <span>Number</span>
          <Field className={css.input} name="number" placeholder="459-12-56" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
