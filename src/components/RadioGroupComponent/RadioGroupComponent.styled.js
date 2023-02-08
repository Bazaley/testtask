import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';

export const StyledFormLabel = styled(FormLabel)(() => ({
  display: 'block',
  marginTop: '25px',
  fontFamily: 'Nunito',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '26px',
  color: 'rgba(0, 0, 0, 0.87)',
}));

export const StyledRadio = styled(Radio)(() => ({
  color: '#D0CFCF',
  '&.Mui-checked': {
    color: '#00BDD3',
  },
}));

export const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  '&.MuiFormControlLabel-root': {
    '.MuiFormControlLabel-label': {
      fontFamily: 'Nunito',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '26px',
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
}));
