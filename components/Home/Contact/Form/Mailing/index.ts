import emailjs from '@emailjs/browser';

import { Either, left, right } from '@types/Either';

const SERVICE_ID: string = 'service_s90agve';

const TEMPLATE_ID: string = 'template_7dfi4rl';

const PUBLIC_KEY: string = 'Jir8Bfu410gUo_zvx';

export const sendEmail = async (body: string, from: string, subject: string): Promise<Either<string, string>> => {
  const options = {
    limitRate: {
      id: 'app',
      throttle: 60000,
    },
    publicKey: PUBLIC_KEY,
  };

  const templateParams = {
    email: from,
    message: body,
    name: from,
    title: subject,
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, options);

    return right(response.text);
  } catch (error) {
    const message: string = error instanceof Error ? error.message : String(error);

    return left(message);
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, options).then(
    (response) => {
      return right(response.text);
    },
    (error) => {
      return left(error);
    },
  );
};
