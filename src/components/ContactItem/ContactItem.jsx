import toast, { Toaster } from 'react-hot-toast';
import { useDeleteContactMutation } from 'Store/contactsSlice';
import { Item, Phone, Button } from './ContactItem.styled';

export default function ContactItem({ contact }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { id, name, phone } = contact;

  return (
    <Item key={id}>
      <Toaster position="top-center" />
      <Phone>
        {name}: {phone}
      </Phone>
      <Button
        type="button"
        disabled={isLoading}
        onClick={() => {deleteContact(id); toast.success("Contact was deleted");}}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </Button>
    </Item>
  );
}