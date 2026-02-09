import type { AdvCue } from '../shared/types';

const T = 0;
const END = 9999;

export const OFFICE_ADV_CUES: AdvCue[] = [
  {
    start: T,
    end: END,
    header: 'Найдвартай сүлжээ',
    subtext: 'Ухаалаг AP-ууд нь байршлаас\n үл хамааран тогтмол оновчтой\n дохио дамжуулна​',
    position: { top: '25%', left: '6%' },
    width: '25.5%',
    height: '7.4%',
  },
  {
    start: T,
    end: END,
    header: 'Cүлжээний хуваарилалт',
    subtext: 'Оффисын сүлжээг IT, санхүү,\n зочдод зориулан хуваарлах\n боломжтой​',
    position: { top: '50%', left: '6%' },
    width: '25.5%',
    height: '9.2%',
  },
  {
    start: T,
    end: END,
    header: 'Хурдны зохицуулалт',
    subtext: 'Ажлын хэрэгцээнд ашиглагддаггүй\n апп, порталуудын хурдыг\n хязгаарлан зохицуулж болно​',
    position: { top: '73%', left: '6%' },
    width: '25%',
    height: '6.5%',
  },
  {
    start: T,
    end: END,
    header: 'Мэдээллийн аюулгүй байдал',
    subtext: 'Router дээрээ хадлагын эсрэг хамгаалалттай ​',
    position: { top: '25%', left: '78%' },
    width: '19%',
    height: '7.4%',
  },
  {
    start: T,
    end: END,
    header: 'AI troubleshooting & Scheduled Optimization',
    subtext: 'Зайнаас сүлжээний асуудал,\nгэмтэл, саатлыг илрүүлж,\n засварлаж сайжруулна​',
    position: { top: '50%', left: '78%' },
    width: '19%',
    height: '7.4%',
  },
  {
    start: T,
    end: END,
    header: 'Удирдлагын нэгдсэн портал',
    subtext: 'Төхөөрөмжийн аюулгүй байдал, хандалт, ачаалалийг хаанаас ч удирдах боломжтой​​',
    position: { top: '73%', left: '78%' },
    width: '18%',
    height: '7.4%',
  },
];
