"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface ChoiceStepProps {
  onYes: () => void;
}

export function ChoiceStep({ onYes }: ChoiceStepProps) {
  const [noPosition, setNoPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [noAttempts, setNoAttempts] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const buttonWidth = 120;
    const buttonHeight = 48;
    const padding = 10;

    const maxX = rect.width - buttonWidth - padding;
    const maxY = rect.height - buttonHeight - padding;

    const x = Math.max(padding, Math.random() * maxX);
    const y = Math.max(padding, Math.random() * maxY);

    setNoPosition({ x, y });
    setNoAttempts((prev) => prev + 1);
  };

  const noMessages = [
    "No",
    "Estas segura?",
    "Piensalo bien...",
    "Sabes que quieres leerla",
    "Por favor :(",
    "No te hagas la dura",
  ];

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4 py-8">
      <div className="flex w-full max-w-md flex-col items-center gap-6 sm:gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-40 w-56 overflow-hidden rounded-2xl shadow-lg sm:h-48 sm:w-64">
            <Image
              src="/photos/choice.jpg"
              alt="Una carta para ti"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-balance text-center font-sans text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {"La siguiente página contiene una carta"}
          </h1>
          <p className="text-center text-lg text-muted-foreground sm:text-xl">
            {"Quieres leerla?"}
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative flex h-40 w-full items-center justify-center gap-4 sm:h-48 sm:gap-6"
        >
          <button
            type="button"
            onClick={onYes}
            className="z-10 rounded-xl bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-xl active:scale-95 sm:px-10 sm:py-4 sm:text-lg"
          >
            Si!
          </button>

          <button
            type="button"
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            onTouchStart={moveNoButton}
            className="z-10 rounded-xl border-2 border-border bg-card px-8 py-3 text-base font-semibold text-foreground shadow-md transition-all hover:border-primary/30 sm:px-10 sm:py-4 sm:text-lg"
            style={
              noPosition
                ? {
                    position: "absolute",
                    left: `${noPosition.x}px`,
                    top: `${noPosition.y}px`,
                    transition: "left 0.2s ease, top 0.2s ease",
                  }
                : undefined
            }
          >
            {noMessages[Math.min(noAttempts, noMessages.length - 1)]}
          </button>
        </div>
      </div>
    </div>
  );
}
