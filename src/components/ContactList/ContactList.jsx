import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

export default function ContactList({ items, onDelete }) {
  if (!items.length) return <p className={css.empty}>No contacts</p>;

  return (
    <ul className={css.list}>
      {items.map((c) => (
        <li key={c.id} className={css.item}>
          <Contact contact={c} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
