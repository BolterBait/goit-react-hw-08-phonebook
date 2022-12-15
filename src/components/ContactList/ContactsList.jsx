import { Filter } from 'components/Filter/Filter';
import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { motion } from 'framer-motion';

import {
  selectFilteredContacts,
  selectContacts,
} from 'redux/Contacts/selectors';

import { ContactItem } from '../ContactItem/ContactItem';

import { Container, Table, TableHead } from './ContactsList.styled';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);
  return (
    <Container mr={'40px auto'} pd={'20px'} minw={'480px'}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        {contacts.length > 0 && <Filter />}
        <h2>Contacts</h2>
        {!filteredContacts.length ? (
          <p>'Provide some contacts'</p>
        ) : (
          <Table>
            <thead>
              <tr>
                <TableHead></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Number</TableHead>
                <TableHead>Remove</TableHead>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map(({ id, name, number }) => (
                <ContactItem key={id} id={id} name={name} number={number} />
              ))}
            </tbody>
          </Table>
        )}
      </motion.div>
    </Container>
  );
};
