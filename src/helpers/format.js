import { format } from 'date-fns';

export const formatDateToNow = date => {
  return format(new Date(date), 'Pp');
};
