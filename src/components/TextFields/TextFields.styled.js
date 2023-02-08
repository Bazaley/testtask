import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const Input = styled(TextField)(({ error }) => ({
  label: {
    fontFamily: 'Nunito',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '26px',
    color: '#7E7E7E',
  },

  '& label.Mui-focused': {
    color: error ? '#CB3D40' : '#7E7E7E',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#D0CFCF',
    },
    '&.Mui-focused fieldset': {
      borderColor: error ? '#CB3D40' : '#D0CFCF',
    },
  },
}));
