import { useDeleteContactMutation } from 'Store/contactsSlice';
import { Item, Phone, Button } from './ContactItem.styled';

export default function ContactItem({ contact }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { id, name, phone } = contact;

  return (
    <Item key={id}>
      <Phone>
        {name}: {phone}
      </Phone>
      <Button
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </Button>
    </Item>
  );
}