import css from './Contact.module.css';

export default function Contact({ contact, onDelete }) {
  const { id, name, number } = contact;

  return (
    <div className={css.row}>
      <div className={css.info}>
        <div className={css.name}>
          <span className={css.iconUser} aria-hidden />
          {name}
        </div>
        <div className={css.number}>
          <span className={css.iconPhone} aria-hidden />
          {number}
        </div>
      </div>

      <button className={css.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
