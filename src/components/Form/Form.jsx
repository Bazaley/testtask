import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import Button from 'components/Button/Button';
import TextFields from 'components/TextFields/TextFields';
import RadioGroupComponent from 'components/RadioGroupComponent/RadioGroupComponent';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import InputFile from 'components/InputFile/InputFile';
import { addUser } from 'redux/register/register-operations';
import { selectSuccess } from 'redux/selectors';
import { HandySvg } from 'handy-svg';
import svg from '../../images/success-image.svg';
import { StyledForm } from './Form.styled';

const Form = () => {
  const success = useSelector(selectSuccess);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(
      addUser({
        ...data,
        photo: data.photo[0],
        phone: '+' + data.phone,
      })
    );
  };

  return (
    <Section form>
      {success ? (
        <Title name="signup">User successfully registered</Title>
      ) : (
        <Title name="signup">Working with POST request</Title>
      )}
      {success ? (
        <HandySvg src={svg} width="328" height="290" />
      ) : (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <TextFields register={register} errors={errors} />
          <RadioGroupComponent register={register} />
          <InputFile register={register} errors={errors} />
          <Button
            width="100px"
            background="#b4b4b4"
            margin="54px auto 0"
            color="rgba(255, 255, 255, 0.87)"
          >
            Sign up
          </Button>
        </StyledForm>
      )}
    </Section>
  );
};

export default Form;
