'use client';

import type { DeviceFeatureItem } from '../deviceContent';

interface DeviceFeatureListProps {
  features: DeviceFeatureItem[];
  className?: string;
}

const iconWrapperClassName =
  'w-5 h-5 text-white shrink-0 mt-0.5 [&>svg]:size-full';

export function DeviceFeatureList({ features, className }: DeviceFeatureListProps) {
  return (
    <div
      className={`flex flex-col gap-2 lg:gap-3 flex-1 min-h-0 overflow-y-auto ${className ?? ''}`}
    >
      {features.map(({ icon, text }) => (
        <div
          key={text}
          className="flex items-start gap-3 xl:gap-4"
        >
          <span className={iconWrapperClassName}>{icon}</span>
          <p className="text-gray-900 text-xs md:text-sm lg:text-base font-medium leading-snug">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}
