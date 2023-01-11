import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export default function ContactList({contacts}) {
  return (
    <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
}
