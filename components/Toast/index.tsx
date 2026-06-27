'use client';

import { FC, ReactNode, useEffect } from 'react';

import { GrFormClose } from 'react-icons/gr';

import styled from 'styled-components';

import { type Toast, useToast } from './Context';

import { Theme } from '../Layout/Theme';

const Container = styled.div`
  --_viewport-margin: 2.5vmin;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--_viewport-margin);
  inset-block: auto var(--_viewport-margin);
  inset-inline: auto var(--_viewport-margin);
  justify-content: center;
  position: fixed;
  padding: 20px;
  place-items: center;
  width: 100%;
`;

export const Message = styled.p`
  font-size: 18px;
  text-align: justify;
`;

const ToastComponent = styled.div`
  align-items: center;
  background-color: ${Theme.colors.background};
  border: 1px solid ${Theme.colors.accent};
  display: flex;
  justify-content: space-between;
  min-width: 280px;
  padding: 1rem;
  width: 100%;
`;

const Wrapper: FC<{ onRemove: (id: string) => void, toast: Toast }> = ({ onRemove, toast }): ReactNode => {
    const removeToast = () => onRemove(toast.id);

    useEffect(() => {
        const duration = toast.duration ?? 3000;

        const timer = setTimeout(() => {
            removeToast();
        }, duration);

        return () => clearTimeout(timer);
    }, []);

    return (
        <ToastComponent key={toast.id}>
            <Message>{toast.message}</Message>
            <GrFormClose onClick={removeToast} size={24} />
        </ToastComponent>
    );
};

export const Toaster: FC = (): ReactNode => {
    const { removeToast, toasts } = useToast();

    return (
      <Container>
        { toasts.map((toast) => <Wrapper key={toast.id} onRemove={removeToast} toast={toast} />)}
      </Container>
    );
};

export const createToast = (message: string, type: 'error' | 'info'): Toast => {
    return {
        duration: 3000,
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        message,
        type,
    };
};
