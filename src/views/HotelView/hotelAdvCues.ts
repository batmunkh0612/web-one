import type { AdvCue } from '../shared/types';

const T = 0;
const END = 9999;

export const HOTEL_ADV_CUES: AdvCue[] = [
  {
    start: T,
    end: END,
    header: 'Сүлжээний ухаалаг шийдэл',
    subtext: 'Өрөө бүрд IPTV, IP утас дэмждэг\n хананы AP-ууд суурилуулснаар\n коридор,танхимд хүмүүс сүлжээнд\n орох боломжтой ​',
    position: { top: '42%', left: '5%' },

    width: '25.5%',
    height: '7.4%',
  },
  {
    start: T,
    end: END,
    header: 'Сүлжээний хуваарилалт',
    subtext: 'Өрөө бүрийн хэрэгцээнд нийцүүлэн\n хуваарилалт, тусгаарлалт хийж\n тасалдалгүй интернэтээр хангана',
    position: { top: '70%', left: '5%' },
    width: '18%',
    height: '20%',
  },
  {
    start: T,
    end: END,
    header: 'Мэдээллийн аюулгүй байдал',
    subtext: 'Router дээрээ халдлагын эсрэг хамгаалалттай ​',
    position: { top: '24%', left: '78%' },
    width: '19%',
    height: '7.4%',
  },
  {
    start: T,
    end: END,
    header: 'AI troubleshooting & Scheduled Optimization',
    subtext: 'Зайнаас сүлжээний асуудал,\nгэмтэл, саатлыг илрүүлж,\n засварлаж сайжруулна​',
    position: { top: '42%', left: '78%' },
    width: '19%',
    height: '7.4%',
  },
  {
    start: T,
    end: END,
    header: 'Удирдлагын нэгдсэн портал',
    subtext: 'Төхөөрөмжийн аюулгүй байдал, хандалт, ачаалалийг хаанаас ч удирдах боломжтой​​',
    position: { top: '70%', left: '78%' },
    width: '18%',
    height: '7.4%',
  },
];
