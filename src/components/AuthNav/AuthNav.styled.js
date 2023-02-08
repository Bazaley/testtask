import styled from 'styled-components';
import * as Scroll from 'react-scroll';

export const Nav = styled.nav`
  display: flex;
`;

export const Button = styled(Scroll.Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
  border: none;
  border-radius: 80px;
  background-color: #f4e041;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
