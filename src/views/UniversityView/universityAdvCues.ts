import type { AdvCue } from '../shared/types';

const T = 0;
const END = 9999;

export const UNIVERSITY_ADV_CUES: AdvCue[] = [
  {
    start: T,
    end: END,
    header: 'Сүлжээний ухаалаг шийдэл',
    subtext:
      'Байгууллагадаа тохирсон сүлжээний 3D төлөвлөлтийг урьдчилан хийлгээд төхөөрөмжөө зөв суурилуулан сүлжээгээ хялбараар шийдээрэй',
    position: { top: '25%', left: '5%' },
    width: '19%',
  },
  {
    start: T,
    end: END,
    header: 'Key service priority',
    subtext: 'Серверийн өрөөний сүлжээг \nүргэлж тогтвортой хангана',
    position: { top: '75%', left: '5%' },
    width: '25%',
  },
  {
    start: T,
    end: END,
    header: 'Интернэт хандалтын тохиргоо',
    subtext:
      'Багш, ажилтан, оюутныг интернэт сүлжээ​нд\n  тус тусдаа  хандахаар тохируулж болно\n ',
    position: { top: '53%', left: '5%' },

    width: '25%',
  },
  {
    start: T,
    end: END,
    header: 'Мэдээллийн аюулгүй байдал',
    subtext: 'Router дээрээ хадлагын эсрэг хамгаалалттай ​',
    position: { top: '53%', left: '78%' },

    width: '19%',
    height: '7.4%',
  },
  {
    start: T,
    end: END,
    header: 'AI troubleshooting & Scheduled Optimization',
    subtext: 'Зайнаас сүлжээний асуудал,\nгэмтэл, саатлыг илрүүлж,\n засварлаж сайжруулна​',
    position: { top: '25%', left: '78%' },
    width: '19%',
    height: '7.4%',
  },
  {
    start: T,
    end: END,
    header: 'Удирдлагын нэгдсэн портал',
    subtext: 'Төхөөрөмжийн аюулгүй байдал, хандалт, ачаалалийг хаанаас ч удирдах боломжтой​​',
    position: { top: '75%', left: '78%' },
    width: '18%',
    height: '7.4%',
  },
];