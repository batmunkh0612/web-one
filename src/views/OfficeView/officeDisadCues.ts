import type { VideoCue } from "../shared/types";

const T = 0;
const END = 9999;

export const OFFICE_DISAD_CUES: VideoCue[] = [
  {
    start: T,
    end: END,
    text: "Зочдод зориулсан \nинтернэт сүлжээгүй",
    position: { top: "30%", left: "7%" },
    width: "25.5%",
    height: "7.4%",
  },
  {
    start: T,
    end: END,
    text: "Олон төхөөрөмж холбогдоход\n оффисын сүлжээ доголддог​",
    position: { top: "72%", left: "70%" },

    width: "25%",
    height: "6.5%",
  },
  {
    start: T,
    end: END,
    text: "Сүлжээнд асуудал гарахад\n заавал дуудлага өгч, цаг алддаг​",
    position: { top: "72%", left: "7%" },
    width: "25.5%",
    height: "9.2%",
  },
  {
    start: T,
    end: END,
    text: "Зах, мухрын өрөөнд\n сүлжээ муу байдаг​",
    position: { top: "22%", left: "70%" },
    width: "25%",
    height: "7.4%",
  },
  {
    start: T,
    end: END,
    text: "Сүлжээний аюулгүй\n байдлын хамгаалалтгүй​",
    position: { top: "50.5%", left: "80%" },

    width: "25%",
    height: "7.4%",
  },
];
