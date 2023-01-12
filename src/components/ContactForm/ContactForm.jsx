import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAddContactMutation } from 'Store/contactsSlice';

import { Form, Input, Button, InputWrapper, Label } from './ContactForm.styled';

export default function ContactForm ({contacts})  {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleFormSubmit = async e => {
    e.preventDefault();
    const contact = { id: nanoid(), name: name, phone: number };
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      toast.error(`${contact.name} already exists`);
      return;
    }

    try {
      await addContact(contact);
      setTimeout(()=>{toast.success('Contact was added!')}, 300)
    } catch (error) {
      toast.error('Something went wrong...');
      console.log(error);
    }

    reset();
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Form onSubmit={handleFormSubmit}>
      <Toaster position="top-center" />
      <InputWrapper>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          id={nameId}
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          id={numberId}
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputWrapper>
      <Button type="submit" disabled={isLoading}>{isLoading ? 'Adding...' : 'Add contact'}</Button>
    </Form>
  );
};
