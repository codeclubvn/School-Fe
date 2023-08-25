import { DATE_FORMAT } from '@/config/constants/date.const';

import dayjs from 'dayjs';

const format = (date: Date) => {
  return dayjs(date).format(DATE_FORMAT);
};

const dateHelper = {
  format,
};

export default dateHelper;
