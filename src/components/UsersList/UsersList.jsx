import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import { List, Item, Wrapper, Paragraph, Box, Link } from './UsersList.styled';
import defaultImage from '../../images/defaultImage.svg';

const UsersList = () => {
  const users = useSelector(selectUsers);

  return (
    <List>
      {users &&
        users.map(({ id, photo, name, position, email, phone }) => {
          if (!photo.includes('/users/')) photo = defaultImage;

          return (
            <Item key={id}>
              <Wrapper>
                <img src={photo} alt={name} width="70px" height="70px" />
              </Wrapper>

              <Paragraph title={name}>
                {name.length > 35 ? name.slice(0, 35) + '...' : name}
              </Paragraph>

              <Box>
                <Paragraph>{position}</Paragraph>
                <Link href={`mailto: ${email}`} title={email}>
                  {email.length > 35 ? email.slice(0, 35) + '...' : email}
                </Link>
                <Link href={`tel:${phone}`} title={phone}>
                  {phone}
                </Link>
              </Box>
            </Item>
          );
        })}
    </List>
  );
};

export default UsersList;
