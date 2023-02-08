import { Input } from './TextFields.styled';

export default function TextFields({ register, errors }) {
  return (
    <>
      <Input
        label="Your name"
        variant="outlined"
        fullWidth
        name="name"
        {...register('name', {
          required: 'Required field',
          minLength: {
            value: 2,
            message: 'Username should contain 2-60 characters',
          },
          maxLength: {
            value: 60,
            message: 'Username should contain 2-60 characters',
          },
        })}
        error={!!errors?.name}
        helperText={errors?.name ? errors.name.message : null}
        sx={{ marginBottom: '50px' }}
      />

      <Input
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        name="email"
        {...register('email', {
          required: 'Required field',
          minLength: {
            value: 2,
            message: 'User email, must be a valid email according to RFC2822',
          },
          maxLength: {
            value: 100,
            message: 'User email, must be a valid email according to RFC2822',
          },
          pattern: {
            value:
              // eslint-disable-next-line no-control-regex
              /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
            message: 'User email, must be a valid email according to RFC2822',
          },
        })}
        error={!!errors?.email}
        helperText={errors?.email ? errors.email.message : null}
        sx={{ marginBottom: '50px' }}
      />

      <Input
        label="Phone"
        variant="outlined"
        type="number"
        fullWidth
        name="phone"
        {...register('phone', {
          required: 'Required field',
          pattern: {
            value: /^[+]{0,1}380([0-9]{9})$/,
            message: 'Number should start with code of Ukraine +380',
          },
        })}
        error={!!errors?.number}
        helperText={
          errors?.number ? errors.number.message : '+38 (XXX) XXX - XX - XX'
        }
      />
    </>
  );
}
