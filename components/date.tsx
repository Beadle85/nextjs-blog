import { parseISO, format } from 'date-fns';

interface IProps {
  dateString: string;
}
export default function Date({ dateString }: IProps) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
