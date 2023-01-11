import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { CommonWrapper, PhonebookWrapper, ContactsWrapper } from './App.styled';
import { useContacts } from '../Hooks/useContact';

export const App = () => {
  const { filteredContacts, error, isLoading, isSuccess } = useContacts();
  return (
    <CommonWrapper>
      <PhonebookWrapper>
        <h1>Phonebook</h1>
        <ContactForm  contacts={filteredContacts} />
      </PhonebookWrapper>

      <ContactsWrapper>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <p>...Loading</p>}
      {isSuccess && filteredContacts && (
        <ContactList contacts={filteredContacts} />)}
        {error && <p>Sorry, we can't find your contacts :( </p>}
      </ContactsWrapper>
    </CommonWrapper>
  );
};
