import type { VideoCue } from '../shared/types';

const T = 0;
const END = 9999;

export const HOTEL_DISAD_CUES: VideoCue[] = [
  {
    start: T,
    end: END,
    text: 'Хүлээн авах дээр\n ачаалалаас хамаарч\n ПОС машин гацдаг ​',
    position: { top: '41%', left: '5%' },
    width: '25.5%',
    height: '7.4%',
  },
  {
    start: T,
    end: END,
    text: 'Зарим өрөө Wi-Fi сүлжээгүй,\nхурд жигд бус хурдтай​',
    position: { top: '19.7%', left: '62%' },
    width: '25.5%',
    height: '9.2%',
  },
  {
    start: T,
    end: END,
    text: 'Олон хүн цуглахад танхимын интернэт\n тасалдаж сүлжээний асуудал үүсдэг​',
    position: { top: '70%', left: '71%' },
    width: '25%',
    height: '6.5%',
  },
  
];
