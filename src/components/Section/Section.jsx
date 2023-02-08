import { SectionStyled } from './Section.styled';

const Section = ({ children, form }) => {
  return <SectionStyled forms={form}>{children}</SectionStyled>;
};

export default Section;
