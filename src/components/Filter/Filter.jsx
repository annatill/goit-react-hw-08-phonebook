import { FilterContainer, Label } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilterHandler = event => {
    const newFilter = event.currentTarget.value.toLowerCase().trim();
    dispatch(changeFilter(newFilter));
  };

  return (
    <FilterContainer>
      <Label>
        Find contacts by name <br />
        <input
          type="text"
          value={filter}
          onChange={changeFilterHandler}
        ></input>
      </Label>
    </FilterContainer>
  );
};
