import styled from 'styled-components';

export const StyledTitle = styled.h2`
  margin-bottom: 50px;
  text-align: center;

  ${props => props.theme.fonts.heading}

  color: rgba(0, 0, 0, 0.87);
`;
