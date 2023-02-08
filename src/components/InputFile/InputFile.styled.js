import styled from 'styled-components';

export const File = styled.input`
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const LabelFile = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 54px;
  margin-top: 47px;
  border: ${errors => (errors.photo ? '1px solid red' : '1px solid #d0cfcf')};
  border-radius: 4px;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    max-width: 328px;
  }
`;

export const SpanUpload = styled.span`
  position: absolute;
  top: -1px;
  left: -1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 83px;
  height: 54px;
  border: ${errors =>
    errors.photo ? '1px solid red' : '1px solid rgba(0, 0, 0, 0.87)'};
  border-radius: 4px 0px 0px 4px;
  box-sizing: border-box;

  color: rgba(0, 0, 0, 0.87);
`;

export const SpanPhotoName = styled.span`
  padding-left: 99px;

  color: #7e7e7e;
`;
