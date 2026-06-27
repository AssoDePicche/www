'use client';

import { FC, createContext, PropsWithChildren, ReactNode, useContext, useState } from 'react';

export interface Toast {
  id: string;
  message: string;
  type: 'error' | 'info';
  duration?: number;
}

interface ToastContextProperties {
    addToast: (toast: Toast) => void;
    removeToast: (id: string) => void;
    toasts: Toast[];
}

const ToastContext = createContext<ToastContextProperties | null>(null);

export const useToast = (): ToastContextProperties => {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }

    return context;
};

const useProvideToast = (): ToastContextProperties => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = (id: string) => {
        setToasts((previous) => previous.filter((toast) => toast.id !== id));
    };

    const addToast = (toast: Toast) => setToasts((previous) => [...previous, toast]);

    return {
        addToast,
        removeToast,
        toasts,
    };
};

export const ToastProvider: FC<PropsWithChildren> = ({ children }): ReactNode => {
    const toast = useProvideToast();

    return <ToastContext.Provider value={toast}>{children}</ToastContext.Provider>;
};
