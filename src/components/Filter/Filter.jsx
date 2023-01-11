import { nanoid } from 'nanoid';
import { updateFilter, getContactsFilter } from 'Store/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from './Filter.styled';

export default function Filter() {
  const filterId = nanoid();
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);
  return (
    <>
      <Label htmlFor={filterId}>
        Find contacts by name
      </Label>
      <Input
        type="text"
        name="name"
        id={filterId}
        value={filter}
        onChange={e => dispatch(updateFilter(e.currentTarget.value))}
      />
    </>
  );
}
