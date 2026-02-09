'use client';

export default function ExamplesIframeView() {
  const externalWebsiteUrl = 'https://ekit.huawei.com/';

  return (
    <div className="h-full w-full">
      <iframe
        src={externalWebsiteUrl}
        className="h-full w-full border-0"
        title="External Website"
        allow="fullscreen"
      />
    </div>
  );
}

