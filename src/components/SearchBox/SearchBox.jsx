import css from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  return (
    <label className={css.wrapper}>
      <span className={css.label}>Find contacts by name</span>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type to search…"
      />
    </label>
  );
}
