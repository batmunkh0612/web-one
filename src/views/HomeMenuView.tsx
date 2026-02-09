"use client";

import IconPressLink from "@/shared/components/IconPressLink";

export default function HomeMenuView({
  onExamples,
  onControl,
}: {
  onExamples: () => void;
  onControl: () => void;
}) {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center gap-20">
      <h1 className="absolute top-35 font-manrope uppercase text-5xl font-bold text-center text-white">
        Сүлжээний ухаалаг шийдэл 
      </h1>

      <div className="flex gap-24">
        <IconPressLink
          onActivate={onExamples}
          className="text-6xl flex flex-col items-center"
          iconSrc="/Screen 1 - Udirdah portal.png"
          iconAlt="Удирдах портал"
          label="Удирдах портал"
          labelClassName="font-medium text-[clamp(1rem,2vw,40px)] leading-none tracking-normal text-center text-white w-min"
        />
        <IconPressLink
          onActivate={onControl}
          className="text-6xl flex flex-col items-center"
          iconSrc="/Screen 1 - Heregleenii jishee.png"
          iconAlt="Хэрэглээний жишээ"
          label="Хэрэглээний жишээ"
          labelClassName="font-medium text-[clamp(1rem,2vw,40px)] leading-none tracking-normal text-center text-white w-min"
        />
      </div>
    </div>
  );
}
