import styled from 'styled-components';

export const List = styled.ul`
  margin: 50px 0;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Item = styled.li`
  height: 254px;
  padding: 20px;

  border-radius: 10px;
  background: #ffffff;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: calc((100% - 16px) / 2);

    &:nth-child(2n + 1) {
      margin-right: 16px;
    }

    &:not(:nth-last-child(-n + 2)) {
      margin-bottom: 16px;
    }
  }
  @media screen and (min-width: 1024px) {
    width: calc((100% - 58px) / 3);

    &:not(:nth-child(3n)) {
      margin-right: 29px;
    }

    &:not(:nth-last-child(-n + 3)) {
      margin-bottom: 29px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Paragraph = styled.p`
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;

export const Box = styled.div`
  padding: 20px 0;
`;

export const Link = styled.a`
  display: block;

  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;
