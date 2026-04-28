import { Paragraph, Title } from '@components/Typography';

import { Form } from './Form';

export const Contact = () => {
  return (
    <div>
      <Title>Contato.</Title>

      <Paragraph>Alô, alô marciano! Se quiser entrar em contato por e-mail, preencha o formulário abaixo. Costumo responder durante o horário comercial.</Paragraph>

      <Form />
    </div>
  );
};
