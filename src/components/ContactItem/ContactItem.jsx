import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import PropTypes from 'prop-types';
import { TbTrash, TbUser } from 'react-icons/tb';

import { deleteContacts } from 'redux/Contacts/operation';

import { TableCell, BtnTool } from './ContactItem.styled';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContacts(id));

  return (
    <tr>
      <TableCell>
        <TbUser />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{number}</TableCell>
      <TableCell>
        <BtnTool type="button" onClick={onDelete}>
          <TbTrash />
        </BtnTool>
      </TableCell>
    </tr>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
