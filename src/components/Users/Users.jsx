import Section from 'components/Section/Section';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/users/users-operations';
import {
  selectTotalPages,
  selectIsLoading,
  selectSuccess,
} from 'redux/selectors';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import UsersList from 'components/UsersList/UsersList';
import Title from 'components/Title/Title';
import Button from 'components/Button/Button';

const Users = () => {
  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);
  let success = useSelector(selectSuccess);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page, success]);

  return (
    <Section>
      <Title name="users">Working with GET request</Title>

      <UsersList />

      {totalPages !== page &&
        (isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress sx={{ color: '#00BDD3' }} />
          </Box>
        ) : (
          <Button onClick={() => setPage(state => state + 1)}>Show more</Button>
        ))}
    </Section>
  );
};

export default Users;
