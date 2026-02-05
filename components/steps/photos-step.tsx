"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, ImageIcon } from "lucide-react";

interface PhotosStepProps {
  onNext: () => void;
}

const photos = [
  { src: "/photos/photo-4.jpg", caption: "Foto de la cumpleañera" },
  { src: "/photos/photo-1.jpg", caption: "Concierto de Eladio Carrion" },
  { src: "/photos/photo-3.jpg", caption: "LA foto" },
  { src: "/photos/photo-2.jpg", caption: "Con frio" },
  { src: "/photos/photo-5.jpg", caption: "La cumpleañera siendo mala a los bolos" },
  { src: "/photos/photo-6.jpg", caption: "UCH" },
];

export function PhotosStep({ onNext }: PhotosStepProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <div className="flex flex-1 flex-col items-center gap-8 px-4 py-12 md:py-16">
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <ImageIcon className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-balance text-center font-sans text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Nuestros momentos
          </h1>
          <p className="text-center text-sm text-muted-foreground sm:text-base">
            Paula, cada momento contigo es un regalo
          </p>
        </div>

        <div className="grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() =>
                setSelectedPhoto(selectedPhoto === index ? null : index)
              }
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-border shadow-sm transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-3 text-left text-sm font-medium text-card">
                {photo.caption}
              </span>
            </button>
          ))}
        </div>

        {selectedPhoto !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
            onKeyDown={(e) => e.key === "Escape" && setSelectedPhoto(null)}
            role="button"
            tabIndex={0}
          >
            <div className="relative aspect-[3/4] w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl md:aspect-[4/5]">
              <Image
                src={photos[selectedPhoto].src || "/placeholder.svg"}
                alt={photos[selectedPhoto].caption}
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-6">
                <p className="text-center font-sans text-lg font-semibold text-card">
                  {photos[selectedPhoto].caption}
                </p>
              </div>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95"
        >
          <span>Continuar</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
