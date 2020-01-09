import { parseISO, format, formatDistance, formatDistanceStrict  } from 'date-fns'

export function timeFrom(isoDate) {
  return format(parseISO(isoDate), 'p');
}

export function dateFrom(isoDate) {
  return format(parseISO(isoDate), 'yyyy-MM-dd');
}

export function longDateFrom(isoDate) {
  return format(parseISO(isoDate), 'PPP');
}

export function timestampFrom(isoDate) {
  return format(parseISO(isoDate), 'Pp');
}

export function durationBetween(start, end) {
  return formatDistance(parseISO(start), parseISO(end));
}

export function minutesBetween(start, end) {
  return formatDistanceStrict(parseISO(start), parseISO(end), { unit: 'minute' }).replace(/ minutes$/, '');
}
