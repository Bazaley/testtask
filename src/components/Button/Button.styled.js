import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width || '120px'};
  height: 34px;
  margin: ${props => props.margin || '0 auto'};
  border: none;
  border-radius: 80px;

  background-color: ${props => props.background || props.theme.colors.primary};

  color: ${props => props.color || ' rgba(0, 0, 0, 0.87)'};
  cursor: pointer;
`;
