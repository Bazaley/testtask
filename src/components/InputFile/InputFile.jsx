import { useState } from 'react';
import { FormHelperText } from '@mui/material';
import { File, LabelFile, SpanUpload, SpanPhotoName } from './InputFile.styled';

const InputFile = ({ register, errors }) => {
  const [photoName, setPhotoName] = useState(null);

  return (
    <>
      <LabelFile {...errors}>
        <SpanUpload {...errors}>Upload</SpanUpload>
        <SpanPhotoName>
          {photoName ? `${photoName}` : 'Upload your photo'}
        </SpanPhotoName>

        <File
          type="file"
          accept=".jpeg,.jpg"
          {...register('photo', {
            onChange: e => {
              setPhotoName(e.target.files[0].name);
            },

            required: 'Required field',
          })}
        />
      </LabelFile>
      <FormHelperText sx={{ color: 'red' }}>
        {errors?.photo ? errors.photo.message : null}
      </FormHelperText>
    </>
  );
};

export default InputFile;
