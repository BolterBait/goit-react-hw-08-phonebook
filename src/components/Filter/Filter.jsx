import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/Contacts/slice/filteredSlice';
import { selectFilter } from 'redux/Contacts/selectors';
import { Container, Field } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilter = event => {
    const value = event.target.value.trim();

    dispatch(getFilteredContacts(value));
  };

  return (
    <Container>
      <Field
        type="text"
        placeholder="Find contacts by name"
        name="filter"
        onChange={onFilter}
        value={filter}
      />
    </Container>
  );
};
