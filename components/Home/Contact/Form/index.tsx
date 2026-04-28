'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

import { toast } from 'sonner';

import { styled } from 'styled-components';

import { Theme } from '@components/Layout/Theme';

import { type Either } from './Mailing/Either';

import { sendEmail } from './Mailing';

const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0.4rem solid ${Theme.colors.accent};
  border-radius: 9999px;
  color: ${Theme.colors.accent};
  display: flex;
  font-weight: bold;
  font-size: 1.6rem;
  gap: 1rem;
  height: 4.8rem;
  justify-content: center;
  width: 16rem;

  &:hover {
    cursor: pointer;
  }

  @media(max-width: ${Theme.breakpoints.sm}) {
    font-size: 1.8rem;
    height: 6.4rem;
    width: 100%;
  }
`;

const Input = styled.input`
  background-color: transparent;
  border: 0.3rem solid ${Theme.colors.accent};
  border-radius: 1rem;
  color: ${Theme.colors.font};
  font-size: 1.6rem;
  height: 4.8rem;
  padding: 1rem;
  width: 32rem;

  &:focus {
    outline: none;
  }

  @media(max-width: ${Theme.breakpoints.sm}) {
    height: 5.6rem;
    width: 100%;
  }
`;

const Select = styled.select`
  background-color: transparent;
  border: 0.3rem solid ${Theme.colors.accent};
  border-radius: 1rem;
  color: ${Theme.colors.font};
  font-size: 1.6rem;
  height: 4.8rem;
  padding: 1rem;
  width: 32rem;

  &:focus {
    outline: none;
  }

  @media(max-width: ${Theme.breakpoints.sm}) {
    height: 5.6rem;
    width: 100%;
  }
`;

const Textarea = styled.textarea`
  background-color: transparent;
  border: 0.3rem solid ${Theme.colors.accent};
  border-radius: 1rem;
  color: ${Theme.colors.font};
  font-family: ${Theme.fonts.primary};
  font-size: 1.6rem;
  height: 10.9rem;
  padding: 1rem;
  min-width: 32rem;
  width: 100%;

  &:focus {
    outline: none;
  }

  @media(max-width: ${Theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media(max-width: ${Theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

interface FormData {
  body: string;
  from: string;
  subject: string;
}

export const Form = () => {
  const { reset, register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const either: Either<string, string> = await sendEmail(data.body, data.from, data.subject);

    if (either.isLeft()) {
      toast('Não foi possível enviar o e-mail');
    } else {
      toast('E-mail enviado');

      reset();
    }
  };

  const subjects: string[] = [
    'Pesquisa',
    'Outros Assuntos',
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <InputContainer>
          <Input placeholder='E-mail' type='from' {...register('from', { required: true })} />

          <Select {...register('subject', { required: true })}>
            <option>Escolha um assunto</option>
            { subjects.map((subject: string, index: number) => (
              <option key={index} value={subject}>{subject}</option>
            ))}
          </Select>
        </InputContainer>

        <Textarea placeholder='Mensagem' {...register('body', { required: true })}></Textarea>
      </Container>

      <Button>Enviar</Button>
    </form>
  );
};
