import type { VideoCue } from '../shared/types';

const T = 0;
const END = 9999;

export const UNIVERSITY_DISAD_CUES: VideoCue[] = [
  {
    start: T,
    end: END,
    text: 'Системийн нэгдсэн удирдлагагүй,\n инженерийн дутагдалтай, ачаалалтай​',
    position: { top: '30%', left: '5%' },
    width: '20%',
  },
  {
    start: T,
    end: END,
    text: 'Төхөөрөмжийн элэгдэл, буруу холболтоос  цахилгааны асуудал үүсэж нэмэлт зардал гардаг​',
    position: { top: '60%', left: '5%' },
    width: '20%',
  },
  
  {
    start: T,
    end: END,
    text: 'Олон оюутан сүлжээнд холбогдоход Wi-Fi\nсүлжээ гацдаг​',
    position: { top: '30%', left: '78%' },
    width: '20%',
  },
  {
    start: T,
    end: END,
    text: 'Зохисгүй сайт руу хандах, вирустай файл, контент\n татах эрсдэлтэй​',
    position: { top: '60%', left: '78%' },
    width: '20%',
  }
];