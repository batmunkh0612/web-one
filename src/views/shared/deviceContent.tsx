import type { ReactNode } from 'react';
import {
  IconLocation,
  IconServer,
  IconNetwork,
  IconSettings,
  IconTarget,
  IconArrows,
} from './components/deviceIcons';

export interface DeviceFeatureItem {
  icon: ReactNode;
  text: string;
}

export interface DeviceVideoContent {
  title: string;
  model: string;
  features: DeviceFeatureItem[];
}

const S220_24P2T_CONTENT: DeviceVideoContent = {
  title: 'Switch',
  model: 'S220',
  features: [
    { icon: <IconLocation />, text: 'Бүх төрлийн байгууллагад тохиромжтой​' },
    { icon: <IconServer />, text: '24 портын PoE-switch, GE/10GE uplink​' },
    { icon: <IconNetwork />, text: 'Богино холболтын хамгаалалттай​' },
    { icon: <IconSettings />, text: 'Сүлжээний хуваарилалтыг оновчтой хийнэ​\n /Оффис, санхүү, IT, зочид гэх мэт/​' },
    { icon: <IconTarget />, text: 'PoE-IEEE стандартад нийцэхгүй терминалуудыг илрүүлж, тэдгээрт тэжээл өгөх боломжтой​' },
  ],
};

const S220_8P2T_CONTENT: DeviceVideoContent = {
  title: 'Switch',
  model: 'S220S',
  features: [
    { icon: <IconLocation />, text: 'Бүх төрлийн байгууллагад тохиромжтой​' },
    { icon: <IconServer />, text: '8 портынPoE - switch​' },
    { icon: <IconNetwork />, text: 'Богино холболтын хамгаалалттай​' },
    { icon: <IconSettings />, text: 'Сүлжээний хуваарилалтыг оновчтой хийнэ​ /Оффис, санхүү, IT, зочид гэх мэт/​' },
    { icon: <IconTarget />, text: 'PoE-IEEE стандартад нийцэхгүй терминалуудыг илрүүлж, тэдгээрт тэжээл өгөх боломжтой​' },
  ],
};

const S530_24T4XE_CONTENT: DeviceVideoContent = {
  title: 'Switch',
  model: 'S530-24T4XE',
  features: [
    { icon: <IconLocation />, text: 'Их сургууль, эмнэлэг, томоохон байгууллагад тохиромжтой​' },
    { icon: <IconServer />, text: '24 портын layer 3-ийн core switch​' },
    { icon: <IconNetwork />, text: 'Хоёроос дээш switch-ийг нэг болгон виртуалчлах боломжтой​' },
    { icon: <IconSettings />, text: 'Төхөөрөмжийн менежмент, сүлжээний тохиргоог хялбараар шийднэ​​' },
    { icon: <IconTarget />, text: 'Мулти-цагариг хамгаалах STP, RSTP, MSTP, ERPS технологитой​' },
    { icon: <IconArrows />, text: 'Хэрэглээнд мэдэгдэхгүйгээр миллисекундын нарийвчлалтай switch хийнэ​' },
  ],
};

const AR730_CONTENT: DeviceVideoContent = {
  title: 'Access point',
  model: 'AR730',
  features: [
    { icon: <IconLocation />, text: 'Router, switch-ийн үүргийг давхар гүйцэтгэдэг​' },
    { icon: <IconServer />, text: 'Төхөөрөмж, апп, ажилчдын сүлжээнд хурдны дээд доод хязгаар тогтоож, хуваарилалт хийнэ\n Апп, тоглоом, мэйл гэх мэт 6000+ протокол программуудыг хязгаарлах боломжтой​' },
    { icon: <IconNetwork />, text: 'URL шүүлт хийх 12+ саяын URL дата баазтай​' },
    { icon: <IconSettings />, text: 'Мэдээллийн аюулгүй байдал 85%-аар сайжирна​' },
    { icon: <IconTarget />, text: 'Антивирус халдлагын хамгаалалттай​' },
  ],
};

