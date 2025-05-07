import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';
import Duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import isBetween from 'dayjs/plugin/isBetween';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('en');

dayjs.extend(Duration);
dayjs.extend(utc);
dayjs.extend(isBetween);
dayjs.extend(relativeTime);

const defautDateFormat = 'DD/MM/YYYY';
const monthOnlyFormat = 'MM/YYYY';
const dayOnlyFormat = 'DD';

export {dayjs, defautDateFormat, monthOnlyFormat, dayOnlyFormat};
