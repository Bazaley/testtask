import styled from 'styled-components';
import mobile from '../../images/hero/mobile.jpg';
import mobileX2 from '../../images/hero/mobile@2x.jpg';
import tablet from '../../images/hero/tablet.jpg';
import tabletX2 from '../../images/hero/tablet@2x.jpg';
import desktop from '../../images/hero/desktop.jpg';
import desktopX2 from '../../images/hero/desktop@2x.jpg';
import bigDesktop from '../../images/hero/bigDesktop.jpg';
import bigDesktopX2 from '../../images/hero/bigDesktop@2x.jpg';

import * as Scroll from 'react-scroll';

export const Box = styled.div`
  padding: 40px 0 71px;
  background-image: url(${mobile});
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobileX2});
  }

  @media screen and (min-width: 768px) {
    padding: 89px 0 88px;

    background-image: url(${tablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabletX2});
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 164px 0 163px;

    background-image: url(${desktop});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desktopX2});
    }
  }

  @media screen and (min-width: 2560px) {
    width: 1170px;
    margin: 0 auto;
    padding: 164px 0 163px;

    background-image: url(${bigDesktop});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bigDesktopX2});
    }
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 380px;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  margin-bottom: 21px;
  text-align: center;

  ${props => props.theme.fonts.heading}
  color: #ffffff;
`;

export const Paragraph = styled.p`
  margin-bottom: 32px;

  text-align: center;
  color: #ffffff;
`;

export const Button = styled(Scroll.Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
  margin: 0 auto;
  border: none;
  border-radius: 80px;

  background-color: #f4e041;

  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
`;
