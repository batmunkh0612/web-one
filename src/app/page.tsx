"use client";

import { useEffect, useRef, useState } from "react";

import ControlMenuView from "@/views/ControlMenuView";
import ExamplesIframeView from "@/views/ExamplesIframeView";
import HomeMenuView from "@/views/HomeMenuView";
import HotelView from "@/views/HotelView";
import OfficeView from "@/views/OfficeView";
import UniversityView from "@/views/UniversityView";
import BackButton from "@/shared/components/BackButton";

type ViewName =
  | "home"
  | "examplesIframe"
  | "controlMenu"
  | "university"
  | "hotel"
  | "office";

const TRANSITION_MS = 260;

const Home = () => {
  const [stack, setStack] = useState<ViewName[]>(["home"]);
  const [activeView, setActiveView] = useState<ViewName>("home");
  const [isVisible, setIsVisible] = useState(true);
  const isTransitioningRef = useRef(false);
  const nextViewRef = useRef<ViewName | null>(null);

  const startTransitionTo = (next: ViewName) => {
    if (next === activeView) return;
    if (isTransitioningRef.current) return;

    isTransitioningRef.current = true;
    nextViewRef.current = next;

    setIsVisible(false);

    window.setTimeout(() => {
      const viewToShow = nextViewRef.current;
      if (viewToShow) setActiveView(viewToShow);
      requestAnimationFrame(() => setIsVisible(true));
      window.setTimeout(() => {
        isTransitioningRef.current = false;
        nextViewRef.current = null;
      }, TRANSITION_MS);
    }, TRANSITION_MS);
  };

  const navigateTo = (next: ViewName) => {
    setStack((prev) => [...prev, next]);
    startTransitionTo(next);
  };

  useEffect(() => {
    const top = stack[stack.length - 1] ?? "home";
    if (top !== activeView && !isTransitioningRef.current) {
      setActiveView(top);
    }
  }, [stack, activeView]);

  const canGoBack = stack.length > 1;

  const goBack = () => {
    setStack((prev) => {
      if (prev.length <= 1) return prev;
      const nextStack = prev.slice(0, -1);
      const nextView = nextStack[nextStack.length - 1] ?? "home";
      startTransitionTo(nextView);
      return nextStack;
    });
  };
  const renderView = () => {
    switch (activeView) {
      case "home":
        return (
          <HomeMenuView
            onExamples={() => navigateTo("examplesIframe")}
            onControl={() => navigateTo("controlMenu")}
          />
        );
      case "examplesIframe":
        return <ExamplesIframeView />;
      case "controlMenu":
        return (
          <ControlMenuView
            onUniversity={() => navigateTo("university")}
            onHotel={() => navigateTo("hotel")}
            onOffice={() => navigateTo("office")}
          />
        );
      case "university":
        return <UniversityView />;
      case "hotel":
        return <HotelView />;
      case "office":
        return <OfficeView />;
      default:
        return null;
    }
  };

  return (
    <main className="relative h-screen w-full min-w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />
      {canGoBack && <BackButton onBack={goBack} />}
      <div className="relative z-10 h-full w-full">
        <div
          className={`absolute inset-0 transition-[opacity,transform] duration-[${TRANSITION_MS}ms] ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.985]"
          }`}
        >
          {renderView()}
        </div>
      </div>
    </main>
  );
};

export default Home;
