"use client";

import { useRouter } from "next/navigation";
import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
} from "react";

const useLockBody = () => {
  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.setProperty(
      "--scrollBarWidth",
      `${scrollBarWidth}px`
    );

    document.body.style.overflow = "hidden";

    document.body.style.paddingRight = "var(--scrollBarWidth)";

    return () => {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0";
      document.documentElement.style.removeProperty("--scrollBarWidth");
    };
  }, []);
};

export function ModalTest({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);

  const router = useRouter();

  useLockBody();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) {
          onDismiss();
        }
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (onDismiss) {
          onDismiss();
        }
      }
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div ref={overlay} onClick={onClick} className="fixed inset-0 bg-black/70 z-10">
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-1/2 w-full h-full max-w-[90vw] max-h-[90vw] flex justify-center items-center"
      >
        <div className="w-full max-w-[500px] bg-amber-50 p-4 rounded-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
