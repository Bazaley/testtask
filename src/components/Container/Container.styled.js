import styled from 'styled-components';

export const ContainerStyled = styled.div`
  max-width: 328px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 904px;
    padding: 0 60px;
  }
  @media screen and (min-width: 2056px) {
    max-width: 1170px;
    padding: 0;
  }
`;
