import { formatDate } from 'date-fns';

import { ptBR } from 'date-fns/locale';

export const formatLocalDate = (date: Date): string => formatDate(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
