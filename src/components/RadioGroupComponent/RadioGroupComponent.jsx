import RadioGroup from '@mui/material/RadioGroup';
import {
  StyledFormLabel,
  StyledRadio,
  StyledFormControlLabel,
} from './RadioGroupComponent.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPositions } from 'redux/positions/positions-operations';
import { selectPositions } from 'redux/selectors';

const RadioGroupComponent = ({ register }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const positions = useSelector(selectPositions);

  useEffect(() => {
    dispatch(fetchPositions());
  }, [dispatch]);

  return (
    <>
      <StyledFormLabel>Select your position</StyledFormLabel>

      <RadioGroup value={value === '' ? positions[0]?.id || value : value}>
        {positions &&
          positions.map(({ name, id }) => (
            <StyledFormControlLabel
              key={id}
              value={id}
              control={<StyledRadio onChange={() => setValue(id)} />}
              label={name}
              {...register('position_id', { required: 'Required field' })}
            />
          ))}
      </RadioGroup>
    </>
  );
};

export default RadioGroupComponent;
