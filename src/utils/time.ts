import {DateTime} from 'luxon';

export const formatISO = (date: string) =>
  DateTime.fromISO(date).toFormat('LLL dd, yyyy');

export const formatTimestamp = (date: number) =>
  DateTime.fromMillis(date).toFormat('LLL dd, yyyy');