const S380_S8P2T_CONTENT: DeviceVideoContent = {
  title: 'Switch',
  model: 'S380-S8P2T',
  features: [
    { icon: <IconLocation />, text: 'Мулти-сервистэй (routing + switching + PoE + WAC)​' },
    { icon: <IconServer />, text: 'Төхөөрөмж, апп,ажилчдын сүлжээнд хурдны дээд доод хязгаар тогтоож, хуваарилалт хийнэ\n Апп, тоглоом, мэйл гэх мэт протокол гэх мэт 6000+ программуудыг хязгаарлах боломжтой​' },
    { icon: <IconNetwork />, text: 'Мэдээллийн аюулгүй байдал 85%-аар сайжирна​' },
    { icon: <IconSettings />, text: 'VPN, Антивирус, халдлагын хамгаалалттай​' },
  ],
};


const AP265E_CONTENT: DeviceVideoContent = {
  title: 'Access point',
  model: 'AP265E',
  features: [
    { icon: <IconLocation />, text: 'Захирлын өрөө, жижиг хурлын өрөө, зочид буудлын өрөөнүүдэд суурилуулахад тохиромжтой​' },
    { icon: <IconServer />, text: 'Оновчтой дохио өгөх ухаалаг антентай​' },
    { icon: <IconNetwork />, text: 'Дохио дамжуулах зай: 10м​' },
    { icon: <IconSettings />, text: 'Хэрэглэгчийн тоо: 64 хүртэлх​' },
    { icon: <IconTarget />, text: 'Оролт: IPTV/PC/IP phone зэрэг мулти-порттой​​' },
    { icon: <IconArrows />, text: 'Цахилгааны хэрэглээ: 9.4Вт гар утаснаас бага​' },

  ],
};


const AP661_CONTENT: DeviceVideoContent = {
  title: 'Access point',
  model: 'AP661',
  features: [
    { icon: <IconLocation />, text: 'Таазанд суурилуулна​' },
    { icon: <IconServer />, text: 'Оновчтой дохио өгөх ухаалаг антентай​' },
    { icon: <IconNetwork />, text: 'Дохио дамжуулах зай: 30м​' },
    { icon: <IconSettings />, text: 'Хэрэглэгчийн тоо: 300 хүртэлх​' },
    { icon: <IconTarget />, text: 'Хэрэглэгч байршлаа солиход дохио тасалдахгүй байх Smart roaming тохиргоо​' },
  ],
};

const AP673_CONTENT: DeviceVideoContent = {
  title: 'Access point',
  model: 'AP673',
  features: [
    { icon: <IconLocation />, text: 'Хурд: Wi-Fi 7 дэмждэг дээд түвшний -13.66 Гбит/с хурд цацна​​' },
    { icon: <IconServer />, text: 'Дохио дамжуулах зай: 40м​' },
    { icon: <IconNetwork />, text: 'Хэрэглэгчийн тоо: 300+​' },
    { icon: <IconSettings />, text: 'Онцлог: Multi-Link operation(MLO) дамжуулалтыг сайжруулж, хоцролтыг багасгах технологитой​' },
  ],
};

const PLACEHOLDER: DeviceVideoContent = {
  title: 'DEVICE',
  model: '—',
  features: [],
};

const CONTENT_BY_VIDEO: Record<string, DeviceVideoContent> = {
  '/videos/devices/1.mp4': S530_24T4XE_CONTENT,
  '/videos/devices/2.mp4': S220_8P2T_CONTENT,
  '/videos/devices/3.mp4': AR730_CONTENT,
  '/videos/devices/4.mp4': S220_24P2T_CONTENT,
  '/videos/devices/5.mp4': S380_S8P2T_CONTENT,
  '/videos/devices/6.mp4': AP265E_CONTENT,
  '/videos/devices/7.mp4': AP661_CONTENT,
  '/videos/devices/8.mp4': AP673_CONTENT,
};

export function getDeviceContent(videoSrc: string): DeviceVideoContent {
  return CONTENT_BY_VIDEO[videoSrc] ?? PLACEHOLDER;
}
