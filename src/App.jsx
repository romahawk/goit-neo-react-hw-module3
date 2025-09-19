import { useEffect, useMemo, useState } from 'react';
import styles from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactList from './components/ContactList/ContactList.jsx';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const LS_KEY = 'contacts';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem(LS_KEY);
    return saved ? JSON.parse(saved) : initialContacts;
  });

  const [query, setQuery] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter((c) => c.name.toLowerCase().includes(q));
  }, [contacts, query]);

  const addContact = (contact) => {
    const exists = contacts.some(
      (c) => c.name.trim().toLowerCase() === contact.name.trim().toLowerCase(),
    );
    if (exists) {
      alert(`${contact.name} is already in contacts`);
      return false;
    }
    setContacts((prev) => [contact, ...prev]);
    return true;
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>

      <div className={styles.section}>
        <ContactForm onAdd={addContact} />
      </div>

      <div className={styles.section}>
        <SearchBox value={query} onChange={setQuery} />
      </div>

      <div className={styles.section}>
        <ContactList items={filtered} onDelete={deleteContact} />
      </div>
    </div>
  );
}
