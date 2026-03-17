"use client";

import IconPressLink from "@/shared/components/IconPressLink";

export default function ControlMenuView({
  onUniversity,
  onHotel,
  onOffice,
}: {
  onUniversity: () => void;
  onHotel: () => void;
  onOffice: () => void;
}) {
  return (
    <div className=" h-full w-full flex justify-center items-center gap-20">
      <IconPressLink
        onActivate={onUniversity}
        className="text-6xl flex min-w-0 flex-col items-center"
        iconSrc="/Screen2University.png"
        iconAlt="Сургууль"
        label="Сургууль"
        labelClassName="font-medium text-[clamp(1rem,2vw,40px)] leading-none tracking-normal text-center text-white min-w-0 break-words"
      />
      <IconPressLink
        onActivate={onHotel}
        className="text-6xl flex min-w-0 flex-col items-center"
        iconSrc="/Screen2Hotel.png"
        iconAlt="Зочид буудал"
        label="Зочид буудал"
        labelClassName="font-medium text-[clamp(1rem,2vw,40px)] leading-none tracking-normal text-center text-white min-w-0 break-words"
      />
      <IconPressLink
        onActivate={onOffice}
        className="text-6xl flex min-w-0 flex-col items-center"
        iconSrc="/Screen2Office.png"
        iconAlt="Оффис"
        label="Оффис"
        labelClassName="font-medium text-[clamp(1rem,2vw,40px)] leading-none tracking-normal text-center text-white min-w-0 break-words"
      />
    </div>
  );
}
