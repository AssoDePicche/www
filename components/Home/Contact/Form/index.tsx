'use client';

import { useCallback, useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import { styled } from 'styled-components';

import { Theme } from '@components/Layout/Theme';

import { createToast } from '@components/Toast';

import { useToast } from '@components/Toast/Context';

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

interface ContactRequest {
  body: string;
  from: string;
  subject: string;
}

export const Form = () => {
  const [isPending, setIsPending] = useState<boolean>(false);

  const { reset, register, handleSubmit } = useForm<ContactRequest>();

  const { addToast } = useToast();

  const onSubmit = useCallback(async (data: ContactRequest) => {
    setIsPending(true);

    const either: Either<string, string> = await sendEmail(data.body, data.from, data.subject);

    if (either.isLeft()) {
      addToast(createToast('Não foi possível enviar o e-mail', 'error'));
    } else {
      addToast(createToast('E-mail enviado', 'info'));

      reset();
    }

    setIsPending(false);
  }, []);

  const subjects: string[] = [
    'Pesquisa',
    'Outros Assuntos',
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <InputContainer>
          <Input disabled={isPending} placeholder='E-mail' type='from' {...register('from', { required: true })} />

          <Select disabled={isPending} {...register('subject', { required: true })}>
            <option disabled>Escolha um assunto</option>
            { subjects.map((subject: string, index: number) => (
              <option key={index} value={subject}>{subject}</option>
            ))}
          </Select>
        </InputContainer>

        <Textarea disabled={isPending} placeholder='Mensagem' {...register('body', { required: true })}></Textarea>
      </Container>

      <Button disabled={isPending}>{isPending ? 'Enviando...' : 'Enviar'}</Button>
    </form>
  );
};
