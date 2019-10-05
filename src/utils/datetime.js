import { parseISO, format } from 'date-fns'

export function timeFrom(isoDate) {
  return format(parseISO(isoDate), 'p');
}

export function dateFrom(isoDate) {
  return format(parseISO(isoDate), 'yyyy-MM-dd');
}

export function longDateFrom(isoDate) {
  return format(parseISO(isoDate), 'PPP');
}
